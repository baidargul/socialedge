"use client";

import { useMemo, useState } from "react";
import { portfolioCategories, portfolioItems, type PortfolioCategory } from "@/lib/content";
import InlineYouTubeCard from "./InlineYouTubeCard";

export default function ShortsGrid({ limit }: { limit?: number }) {
  const [category, setCategory] = useState<"All" | PortfolioCategory>("All");
  const items = useMemo(() => {
    const filtered = category === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === category);
    return limit ? filtered.slice(0, limit) : filtered;
  }, [category, limit]);
  return (
    <div>
      {!limit && <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter portfolio videos">
        {(["All", ...portfolioCategories] as const).map((item) => <button key={item} type="button" onClick={() => setCategory(item)} aria-pressed={category === item} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${category === item ? "bg-site-primary text-white" : "border border-site-primary/15 bg-white text-site-primary hover:border-site-primary/40"}`}>{item}</button>)}
      </div>}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4" aria-live="polite">
      {items.map(({ id, category: itemCategory }, index) => (
        <div
          key={id}
          className="group relative aspect-[9/16] overflow-hidden rounded-2xl bg-slate-900 shadow-soft ring-1 ring-black/10"
        >
          <InlineYouTubeCard id={id} label={`SocialEdge sample edit ${index + 1}`} eager={index < 4} />
          <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-black/55 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[.12em] text-white backdrop-blur">{itemCategory}</span>
        </div>
      ))}
      </div>
    </div>
  );
}
