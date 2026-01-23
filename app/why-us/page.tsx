import React from "react";
import Link from "next/link";
import {
  Zap,
  Users,
  Trophy,
  Clock,
  Target,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

const WhyUsPage = () => {
  const reasons = [
    {
      icon: <Zap size={40} className="text-site-btnPrimary" />,
      title: "Fast turnaround",
      description:
        "We ship first cuts in days, not weeks, without sacrificing polish.",
    },
    {
      icon: <Users size={40} className="text-site-btnPrimary" />,
      title: "Dedicated pod",
      description:
        "A focused team that knows your brand, voice, and performance goals.",
    },
    {
      icon: <Trophy size={40} className="text-site-btnPrimary" />,
      title: "Performance-first",
      description:
        "We pair storytelling with testing to find what drives conversion.",
    },
    {
      icon: <Clock size={40} className="text-site-btnPrimary" />,
      title: "Always-on coverage",
      description:
        "Global staffing means momentum never stalls on nights or weekends.",
    },
    {
      icon: <Target size={40} className="text-site-btnPrimary" />,
      title: "Clear strategy",
      description:
        "Quarterly content maps align creative output with business outcomes.",
    },
    {
      icon: <TrendingUp size={40} className="text-site-btnPrimary" />,
      title: "Scales with you",
      description:
        "Need more capacity? We add editors and designers without delay.",
    },
  ];

  const stats = [
    { number: "600+", label: "Campaigns shipped" },
    { number: "98%", label: "On-time delivery" },
    { number: "4.8/5", label: "Client satisfaction" },
    { number: "72 hrs", label: "Avg. first cut" },
  ];

  const promises = [
    "A single point of contact and weekly reporting",
    "Brand-safe creative with clear approval steps",
    "Secure file handling with NDA-ready workflows",
    "Performance insights shared every sprint",
  ];

  return (
    <div className="min-h-screen">
      <div className="bg-site-primary pt-32 pb-16 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-site-btnPrimary/70">
            Why SocialEdge
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold mt-4">
            A creative partner built for growth teams.
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-4">
            We combine elite talent with tight operations and performance
            insight to keep your marketing moving.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-white/90 p-8 rounded-2xl shadow-sm border border-white/70 hover:shadow-md transition-shadow"
            >
              <div className="mb-5">{reason.icon}</div>
              <h3 className="text-2xl font-semibold mb-3 text-site-primary">
                {reason.title}
              </h3>
              <p className="text-slate-600">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/90 p-10 rounded-3xl shadow-sm border border-white/70 mb-16">
          <h2 className="font-display text-3xl font-semibold text-center mb-10 text-site-primary">
            Numbers that matter
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-site-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div className="rounded-3xl bg-site-primary text-white p-10">
            <div className="flex items-center gap-3 text-site-btnPrimary">
              <ShieldCheck size={20} />
              <span className="text-sm uppercase tracking-[0.3em]">
                Our promise
              </span>
            </div>
            <h2 className="font-display text-3xl font-semibold mt-4">
              Built on clarity, speed, and trust.
            </h2>
            <p className="text-gray-300 mt-4">
              We operate like an internal team, with the structure and support
              to keep brand standards high.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-gray-200">
              {promises.map((promise) => (
                <li key={promise} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-site-btnPrimary"></span>
                  {promise}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-white/90 border border-white/70 p-10">
            <h3 className="font-display text-2xl font-semibold text-site-primary">
              Ready to experience the difference?
            </h3>
            <p className="text-slate-600 mt-3">
              Let's build a creative engine that makes your growth team
              unstoppable.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/pricing"
                className="rounded-full bg-site-primary px-6 py-3 text-white font-semibold hover:bg-site-primary/90 transition-colors text-center"
              >
                Start a project
              </Link>
              <Link
                href="/enterprise"
                className="rounded-full border border-site-primary/30 px-6 py-3 text-site-primary font-semibold hover:bg-site-primary/5 transition-colors text-center"
              >
                Talk enterprise
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUsPage;
