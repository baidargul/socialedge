import React from "react";
import Image from "next/image";
import Link from "next/link";

const OurWorkPage = () => {
  const projects = [
    {
      title: "Venture Labs Launch",
      category: "SaaS Launch",
      description:
        "Full-funnel creative refresh with product explainer, ad variations, and motion system.",
      image: "/carousels/01.avif",
      tags: ["Explainer video", "Paid social", "Motion kit"],
    },
    {
      title: "Rove Wellness Growth",
      category: "Ecommerce",
      description:
        "Always-on performance creative with weekly hooks and UGC edits.",
      image: "/carousels/01.avif",
      tags: ["UGC edits", "Meta ads", "Cutdowns"],
    },
    {
      title: "Arbor Labs Brand Refresh",
      category: "Branding",
      description:
        "Updated visual system and product photography with a launch toolkit.",
      image: "/carousels/01.avif",
      tags: ["Brand system", "Photography", "Launch kit"],
    },
    {
      title: "Northline Creator Push",
      category: "Creator Marketing",
      description:
        "Creator footage transformed into high-performing paid social assets.",
      image: "/carousels/01.avif",
      tags: ["Creator editing", "Short form", "Testing"],
    },
    {
      title: "Drift Collective Series",
      category: "Social Content",
      description:
        "Weekly content engine across reels, shorts, and stories.",
      image: "/carousels/01.avif",
      tags: ["Reels", "Shorts", "Stories"],
    },
    {
      title: "Everlane Studio Ads",
      category: "Performance Creative",
      description:
        "High-impact ad suite optimized for conversion and ROAS.",
      image: "/carousels/01.avif",
      tags: ["Ad suite", "Landing visuals", "Testing"],
    },
  ];

  const highlights = [
    {
      title: "Creative pods",
      description:
        "Dedicated editor, designer, and strategist embedded into your team.",
    },
    {
      title: "Weekly shipping",
      description:
        "New hooks, variants, and edits every sprint for constant testing.",
    },
    {
      title: "Performance insights",
      description:
        "We audit top performers and share learnings with your team.",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="bg-site-primary pt-28 sm:pt-32 pb-14 sm:pb-16 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-site-btnPrimary/70">
            Our Work
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold mt-4">
            Content that earns attention and drives action.
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-4">
            Explore campaigns that combine storytelling with performance
            testing, built for growth teams.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white/90 rounded-2xl shadow-sm border border-white/70 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-[0.2em] text-site-primary/60 mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-site-primary">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-site-primary/5 text-site-primary px-3 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 sm:gap-10 items-center">
          <div className="rounded-3xl bg-site-primary text-white p-10">
            <h2 className="font-display text-3xl font-semibold">
              Our projects are built to scale.
            </h2>
            <p className="text-gray-300 mt-4">
              From first cut to performance insight, our workflow is designed
              to keep creative moving and results improving.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              {highlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="rounded-2xl border border-white/20 bg-white/5 px-4 py-3"
                >
                  <div className="font-semibold">{highlight.title}</div>
                  <p className="text-gray-300 mt-1">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl bg-white/90 border border-white/70 p-10">
            <h3 className="font-display text-2xl font-semibold text-site-primary">
              Want to see a full case study?
            </h3>
            <p className="text-slate-600 mt-3">
              We can share project breakdowns, timelines, and performance
              outcomes on request.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/pricing"
                className="rounded-full bg-site-primary px-6 py-3 text-white font-semibold hover:bg-site-primary/90 transition-colors text-center"
              >
                Request a walk-through
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-site-primary/30 px-6 py-3 text-site-primary font-semibold hover:bg-site-primary/5 transition-colors text-center"
              >
                Explore services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWorkPage;
