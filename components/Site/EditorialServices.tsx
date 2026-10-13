"use client";

import Link from "next/link";
import { ArrowUpRight, Layers, MonitorSmartphone, Palette, ShoppingBag, Sparkles, Video } from "lucide-react";
import { useEffect } from "react";
import { services } from "@/lib/content";

const icons = [Video, Sparkles, ShoppingBag, MonitorSmartphone, Layers, Palette];

export default function EditorialServices() {
  useEffect(() => {
    document.documentElement.classList.add("homepage-service-snap");
    return () => document.documentElement.classList.remove("homepage-service-snap");
  }, []);

  return (
    <section className="services-snap relative flex h-[100svh] min-h-[680px] flex-col overflow-hidden bg-[#0a211f] px-5 pb-8 pt-24 text-white sm:px-8 sm:pb-10 sm:pt-28 lg:px-14">
      <div className="services-snap-glow pointer-events-none absolute inset-0" />
      <div className="relative mx-auto flex h-full w-full max-w-[1500px] flex-col">
        <div className="grid gap-4 lg:grid-cols-[1fr_.65fr] lg:items-end">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.36em] text-site-btnPrimary">One team · six disciplines</p>
            <h2 className="mt-3 font-display text-[clamp(3.2rem,7vw,7.2rem)] font-semibold leading-[.82] tracking-[-.06em]">Built to move<br />brands forward.</h2>
          </div>
          <div className="flex items-end justify-between gap-5 lg:pb-1">
            <p className="hidden max-w-sm text-sm leading-6 text-white/50 sm:block">Strategy, content, design and technology—connected from the first idea to the final experience.</p>
            <Link href="/services" className="group hidden shrink-0 items-center gap-2 text-[10px] font-bold uppercase tracking-[.18em] text-site-btnPrimary sm:flex">All services <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Link>
          </div>
        </div>

        <div className="services-deck mt-7 min-h-0 flex-1 lg:mt-9">
          {services.map((service, index) => {
            const Icon = icons[index];
            return (
              <Link href={`/services/${service.slug}`} key={service.slug} className="service-snap-card group relative flex flex-col justify-between overflow-hidden border-l border-white/15 px-5 py-5 transition duration-500 hover:bg-site-btnPrimary hover:text-site-primary sm:px-6 sm:py-6">
                <div className="flex items-center justify-between">
                  <Icon className="h-5 w-5 opacity-70" />
                  <span className="font-mono text-[9px] font-bold tracking-[.2em] opacity-40">/{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="mt-10">
                  <h3 className="font-display text-[1.7rem] font-semibold leading-[.98] tracking-tight">{service.title}</h3>
                  <p className="mt-4 line-clamp-3 text-xs leading-5 text-white/45 transition-colors group-hover:text-site-primary/65">{service.description}</p>
                  <span className="mt-6 inline-flex h-9 w-9 items-center justify-center rounded-full border border-current/25 transition-transform duration-300 group-hover:rotate-45"><ArrowUpRight className="h-4 w-4" /></span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
