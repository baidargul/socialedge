"use client";

import { useEffect, useRef, useState } from "react";
import type { Mesh, PointsMaterial } from "three";

export default function CreativeUniverse({ progress = 0 }: { progress?: number }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(progress);
  const [fallback, setFallback] = useState(false);
  progressRef.current = progress;

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const narrow = window.matchMedia("(max-width: 767px)").matches;
    if (reduced || narrow || !document.createElement("canvas").getContext("webgl2")) { setFallback(true); return; }

    let disposed = false;
    let visible = true;
    let frame = 0;
    let cleanup = () => {};

    import("three").then((THREE) => {
      if (disposed || !hostRef.current) return;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
      camera.position.set(0, 0.2, 8.5);
      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.setClearColor(0x000000, 0);
      renderer.domElement.setAttribute("aria-hidden", "true");
      renderer.domElement.className = "h-full w-full";
      host.appendChild(renderer.domElement);

      const root = new THREE.Group();
      scene.add(root);
      const lime = new THREE.MeshStandardMaterial({ color: 0xd8ff85, metalness: 0.35, roughness: 0.25, emissive: 0x29451c, emissiveIntensity: 0.4 });
      const mint = new THREE.MeshStandardMaterial({ color: 0x8dfdba, metalness: 0.18, roughness: 0.35, transparent: true, opacity: 0.86 });
      const dark = new THREE.MeshStandardMaterial({ color: 0x163d37, metalness: 0.5, roughness: 0.3 });
      const core = new THREE.Mesh(new THREE.IcosahedronGeometry(1.15, 2), lime);
      root.add(core);
      const wire = new THREE.Mesh(new THREE.IcosahedronGeometry(1.42, 1), new THREE.MeshBasicMaterial({ color: 0x8dfdba, wireframe: true, transparent: true, opacity: 0.24 }));
      root.add(wire);

      const cards: Mesh[] = [];
      const cardGeometry = new THREE.BoxGeometry(0.78, 1.36, 0.08);
      const radii = [2.35, 2.85, 3.15, 2.65, 3.35, 2.45];
      radii.forEach((radius, index) => {
        const angle = (index / radii.length) * Math.PI * 2;
        const card = new THREE.Mesh(cardGeometry, index % 2 ? mint : dark);
        card.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius * 0.58, Math.sin(angle * 2) * 0.65);
        card.rotation.set(0.12 * index, -angle + Math.PI / 2, angle * 0.08);
        card.userData = { angle, radius, speed: 0.08 + index * 0.008 };
        cards.push(card); root.add(card);
      });

      const points = new Float32Array(90 * 3);
      for (let i = 0; i < 90; i++) {
        const radius = 3.5 + Math.random() * 2.5;
        const angle = Math.random() * Math.PI * 2;
        points[i * 3] = Math.cos(angle) * radius;
        points[i * 3 + 1] = (Math.random() - 0.5) * 5;
        points[i * 3 + 2] = Math.sin(angle) * radius;
      }
      const particlesGeometry = new THREE.BufferGeometry();
      particlesGeometry.setAttribute("position", new THREE.BufferAttribute(points, 3));
      const particles = new THREE.Points(particlesGeometry, new THREE.PointsMaterial({ color: 0x8dfdba, size: 0.035, transparent: true, opacity: 0.5 }));
      scene.add(particles);
      scene.add(new THREE.AmbientLight(0xffffff, 1.6));
      const key = new THREE.PointLight(0xd8ff85, 18, 20); key.position.set(3, 4, 5); scene.add(key);
      const fill = new THREE.PointLight(0x8dfdba, 12, 18); fill.position.set(-4, -2, 3); scene.add(fill);

      let pointerX = 0, pointerY = 0;
      const pointer = (event: PointerEvent) => {
        const bounds = host.getBoundingClientRect();
        pointerX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
        pointerY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
      };
      host.addEventListener("pointermove", pointer, { passive: true });
      const resize = () => {
        const width = host.clientWidth, height = host.clientHeight;
        if (!width || !height) return;
        camera.aspect = width / height; camera.updateProjectionMatrix(); renderer.setSize(width, height, false);
      };
      const resizeObserver = new ResizeObserver(resize); resizeObserver.observe(host); resize();
      const visibilityObserver = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; if (visible && !frame) frame = requestAnimationFrame(render); }, { rootMargin: "150px" });
      visibilityObserver.observe(host);
      const clock = new THREE.Clock();
      function render() {
        frame = 0; if (disposed || !visible) return;
        const time = clock.getElapsedTime();
        root.rotation.y += (pointerX * 0.13 + progressRef.current * 0.18 - root.rotation.y) * 0.025;
        root.rotation.x += (-pointerY * 0.08 - root.rotation.x) * 0.025;
        core.rotation.y = time * 0.18; core.rotation.x = time * 0.1; wire.rotation.y = -time * 0.1;
        cards.forEach((card, index) => { card.position.y += Math.sin(time * 0.7 + index) * 0.0009; card.rotation.z += card.userData.speed * 0.002; });
        particles.rotation.y = time * 0.015;
        camera.position.z = 8.5 - Math.min(1, Math.max(0, progressRef.current)) * 0.5;
        renderer.render(scene, camera); frame = requestAnimationFrame(render);
      }
      frame = requestAnimationFrame(render);
      cleanup = () => {
        cancelAnimationFrame(frame); resizeObserver.disconnect(); visibilityObserver.disconnect(); host.removeEventListener("pointermove", pointer);
        scene.traverse((object) => { if (object instanceof THREE.Mesh) object.geometry.dispose(); });
        particlesGeometry.dispose(); lime.dispose(); mint.dispose(); dark.dispose(); (particles.material as PointsMaterial).dispose();
        renderer.dispose(); renderer.forceContextLoss(); renderer.domElement.remove();
      };
    }).catch(() => setFallback(true));

    return () => { disposed = true; cleanup(); };
  }, []);

  return <div ref={hostRef} className="relative h-[420px] w-full overflow-hidden rounded-[2rem] md:h-[560px]">
    {fallback && <div className="absolute inset-0 grid place-items-center overflow-hidden bg-[radial-gradient(circle_at_center,rgba(216,255,133,.28),transparent_45%)]"><div className="relative h-52 w-52 rounded-full border border-site-btnPrimary/35 bg-site-btnPrimary/10 shadow-[0_0_100px_rgba(141,253,186,.18)]"><div className="absolute inset-7 rounded-full border border-dashed border-site-textHeadingLight/50" /><div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-2xl bg-site-btnPrimary/80" /></div></div>}
  </div>;
}
