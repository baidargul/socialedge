"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function InlineYouTubeCard({
  id,
  label,
  eager = false,
  onPlayingChange,
}: {
  id: string;
  label: string;
  eager?: boolean;
  onPlayingChange?: (playing: boolean) => void;
}) {
  const [playing, setPlaying] = useState(false);
  const startPlaying = () => {
    setPlaying(true);
    onPlayingChange?.(true);
  };
  const params = new URLSearchParams({
    autoplay: "1",
    mute: "0",
    controls: "1",
    playsinline: "1",
    rel: "0",
  });

  if (playing) {
    return (
      <div className="absolute inset-0 bg-black">
        <iframe
          src={`https://www.youtube.com/embed/${id}?${params}`}
          title={label}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          className="h-full w-full"
        />
        <button
          type="button"
          onClick={() => { setPlaying(false); onPlayingChange?.(false); }}
          aria-label="Close video player"
          className="absolute right-2 top-2 z-20 grid h-9 w-9 place-items-center rounded-full bg-black/70 text-white backdrop-blur hover:bg-black"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    );
  }

  return (
    <button
      type="button"
      onPointerDown={(event) => {
        event.preventDefault();
        startPlaying();
      }}
      onClick={startPlaying}
      aria-label={`Play ${label}`}
      className="group absolute inset-0 h-full w-full touch-manipulation select-none text-left"
    >
      <img
        src={`https://i.ytimg.com/vi/${id}/hq720.jpg`}
        alt={label}
        loading={eager ? "eager" : "lazy"}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
      <span className="absolute bottom-3 left-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.16em] text-white">
        <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-site-primary">▶</span>
        Watch edit
      </span>
    </button>
  );
}
