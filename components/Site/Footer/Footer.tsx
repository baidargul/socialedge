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
    const observer = new IntersectionObserver(([entry]) => {
      const visible = entry.isIntersecting;
      setIsVisible(visible);
      document.documentElement.classList.toggle("footer-in-view", entry.intersectionRatio >= 0.45);
    }, { threshold: [0, 0.12, 0.45, 0.75] });
    observer.observe(footer);
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("footer-in-view");
    };
  }, []);

  return (
    <footer ref={footerRef} data-visible={isVisible} className="footer-stage relative h-[100svh] overflow-hidden bg-[#111416] text-white">
      <div className="footer-content relative z-10 mx-auto flex h-full max-w-[1500px] flex-col px-5 pt-8 sm:px-8 sm:pt-12 lg:px-14 lg:pt-14">
        <div className="grid gap-5 border-b border-white/15 pb-6 sm:gap-6 sm:pb-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.32em] text-site-btnPrimary sm:text-xs sm:tracking-[.38em]">Have something in mind?</p>
            <h2 className="mt-3 max-w-5xl font-display text-[2.25rem] font-semibold leading-[.9] tracking-[-.045em] sm:text-[clamp(2.5rem,5vw,5.5rem)] sm:leading-[.88]">Make your next idea impossible to ignore.</h2>
          </div>
          <Link href="/pricing#booking" className="group mb-1 flex w-fit items-center gap-4 rounded-full bg-site-btnPrimary py-2.5 pl-5 pr-2.5 text-sm font-semibold text-site-primary sm:gap-5 sm:py-3 sm:pl-6 sm:pr-3 sm:text-base">
            Start a project
            <span className="grid h-11 w-11 place-items-center rounded-full bg-site-primary text-white"><ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
          </Link>
        </div>

        <div className="grid gap-5 py-4 sm:grid-cols-2 sm:py-6 lg:grid-cols-[1.1fr_1fr_.8fr]">
          <div className="hidden sm:block"><p className="footer-label">Creative partner</p><p className="mt-4 max-w-sm text-sm leading-6 text-white/55">Social-first video, brand systems and digital experiences built to make attention count.</p></div>
          <nav><p className="footer-label">Explore</p><div className="mt-3 grid grid-cols-2 gap-x-8 gap-y-2 sm:mt-4 sm:gap-y-3">{links.map(([label, href]) => <Link className="w-fit text-xs text-white/60 transition hover:text-site-btnPrimary sm:text-sm" key={href} href={href}>{label}</Link>)}</div></nav>
          <div className="hidden lg:block lg:text-right"><p className="footer-label">Always connected</p><p className="mt-4 text-sm leading-6 text-white/55">Working with ambitious brands<br />wherever they are.</p></div>
        </div>

        <div className="footer-brand flex min-h-0 flex-1 flex-col justify-center border-y border-white/15 py-4">
          <Image src="/identity/SocialEdge.png" alt="SocialEdge" width={2292} height={460} className="max-h-[12svh] w-full select-none object-contain sm:max-h-[20svh]" />
          <p className="mt-2 text-center text-[8px] font-bold uppercase tracking-[.24em] text-white/35 sm:mt-5 sm:text-xs sm:tracking-[.58em]">Create attention · Build connection</p>
        </div>

        <div className="flex flex-col justify-between gap-2 py-4 text-[9px] uppercase tracking-[.16em] text-white/30 sm:flex-row">
          <span>© {new Date().getFullYear()} SocialEdge Creative</span>
          <div className="hidden gap-6 sm:flex"><span>Create attention · Build connection</span><Link href="/admin-login" className="hover:text-white">Admin</Link></div>
        </div>
      </div>

      <div className="footer-curtains pointer-events-none absolute inset-0 z-20 flex" aria-hidden="true">
        {Array.from({ length: 6 }).map((_, index) => <span key={index} className="footer-curtain h-full flex-1 border-r border-black/30" style={{ "--curtain-delay": `${index * 65}ms`, "--curtain-return": `${(5 - index) * 50}ms` } as CSSProperties} />)}
      </div>
    </footer>
  );
}
