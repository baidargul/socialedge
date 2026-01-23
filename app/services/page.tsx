import React from "react";
import Link from "next/link";
import {
  Target,
  Video,
  Camera,
  PlayCircle,
  BrainCog,
  Layers,
  Workflow,
} from "lucide-react";

const ServicesPage = () => {
  const services = [
    {
      title: "Performance Ad Creative",
      description:
        "Always-on ad systems with hooks, variations, and reporting.",
      icon: <Target size={40} className="text-site-btnPrimary" />,
      features: ["Creative testing", "Cutdowns + formats", "Weekly refreshes"],
    },
    {
      title: "Video Editing + Post",
      description:
        "Narrative edits, motion design, and sound that elevate your story.",
      icon: <Video size={40} className="text-site-btnPrimary" />,
      features: ["Storyboarding", "Motion graphics", "Sound design"],
    },
    {
      title: "Creator & UGC Editing",
      description:
        "We turn raw creator footage into scroll-stopping content.",
      icon: <PlayCircle size={40} className="text-site-btnPrimary" />,
      features: ["Hook optimization", "Subtitles + captions", "Brand overlays"],
    },
    {
      title: "Product Photography",
      description:
        "Studio and lifestyle shoots with a performance-first POV.",
      icon: <Camera size={40} className="text-site-btnPrimary" />,
      features: ["Studio setup", "On-location shoots", "Post-production"],
    },
    {
      title: "Design Systems",
      description:
        "Reusable layouts and motion templates for faster production.",
      icon: <Layers size={40} className="text-site-btnPrimary" />,
      features: ["Brand kits", "Template libraries", "Guideline docs"],
    },
    {
      title: "AI-Enhanced Production",
      description:
        "Speed up ideation and asset prep without losing control.",
      icon: <BrainCog size={40} className="text-site-btnPrimary" />,
      features: ["Asset tagging", "Auto-cutting", "Version scaling"],
    },
  ];

  const workflow = [
    {
      title: "Creative briefing",
      description:
        "We translate goals into a content roadmap and weekly deliverables.",
      icon: <Workflow size={20} className="text-site-primary" />,
    },
    {
      title: "Rapid production",
      description:
        "Dedicated editors + designers work in parallel to ship faster.",
      icon: <Workflow size={20} className="text-site-primary" />,
    },
    {
      title: "Performance review",
      description:
        "We analyze results and loop insights back into the next sprint.",
      icon: <Workflow size={20} className="text-site-primary" />,
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="bg-site-primary pt-28 sm:pt-32 pb-14 sm:pb-16 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-site-btnPrimary/70">
            Services
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold mt-4">
            Creative built for velocity and measurable growth.
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-4">
            From paid social to brand storytelling, we cover everything needed
            to keep your content engine running.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="rounded-full bg-site-btnPrimary px-6 py-3 text-site-primary font-semibold hover:bg-[#c9f76f] transition-colors"
            >
              Get a plan
            </Link>
            <Link
              href="/our-work"
              className="rounded-full border border-white/40 px-6 py-3 font-semibold hover:bg-white/10 transition-colors"
            >
              See client work
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white/90 p-8 rounded-2xl shadow-sm border border-white/70 hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-3 text-site-primary">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-6">{service.description}</p>
              <ul className="space-y-2 text-sm text-slate-700">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <div className="w-2 h-2 bg-site-btnPrimary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 sm:gap-10">
          <div className="rounded-3xl bg-white/80 border border-white/70 p-6 sm:p-8">
            <h2 className="font-display text-3xl font-semibold text-site-primary">
              Our production workflow
            </h2>
            <p className="text-slate-600 mt-3">
              Clear milestones, weekly sprints, and a single point of contact.
            </p>
            <div className="mt-6 space-y-4">
              {workflow.map((step) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-site-primary/10 bg-site-primary/5 p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-white p-2">
                      {step.icon}
                    </div>
                    <h3 className="font-semibold text-site-primary">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 mt-2">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl bg-site-primary text-white p-6 sm:p-8">
            <h2 className="font-display text-3xl font-semibold">
              What you get every week
            </h2>
            <p className="text-gray-300 mt-3">
              Dedicated pod, prioritized backlog, and clear feedback loops.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              {[
                "Weekly sprint planning",
                "Dedicated editor + designer",
                "Unlimited revisions",
                "Creative testing roadmap",
                "Asset library + templates",
                "Performance reporting",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/20 bg-white/5 px-4 py-3"
                >
                  {item}
                </div>
              ))}
            </div>
            <Link
              href="/pricing"
              className="inline-flex mt-6 rounded-full bg-site-btnPrimary px-6 py-3 text-site-primary font-semibold hover:bg-[#c9f76f] transition-colors"
            >
              Compare plans
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
