"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import type { CSSProperties } from "react";

const videos = ["technews.mp4", "SaasExplainer.mp4", "podcastII.mp4", "guyexplaining.mp4", "bottlead.mp4", "podcast.mp4", "technews.mp4", "SaasExplainer.mp4"];

export default function OrbitHero() {
  return (
    <section className="orbit-hero relative flex min-h-[760px] items-center justify-center overflow-hidden bg-[#070a0a] text-white sm:min-h-screen">
      <div className="orbit-ambient absolute inset-0" />
      <div className="orbit-scene absolute inset-0 flex items-center justify-center" aria-hidden="true">
        <div className="orbit-ring">
          {videos.map((file, index) => (
            <div key={`${file}-${index}`} className="orbit-card" style={{ "--orbit-angle": `${index * 45}deg` } as CSSProperties}>
              <video src={`/videos/stock/${file}`} autoPlay loop muted playsInline preload="metadata" />
              <span className="orbit-card-shade" />
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(7,10,10,.05)_22%,rgba(7,10,10,.78)_76%,#070a0a_100%)]" />
      <div className="relative z-20 flex w-full max-w-7xl flex-col items-center px-5 text-center">
        <p className="mb-7 text-[10px] font-bold uppercase tracking-[.48em] text-site-btnPrimary sm:text-xs">SocialEdge Creatives</p>
        <Image src="/identity/SocialEdge.png" alt="SocialEdge Creative" width={2292} height={460} priority className="orbit-logo h-auto w-[min(88vw,1050px)] select-none object-contain" />
        <p className="mt-7 max-w-xl text-sm leading-6 text-white/60 sm:text-base">Content, brand and digital experiences designed to hold attention—and turn it into momentum.</p>
        <div className="pointer-events-auto mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/pricing#booking" className="group inline-flex items-center justify-center gap-3 rounded-full bg-site-btnPrimary px-6 py-3.5 font-semibold text-site-primary">Start a project <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
          <Link href="/our-work" className="rounded-full border border-white/25 bg-black/20 px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition hover:border-white/60">View our work</Link>
        </div>
      </div>
      <a href="#about" className="absolute bottom-7 left-1/2 z-20 grid h-11 w-11 -translate-x-1/2 place-items-center rounded-full border border-white/20 text-white/60 transition hover:border-white/50 hover:text-white" aria-label="Scroll to discover"><ArrowDown className="h-4 w-4" /></a>
      <span className="absolute bottom-9 left-6 z-20 hidden text-[9px] font-bold uppercase tracking-[.28em] text-white/35 sm:block">Creative studio · digital first</span>
      <span className="absolute bottom-9 right-6 z-20 hidden text-[9px] font-bold uppercase tracking-[.28em] text-white/35 sm:block">Scroll to explore</span>
    </section>
  );
}
