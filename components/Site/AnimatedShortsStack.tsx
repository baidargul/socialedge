"use client";

import { shortIds } from "@/lib/content";
import InlineYouTubeCard from "./InlineYouTubeCard";
import { useState } from "react";

const columns = [shortIds.slice(0, 6), shortIds.slice(5, 11), shortIds.slice(10, 16)];

export default function AnimatedShortsStack({ compact = false }: { compact?: boolean }) {
  const [paused, setPaused] = useState(false);
  return (
    <div className={`shorts-stack grid grid-cols-3 gap-3 overflow-hidden ${paused ? "shorts-stack-paused" : ""} ${compact ? "h-[500px]" : "h-[620px]"}`} aria-label="SocialEdge video portfolio">
      {columns.map((ids, column) => (
        <div key={column} className={`shorts-stack-column flex flex-col gap-3 ${column === 1 ? "shorts-stack-reverse" : ""}`}>
          {[...ids, ...ids].map((id, index) => (
            <div
              key={`${id}-${index}`}
              className="relative aspect-[9/16] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-xl"
            >
              <InlineYouTubeCard id={id} label={`SocialEdge sample edit ${id}`} eager={index < 2} onPlayingChange={setPaused} />
            </div>
          ))}
        </div>
      ))}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-site-primary to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-site-primary to-transparent" />
    </div>
  );
}
