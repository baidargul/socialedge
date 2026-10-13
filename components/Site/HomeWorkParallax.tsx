"use client";

import Link from "next/link";
import { ArrowUpRight, Play, X } from "lucide-react";
import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { portfolioItems } from "@/lib/content";

export default function HomeWorkParallax() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const [playingId, setPlayingId] = useState<string | null>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    document.documentElement.classList.add("home-work-snap");
    const observer = new IntersectionObserver(([entry]) => {
      document.documentElement.classList.toggle("work-parallax-in-view", entry.isIntersecting && entry.intersectionRatio >= 0.8);
    }, { threshold: [0, 0.5, 0.8, 1] });
    observer.observe(stage);
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("home-work-snap", "work-parallax-in-view");
    };
  }, []);

  useEffect(() => {
    let frame = 0;
    let smoothX = 0;
    const render = () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      if (section && track) {
        const rect = section.getBoundingClientRect();
        const distance = Math.max(1, section.offsetHeight - window.innerHeight);
        const progress = Math.max(0, Math.min(1, -rect.top / distance));
        const maxTravel = Math.max(0, track.scrollWidth - window.innerWidth + window.innerWidth * 0.08);
        const targetX = -progress * maxTravel;
        smoothX += (targetX - smoothX) * 0.075;
        track.style.transform = `translate3d(${smoothX}px,-50%,0)`;
        imageRefs.current.forEach((image) => {
          if (!image) return;
          const imageRect = image.parentElement?.getBoundingClientRect();
          if (!imageRect) return;
          const offset = (imageRect.left + imageRect.width / 2 - window.innerWidth / 2) / window.innerWidth;
          image.style.transform = `translate3d(${offset * -95}px,0,0) scale(1.22)`;
        });
      }
      frame = requestAnimationFrame(render);
    };
    frame = requestAnimationFrame(render);
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!playingId) return;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const close = (event: KeyboardEvent) => event.key === "Escape" && setPlayingId(null);
    window.addEventListener("keydown", close);
    return () => { document.body.style.overflow = oldOverflow; window.removeEventListener("keydown", close); };
  }, [playingId]);

  return (
    <section ref={sectionRef} className="home-work-parallax relative h-[700vh] bg-[#080b0b] text-white">
      <div ref={stageRef} className="sticky top-0 h-[100svh] overflow-hidden">
        <div className="absolute left-5 right-5 top-24 z-20 flex items-end justify-between sm:left-10 sm:right-10 lg:left-16 lg:right-16">
          <p className="text-[10px] font-bold uppercase tracking-[.35em] text-site-btnPrimary">Selected work · full archive</p>
          <Link href="/our-work" className="group hidden items-center gap-3 text-[10px] font-bold uppercase tracking-[.18em] text-white/55 transition hover:text-site-btnPrimary sm:flex">Open depth gallery <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Link>
        </div>

        <div ref={trackRef} className="parallax-work-track absolute left-[5vw] top-[51%] flex -translate-y-1/2 items-center gap-4 sm:gap-7">
          {portfolioItems.map(({ id, category }, index) => (
            <button key={id} type="button" onClick={() => setPlayingId(id)} className={`parallax-work-card parallax-work-card-${index % 3} group relative h-[56vh] min-h-[390px] shrink-0 overflow-hidden bg-slate-900 text-left sm:h-[62vh] sm:min-h-[460px]`} aria-label={`Play ${category} edit ${index + 1}`}>
              <img ref={(node) => { imageRefs.current[index] = node; }} src={`https://i.ytimg.com/vi/${id}/hq720.jpg`} alt="" loading={index < 5 ? "eager" : "lazy"} className="h-full w-[135%] max-w-none object-cover will-change-transform" />
              <span className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />
              <span className="absolute left-4 top-4 text-[9px] font-bold tracking-[.18em] text-white/70">{String(index + 1).padStart(2, "0")}</span>
              <span className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/30 px-2.5 py-1 text-[8px] font-bold uppercase tracking-[.12em] backdrop-blur">{category}</span>
              <span className="absolute bottom-4 left-4 grid h-10 w-10 place-items-center rounded-full bg-site-btnPrimary text-site-primary transition-transform group-hover:scale-110"><Play className="ml-0.5 h-4 w-4 fill-current" /></span>
            </button>
          ))}
          <Link href="/our-work" className="flex h-[56vh] min-h-[390px] w-[78vw] shrink-0 flex-col justify-between bg-site-btnPrimary p-7 text-site-primary sm:h-[62vh] sm:min-h-[460px] sm:w-[38vw]"><ArrowUpRight className="ml-auto h-8 w-8" /><span className="font-display text-3xl font-semibold leading-none sm:text-5xl">Explore our<br />work showcase.</span></Link>
        </div>

        <div className="absolute bottom-7 left-5 right-5 flex items-center justify-between text-[9px] font-bold uppercase tracking-[.25em] text-white/30 sm:left-10 sm:right-10 lg:left-16 lg:right-16"><span>Scroll to move sideways</span><span>01 — 16</span></div>
      </div>

      {playingId && typeof document !== "undefined" && createPortal(
        <div className="fixed inset-0 z-[9999] grid place-items-center bg-black/90 p-4 backdrop-blur-xl" onClick={() => setPlayingId(null)} role="dialog" aria-modal="true">
          <button type="button" onClick={() => setPlayingId(null)} className="fixed right-5 top-5 grid h-12 w-12 place-items-center rounded-full border border-white/25 bg-black/70 text-white" aria-label="Close video"><X className="h-5 w-5" /></button>
          <div className="aspect-[9/16] h-[min(82vh,820px)] overflow-hidden rounded-3xl border border-white/20 bg-black" onClick={(event) => event.stopPropagation()}><iframe src={`https://www.youtube.com/embed/${playingId}?autoplay=1&controls=1&playsinline=1&rel=0`} title="SocialEdge work" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen className="h-full w-full" /></div>
        </div>, document.body,
      )}
    </section>
  );
}
