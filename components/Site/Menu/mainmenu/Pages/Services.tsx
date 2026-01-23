import {
  Brain,
  BrainCog,
  Camera,
  Facebook,
  PlayCircle,
  Target,
  Video,
  Videotape,
} from "lucide-react";
import React from "react";
import Row, { MenuRowType } from "../Row";

type Props = {};

const Services = (props: Props) => {
  const creativeRows: MenuRowType[] = [
    {
      title: "Performance ads",
      description: "Hooks, cutdowns, and rapid testing",
      icon: <Target size={16} />,
    },
    {
      title: "Social content",
      description: "Reels, shorts, and always-on assets",
      icon: <Facebook size={16} />,
    },
    {
      title: "Video editing",
      description: "Narrative edits + motion graphics",
      icon: <Video size={16} />,
    },
    {
      title: "Product photography",
      description: "Studio + lifestyle shoots",
      icon: <Camera size={16} />,
    },
  ];

  const specialRows: MenuRowType[] = [
    {
      title: "Launch kits",
      description: "Hero video + brand visuals",
      icon: <Videotape size={16} />,
    },
    {
      title: "Motion systems",
      description: "Templates and animated packs",
      icon: <PlayCircle size={16} />,
    },
  ];

  const aiRows: MenuRowType[] = [
    {
      title: "AI assisted edits",
      description: "Faster cutdowns and tagging",
      icon: <BrainCog size={16} />,
    },
    {
      title: "AI visuals",
      description: "Concepting and asset scaling",
      icon: <Camera size={16} />,
    },
    {
      title: "AI consulting",
      description: "Workflow and tooling strategy",
      icon: <Brain size={16} />,
    },
  ];

  return (
    <div className="w-[980px] rounded-3xl border border-white/25 bg-slate-950 p-5 text-white shadow-soft backdrop-blur-xl">
      <div className="grid grid-cols-3 gap-4">
        <section className="rounded-2xl border border-white/15 bg-white/10 p-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-site-btnPrimary/80">
            Creative
          </div>
          <div className="mt-4 space-y-2">
            {creativeRows.map((row, index) => (
              <Row
                key={index}
                title={row.title}
                description={row.description}
                icon={row.icon}
                tone="dark"
              />
            ))}
          </div>
        </section>
        <section className="rounded-2xl border border-white/15 bg-white/10 p-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-site-btnPrimary/80">
            Production
          </div>
          <div className="mt-4 space-y-2">
            {specialRows.map((row, index) => (
              <Row
                key={index}
                title={row.title}
                description={row.description}
                icon={row.icon}
                tone="dark"
              />
            ))}
          </div>
        </section>
        <section className="rounded-2xl border border-white/15 bg-white/10 p-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-site-btnPrimary/80">
            AI studio
          </div>
          <div className="mt-4 space-y-2">
            {aiRows.map((row, index) => (
              <Row
                key={index}
                title={row.title}
                description={row.description}
                icon={row.icon}
                tone="dark"
              />
            ))}
          </div>
        </section>
      </div>
      <div className="mt-4 rounded-2xl border border-white/15 bg-gradient-to-r from-white/15 via-white/5 to-white/15 px-4 py-3 text-sm text-gray-200">
        Dedicated pods, weekly sprints, and performance insights built into every
        service.
      </div>
    </div>
  );
};

export default Services;
