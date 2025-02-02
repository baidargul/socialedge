import Button from "@/components/ui/Button/Button";
import React from "react";
import Reels from "../../Carousels/Reels/Reels";

type Props = {};

const FirstBanner = (props: Props) => {
  return (
    <div className="flex justify-between items-center gap-4 p-4 select-none">
      <div className="flex flex-col gap-6 pl-48">
        <div className="text-6xl italic text-site-textHeadingLight">
          Your creative team’s
          <br />
          creative team™
        </div>
        <div className="text-zinc-100 text-xl">
          Scale your in-house creative team with top global talent powered by
          <br />
          industry-leading AI workflows, delivering anything you can imagine
          <br />
          fast and affordably.
        </div>
        <Button className="w-fit" style="filled">
          Get started
        </Button>
      </div>
      <div className="flex gap-3 relative h-[500px] -mt-28">
        <div className="w-full h-20 z-10 absolute top-0 left-0 bg-gradient-to-b from-site-primary to-transparent"></div>
        <div className="w-full h-20 z-10 absolute bottom-0 left-0 bg-gradient-to-t from-site-primary to-transparent"></div>
        <Reels fps={14} />
        <Reels invert speed={0.01} fps={14} />
        <Reels fps={14} />
      </div>
    </div>
  );
};

export default FirstBanner;
