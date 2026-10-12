"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

const links = [["Services", "/services"], ["Our Work", "/our-work"], ["Why Us", "/why-us"], ["Resources", "/resources"], ["For Teams", "/enterprise"]] as const;

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.12 });
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} data-visible={isVisible} className="footer-stage relative overflow-hidden bg-[#111416] text-white">
      <div className="footer-content relative z-10 mx-auto max-w-[1500px] px-5 pb-6 pt-16 sm:px-8 sm:pt-24 lg:px-14">
        <div className="grid gap-10 border-b border-white/15 pb-14 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.38em] text-site-btnPrimary">Have something in mind?</p>
            <h2 className="mt-5 max-w-5xl font-display text-[clamp(3rem,7vw,7.4rem)] font-semibold leading-[.88] tracking-[-.05em]">Make your next idea impossible to ignore.</h2>
          </div>
          <Link href="/pricing#booking" className="group mb-1 flex w-fit items-center gap-5 rounded-full bg-site-btnPrimary py-3 pl-6 pr-3 font-semibold text-site-primary">
            Start a project
            <span className="grid h-11 w-11 place-items-center rounded-full bg-site-primary text-white"><ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
          </Link>
        </div>

        <div className="grid gap-10 py-10 sm:grid-cols-2 lg:grid-cols-[1.1fr_1fr_.8fr]">
          <div><p className="footer-label">Creative partner</p><p className="mt-4 max-w-sm text-sm leading-6 text-white/55">Social-first video, brand systems and digital experiences built to make attention count.</p></div>
          <nav><p className="footer-label">Explore</p><div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-3">{links.map(([label, href]) => <Link className="w-fit text-sm text-white/60 transition hover:text-site-btnPrimary" key={href} href={href}>{label}</Link>)}</div></nav>
          <div className="lg:text-right"><p className="footer-label">Always connected</p><p className="mt-4 text-sm leading-6 text-white/55">Working with ambitious brands<br />wherever they are.</p></div>
        </div>

        <div className="footer-brand border-y border-white/15 py-8 sm:py-10">
          <Image src="/identity/SocialEdge.png" alt="SocialEdge" width={2292} height={460} className="h-auto w-full select-none object-contain" />
          <p className="mt-5 text-center text-[9px] font-bold uppercase tracking-[.32em] text-white/35 sm:text-xs sm:tracking-[.58em]">Create attention · Build connection</p>
        </div>

        <div className="flex flex-col justify-between gap-3 py-5 text-[10px] uppercase tracking-[.18em] text-white/30 sm:flex-row">
          <span>© {new Date().getFullYear()} SocialEdge Creative</span>
          <div className="flex gap-6"><span>Built for the scroll</span><Link href="/admin-login" className="hover:text-white">Admin</Link></div>
        </div>
      </div>

      <div className="footer-curtains pointer-events-none absolute inset-0 z-20 flex" aria-hidden="true">
        {Array.from({ length: 6 }).map((_, index) => <span key={index} className="footer-curtain h-full flex-1 border-r border-black/30" style={{ "--curtain-delay": `${index * 65}ms`, "--curtain-return": `${(5 - index) * 50}ms` } as CSSProperties} />)}
      </div>
    </footer>
  );
}
