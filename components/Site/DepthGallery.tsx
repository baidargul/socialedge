"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight, Volume2, VolumeX, X } from "lucide-react";
import { portfolioItems } from "@/lib/content";

const categoryCopy = {
  "Talking Head": { name: "Human stories, sharpened.", description: "Personality-led edits with considered pacing, branded captions and hooks that make expertise feel immediate." },
  Podcast: { name: "Conversations worth staying for.", description: "Long-form conversations reshaped into focused moments that carry the idea without losing its natural rhythm." },
  Educational: { name: "Make the complex feel clear.", description: "Visual structure, motion and precise editing turn useful information into content people can quickly understand." },
  Promotional: { name: "Products with a point of view.", description: "Campaign edits that make the offer clear while keeping the energy native to modern social feeds." },
  "Motion Graphics": { name: "Ideas, put into motion.", description: "Purposeful animation and graphic systems that add clarity, character and momentum to every frame." },
} as const;

export default function DepthGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [muted, setMuted] = useState(false);
  const [galleryVisible, setGalleryVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => setGalleryVisible(entry.isIntersecting && entry.intersectionRatio > 0.05),
      { threshold: [0, 0.05, 0.2] },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!playingId) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPlayingId(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [playingId]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    document.documentElement.classList.add("depth-snap-active");
    let frame = 0;

    const render = () => {
      const rect = section.getBoundingClientRect();
      const distance = Math.max(1, section.offsetHeight - window.innerHeight);
      const progress = Math.max(0, Math.min(1, -rect.top / distance));
      const phase = progress * (portfolioItems.length - 1);
      const nextActive = Math.max(0, Math.min(portfolioItems.length - 1, Math.round(phase)));
      if (nextActive !== activeIndexRef.current) {
        activeIndexRef.current = nextActive;
        setActiveIndex(nextActive);
      }

      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const relative = index - phase;
        const mobile = window.innerWidth < 640;
        const viewportScale = Math.min(1, window.innerWidth / 1200);
        const baseX = mobile ? 0 : Math.max(120, Math.min(430, window.innerWidth * 0.26));
        const isOutgoing = relative < 0;
        const z = isOutgoing ? relative * (mobile ? -360 : -480) : relative * (mobile ? -110 : -145);
        const x = baseX + (isOutgoing ? relative * (mobile ? -42 : -100) : relative * (mobile ? 7 : 13)) * viewportScale;
        const y = relative * (mobile ? 10 : 18);
        const opacity = isOutgoing ? Math.max(0, 1 + relative * 1.7) : Math.max(0, 1 - relative * 0.18);
        const scale = isOutgoing ? 1 + Math.abs(relative) * 0.12 : 1;
        card.style.transform = `translate3d(calc(-50% + ${x}px), calc(-50% + ${y}px), ${z}px) rotateY(-4deg) rotateZ(${relative * 0.8}deg) scale(${scale})`;
        card.style.opacity = String(Math.max(0, Math.min(1, opacity)));
        card.style.pointerEvents = Math.abs(relative) < 0.55 ? "auto" : "none";
        card.style.zIndex = String(1000 - index);
      });
      frame = requestAnimationFrame(render);
    };

    frame = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(frame);
      document.documentElement.classList.remove("depth-snap-active");
    };
  }, []);

  const activeItem = portfolioItems.find((item) => item.id === playingId);
  const currentItem = portfolioItems[activeIndex];
  const currentCopy = categoryCopy[currentItem.category];
  const params = new URLSearchParams({ autoplay: "1", controls: "1", playsinline: "1", rel: "0" });
  const jumpToCategory = (category: keyof typeof categoryCopy) => {
    const section = sectionRef.current;
    const index = portfolioItems.findIndex((item) => item.category === category);
    if (!section || index < 0) return;
    const sectionTop = window.scrollY + section.getBoundingClientRect().top;
    const distance = section.offsetHeight - window.innerHeight;
    window.scrollTo({ top: sectionTop + (index / (portfolioItems.length - 1)) * distance, behavior: "smooth" });
  };

  return (
    <>
    <section ref={sectionRef} className="depth-gallery-section relative h-[650vh] bg-[#080b0b] text-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {portfolioItems.map((item, index) => (
          <span
            key={item.id}
            className="depth-snap-point absolute left-0 h-px w-px"
            style={{ top: `${(index / (portfolioItems.length - 1)) * 550}vh` }}
          />
        ))}
        <span className="depth-snap-point absolute left-0 top-[calc(100%-1px)] h-px w-px" />
      </div>
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="depth-gallery-haze absolute inset-0" />
        <div className="depth-orbit depth-orbit-one" aria-hidden="true" />
        <div className="depth-orbit depth-orbit-two" aria-hidden="true" />

        <header className="absolute left-5 right-5 top-28 z-[120] sm:left-10 sm:right-10 lg:left-16 lg:right-auto lg:top-1/2 lg:w-[38vw] lg:max-w-xl lg:-translate-y-1/2">
          <div key={activeIndex} className="depth-copy-enter">
            <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-site-btnPrimary sm:text-sm">{currentItem.category}</p>
            <h1 className="mt-3 max-w-[18rem] font-display text-3xl font-semibold leading-[.95] sm:mt-4 sm:max-w-none sm:text-6xl lg:text-7xl">{currentCopy.name}</h1>
            <p className="mt-4 max-w-[20rem] text-xs leading-5 text-white/55 sm:mt-6 sm:max-w-lg sm:text-base sm:leading-7">{currentCopy.description}</p>
          </div>
          <button type="button" onClick={() => setMuted((value) => !value)} aria-pressed={muted} className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.04] py-2 pl-2 pr-4 text-[9px] font-bold uppercase tracking-[.18em] text-white/65 backdrop-blur transition hover:border-site-btnPrimary/50 hover:text-white sm:mt-7 sm:gap-3 sm:py-2.5 sm:pl-3 sm:pr-5 sm:text-[10px]">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-site-btnPrimary text-site-primary sm:h-8 sm:w-8">{muted ? <VolumeX className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> : <Volume2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />}</span>
            {muted ? "Sound off" : "Sound on"}
          </button>
        </header>

        <div className="depth-gallery-scene absolute inset-0">
          {portfolioItems.map(({ id, category }, index) => (
            <div key={id} ref={(node) => { cardRefs.current[index] = node; }} className="depth-card absolute left-1/2 top-[70%] aspect-[9/16] w-[140px] overflow-hidden rounded-2xl border border-white/15 bg-slate-950 shadow-[0_35px_100px_rgba(0,0,0,.72)] sm:top-[57%] sm:w-[195px] lg:top-1/2 lg:w-[245px]">
              <button type="button" onClick={() => setPlayingId(id)} aria-label={`Play SocialEdge ${category} edit ${index + 1}`} className="group absolute inset-0 h-full w-full text-left">
                {activeIndex === index && galleryVisible ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=${muted ? 1 : 0}&controls=0&loop=1&playlist=${id}&playsinline=1&rel=0&modestbranding=1&iv_load_policy=3`}
                    title={`${category} autoplay preview`}
                    allow="autoplay; encrypted-media; picture-in-picture"
                    tabIndex={-1}
                    className="pointer-events-none h-full w-full scale-[1.03] object-cover"
                  />
                ) : (
                  <img src={`https://i.ytimg.com/vi/${id}/hq720.jpg`} alt="" loading={index < 6 ? "eager" : "lazy"} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                )}
              </button>
              <span className="pointer-events-none absolute right-3 top-3 rounded-full border border-white/15 bg-black/55 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[.12em] text-white backdrop-blur">{category}</span>
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute bottom-7 left-5 right-5 z-[120] flex items-end justify-between sm:left-10 sm:right-10 lg:left-16 lg:right-16">
          <span className="text-[9px] font-bold uppercase tracking-[.3em] text-white/35">Scroll · explore · play</span>
          <span className="h-px w-24 bg-gradient-to-r from-site-btnPrimary to-transparent sm:w-52" />
        </div>

      </div>
      {playingId && activeItem && typeof document !== "undefined" && createPortal(
        <div className="depth-player fixed inset-0 z-[9999] grid place-items-center bg-black/90 p-4 backdrop-blur-xl sm:p-8" role="dialog" aria-modal="true" aria-label={`${activeItem.category} video player`} onClick={() => setPlayingId(null)}>
          <button type="button" onClick={() => setPlayingId(null)} className="fixed right-5 top-5 z-[10000] grid h-12 w-12 place-items-center rounded-full border border-white/25 bg-black/70 text-white shadow-xl backdrop-blur transition hover:bg-white hover:text-black sm:right-8 sm:top-8" aria-label="Close video"><X className="h-5 w-5" /></button>
          <div className="relative aspect-[9/16] h-[min(82vh,820px)] max-h-full max-w-full overflow-hidden rounded-[1.5rem] border border-white/20 bg-black shadow-[0_40px_150px_rgba(0,0,0,.9)]" onClick={(event) => event.stopPropagation()}>
            <iframe src={`https://www.youtube.com/embed/${playingId}?${params}`} title={`SocialEdge ${activeItem.category} edit`} allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen className="h-full w-full" />
          </div>
        </div>,
        document.body,
      )}
    </section>
    <section className="category-index min-h-screen scroll-mt-24 overflow-hidden bg-[#eeeae1] px-5 py-16 text-site-primary sm:px-10 lg:px-16 lg:py-14">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-8 grid gap-6 lg:grid-cols-[1fr_.55fr] lg:items-end">
          <div><p className="text-[10px] font-bold uppercase tracking-[.35em] text-emerald-800">Find your format</p><h2 className="mt-3 max-w-3xl font-display text-5xl font-semibold leading-[.9] sm:text-6xl">Pick a lane.<br />See the work.</h2></div>
          <p className="max-w-sm text-sm leading-6 text-site-primary/60 lg:justify-self-end">Every format solves a different creative problem. Choose one to jump straight into that part of the archive.</p>
        </div>
        <div className="category-bento grid gap-3 md:grid-cols-2 lg:grid-cols-6 lg:grid-rows-2">
          {(Object.keys(categoryCopy) as Array<keyof typeof categoryCopy>).map((category, index) => {
            const count = portfolioItems.filter((item) => item.category === category).length;
            return (
              <button key={category} type="button" onClick={() => jumpToCategory(category)} className={`category-tile category-tile-${index + 1} group relative flex min-h-48 flex-col justify-between overflow-hidden rounded-[1.5rem] p-6 text-left`}>
                <span className="category-tile-glow absolute -right-16 -top-16 h-40 w-40 rounded-full bg-site-btnPrimary/20 blur-3xl transition-transform duration-700 group-hover:scale-150" />
                <div className="relative flex items-start justify-between">
                  <span className="text-[9px] font-bold uppercase tracking-[.2em] opacity-45">{String(index + 1).padStart(2, "0")} · {count} projects</span>
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-current/20 transition duration-300 group-hover:rotate-45 group-hover:bg-site-btnPrimary group-hover:text-site-primary"><ArrowUpRight className="h-4 w-4" /></span>
                </div>
                <div className="relative">
                  <span className="font-display text-3xl font-semibold leading-none tracking-tight sm:text-4xl">{category}</span>
                  <p className="mt-3 max-w-sm text-xs leading-5 opacity-55">{categoryCopy[category].description}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
    </>
  );
}
