"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Header/Navbar";
import Footer from "./Footer/Footer";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const admin = path.startsWith("/admin");

  useEffect(() => {
    if (admin) return;
    const root = document.documentElement;
    let lastY = window.scrollY;
    let lastTime = performance.now();
    let target = 0;
    let current = 0;
    let frame = 0;

    const onScroll = () => {
      const now = performance.now();
      const elapsed = Math.max(16, now - lastTime);
      target = Math.max(-1, Math.min(1, ((window.scrollY - lastY) / elapsed) / 2));
      lastY = window.scrollY;
      lastTime = now;
    };

    const render = () => {
      current += (target - current) * 0.13;
      target *= 0.9;
      const force = Math.abs(current);
      root.style.setProperty("--global-skew", `${current * -1.8}deg`);
      root.style.setProperty("--global-stretch", `${1 + force * 0.032}`);
      root.style.setProperty("--global-shift", `${current * -10}px`);
      root.style.setProperty("--global-blur", `${force * 0.65}px`);
      root.style.setProperty("--media-skew", `${current * -4.5}deg`);
      root.style.setProperty("--media-stretch", `${1 + force * 0.12}`);
      root.style.setProperty("--media-blur", `${force * 1.4}px`);
      frame = requestAnimationFrame(render);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    frame = requestAnimationFrame(render);
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
      ["--global-skew", "--global-stretch", "--global-shift", "--global-blur", "--media-skew", "--media-stretch", "--media-blur"].forEach((property) => root.style.removeProperty(property));
    };
  }, [admin]);

  if (admin) return <>{children}</>;
  return <><Navbar /><div className="site-scroll-surface"><main className="min-h-screen">{children}</main><Footer /></div></>;
}
