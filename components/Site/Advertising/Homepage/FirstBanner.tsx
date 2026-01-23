import Button from "@/components/ui/Button/Button";
import React from "react";
import Reels from "../../Carousels/Reels/Reels";
import Link from "next/link";

type Props = {};

const FirstBanner = (props: Props) => {
  return (
    <div className="max-w-6xl mx-auto px-4 pb-12 pt-24 sm:pt-28 lg:pt-36 select-none">
      <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
        <div className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-site-textHeadingLight">
            Video editing + performance marketing
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight text-site-textHeadingLight">
            Your creative team's creative team, built for growth.
          </h1>
          <p className="text-zinc-100 text-lg md:text-xl">
            Scale content production with senior editors, strategists, and
            motion designers. We turn raw footage into campaigns that convert,
            move fast, and stay on brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/pricing">
              <Button className="w-fit px-7 py-3" style="filled">
                Get a demo
              </Button>
            </Link>
            <Link href="/our-work">
              <Button
                className="w-fit px-7 py-3 border-white/60 text-white hover:bg-white/10"
                style="outlined"
              >
                See our reel
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 text-sm text-zinc-200">
            <div>
              <div className="text-2xl font-semibold text-site-btnPrimary">
                72 hrs
              </div>
              Average first cut
            </div>
            <div>
              <div className="text-2xl font-semibold text-site-btnPrimary">
                4.8/5
              </div>
              Client satisfaction
            </div>
            <div>
              <div className="text-2xl font-semibold text-site-btnPrimary">
                600+
              </div>
              Campaigns shipped
            </div>
          </div>
        </div>
        <div className="hidden lg:flex gap-3 relative h-[520px] -mt-8">
          <div className="w-full h-20 z-10 absolute top-0 left-0 bg-gradient-to-b from-site-primary to-transparent"></div>
          <div className="w-full h-20 z-10 absolute bottom-0 left-0 bg-gradient-to-t from-site-primary to-transparent"></div>
          <Reels fps={14} />
          <Reels invert speed={1} fps={14} />
          <Reels fps={14} />
        </div>
      </div>
      <div className="mt-10 lg:hidden relative">
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-site-primary to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-site-primary to-transparent z-10"></div>
        <div className="rounded-3xl border border-white/15 bg-white/5 p-4 backdrop-blur">
          <Reels direction="horizontal" gap={14} speed={0.6} fps={40} />
        </div>
      </div>
    </div>
  );
};

export default FirstBanner;
