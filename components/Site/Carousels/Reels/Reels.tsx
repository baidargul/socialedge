"use client";
import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";

type ReelProps = {
  gap?: number;
  direction?: "vertical" | "horizontal";
  invert?: boolean;
  speed?: number; // Speed in pixels per frame
  fps?: number; // Frames per second
  images?: ReelImageType[];
  className?: string;
  pauseOnHover?: boolean;
  startIndex?: number; // NEW: start from a specific image index
};

export type ReelImageType = {
  image: string;
  alt: string;
  linK?: string;
  link?: string;
  title?: string;
  description?: string;
};

const Reels = ({
  gap = 12,
  direction = "vertical",
  invert = false,
  speed = 1,
  fps = 60,
  startIndex = 0,
  images = [
    { image: `/carousels/0125(1).gif`, alt: "Image 1" },
    { image: `/carousels/0125(2).gif`, alt: "Image 2" },
    { image: `/carousels/0125(3).gif`, alt: "Image 3" },
    { image: `/carousels/0125(4).gif`, alt: "Image 4" },
    { image: `/carousels/0125(5).gif`, alt: "Image 5" },
  ],
  className = "",
  pauseOnHover = false,
}: ReelProps) => {
  const reelRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [isHovered, setIsHovered] = useState(false);
  const [dragging, setDragging] = useState(false);

  const pointerRef = useRef<{ active: boolean; last: number }>({
    active: false,
    last: 0,
  });

  const offsetRef = useRef(0);
  const sizeRef = useRef(0);

  const loopImages = useMemo(() => {
    if (!images || images.length === 0) return [];

    const safeIndex =
      ((startIndex % images.length) + images.length) % images.length;

    const rotated = [
      ...images.slice(safeIndex),
      ...images.slice(0, safeIndex),
    ];

    const repeat = 3;
    return Array.from({ length: repeat }, () => rotated).flat();
  }, [images, startIndex]);

  // Measure track size so we can loop smoothly with transforms.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updateSize = () => {
      const size =
        direction === "vertical" ? track.scrollHeight : track.scrollWidth;

      // Because we repeat the rotated list 3 times.
      sizeRef.current = size / 3;

      // Keep offset in bounds after resize
      const base = sizeRef.current || 1;
      offsetRef.current = ((offsetRef.current % base) + base) % base;

      const translate =
        direction === "vertical"
          ? `translate3d(0, ${-offsetRef.current}px, 0)`
          : `translate3d(${-offsetRef.current}px, 0, 0)`;
      track.style.transform = translate;
    };

    updateSize();
    const observer = new ResizeObserver(updateSize);
    observer.observe(track);
    return () => observer.disconnect();
  }, [direction, loopImages.length]);

  // Reset offset when the startIndex/images change so the new start is respected.
  useEffect(() => {
    offsetRef.current = 0;
    const track = trackRef.current;
    if (!track) return;

    const translate =
      direction === "vertical"
        ? `translate3d(0, ${-offsetRef.current}px, 0)`
        : `translate3d(${-offsetRef.current}px, 0, 0)`;
    track.style.transform = translate;
  }, [startIndex, direction, images]);

  // Smooth animation using requestAnimationFrame + transforms.
  useEffect(() => {
    let animationFrame = 0;
    let lastTime = performance.now();

    const step = (now: number) => {
      const track = trackRef.current;

      if (
        track &&
        sizeRef.current > 0 &&
        (!pauseOnHover || !isHovered) &&
        !dragging
      ) {
        const delta = now - lastTime;
        const frame = 1000 / fps;

        const scrollAmount = (invert ? -1 : 1) * speed * (delta / frame);
        offsetRef.current += scrollAmount;

        const size = sizeRef.current;
        offsetRef.current = ((offsetRef.current % size) + size) % size;

        const translate =
          direction === "vertical"
            ? `translate3d(0, ${-offsetRef.current}px, 0)`
            : `translate3d(${-offsetRef.current}px, 0, 0)`;

        track.style.transform = translate;
      }

      lastTime = now;
      animationFrame = requestAnimationFrame(step);
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [
    isHovered,
    dragging,
    direction,
    invert,
    speed,
    fps,
    loopImages.length,
    pauseOnHover,
  ]);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    pointerRef.current.active = true;
    pointerRef.current.last = direction === "vertical" ? e.clientY : e.clientX;
    setDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!pointerRef.current.active || !trackRef.current) return;

    const current = direction === "vertical" ? e.clientY : e.clientX;
    const delta = pointerRef.current.last - current;

    offsetRef.current += delta;

    const size = sizeRef.current || 1;
    offsetRef.current = ((offsetRef.current % size) + size) % size;

    const translate =
      direction === "vertical"
        ? `translate3d(0, ${-offsetRef.current}px, 0)`
        : `translate3d(${-offsetRef.current}px, 0, 0)`;

    trackRef.current.style.transform = translate;
    pointerRef.current.last = current;
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    pointerRef.current.active = false;
    setDragging(false);
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  return (
    <div
      ref={reelRef}
      className={`relative ${
        direction === "vertical" ? "h-full w-full" : "w-full h-full"
      } overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={() => {
        pointerRef.current.active = false;
        setDragging(false);
      }}
      style={{ cursor: dragging ? "grabbing" : "grab" }}
    >
      <div
        ref={trackRef}
        className={`flex ${
          direction === "vertical"
            ? "flex-col min-h-max"
            : "flex-row min-w-max"
        }`}
        style={{
          gap: `${gap}px`,
          flexWrap: "nowrap",
          willChange: "transform",
        }}
      >
        {loopImages.map((image, index) => {
          const href = image.link ?? image.linK;

          const content = (
            <div className="relative">
              <Image
                src={image.image}
                width={200}
                height={200}
                className="rounded-xl select-none"
                alt={image.alt}
                draggable={false}
              />

              {image.title && image.title.length > 0 && (
                <div className="absolute z-20 bottom-1 text-white flex justify-center items-center text-center w-full text-sm">
                  {image.title}
                </div>
              )}

              {image.title && image.title.length > 0 && (
                <div className="w-full h-[40%] rounded-b-xl absolute bottom-0 z-10 bg-gradient-to-t from-black/60 to-transparent" />
              )}
            </div>
          );

          return (
            <div key={`${image.image}-${index}`} className="flex-shrink-0">
              {href ? (
                <a href={href} aria-label={image.alt} className="block">
                  {content}
                </a>
              ) : (
                content
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reels;
