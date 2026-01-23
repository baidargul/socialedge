import React from "react";
import Link from "next/link";
import {
  Shield,
  Users,
  Zap,
  BarChart3,
  Headphones,
  Settings,
} from "lucide-react";

const EnterprisePage = () => {
  const features = [
    {
      icon: <Shield size={40} className="text-site-btnPrimary" />,
      title: "Enterprise security",
      description:
        "SOC 2-ready workflows, NDA coverage, and secure file handling.",
    },
    {
      icon: <Users size={40} className="text-site-btnPrimary" />,
      title: "Dedicated pod",
      description:
        "A creative lead plus editors and designers dedicated to your brand.",
    },
    {
      icon: <Zap size={40} className="text-site-btnPrimary" />,
      title: "Priority processing",
      description:
        "Guaranteed timelines for launches, seasonal pushes, and campaigns.",
    },
    {
      icon: <BarChart3 size={40} className="text-site-btnPrimary" />,
      title: "Advanced analytics",
      description:
        "Performance dashboards and creative testing insights each sprint.",
    },
    {
      icon: <Headphones size={40} className="text-site-btnPrimary" />,
      title: "24/7 support",
      description:
        "Global coverage for teams that ship across time zones.",
    },
    {
      icon: <Settings size={40} className="text-site-btnPrimary" />,
      title: "Custom integrations",
      description:
        "We integrate with your project tools and asset management systems.",
    },
  ];

  const benefits = [
    "Unlimited creative requests with prioritization",
    "Custom SLAs and compliance requirements",
    "Quarterly content roadmaps and audits",
    "On-site workshops for launch planning",
    "White-label workflows available",
    "Dedicated creative operations manager",
  ];

  return (
    <div className="min-h-screen">
      <div className="bg-site-primary pt-28 sm:pt-32 pb-14 sm:pb-16 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-site-btnPrimary/70">
            Enterprise
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold mt-4">
            Enterprise-ready creative operations.
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-4">
            A scalable creative partner for multi-brand organizations and
            high-volume content teams.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white/90 p-8 rounded-2xl shadow-sm border border-white/70 hover:shadow-md transition-shadow"
            >
              <div className="mb-5">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-3 text-site-primary">
                {feature.title}
              </h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/90 p-6 sm:p-12 rounded-3xl shadow-sm border border-white/70 mb-12 sm:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-3xl font-semibold mb-6 text-site-primary">
                Enterprise benefits
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center">
                    <div className="w-2 h-2 bg-site-btnPrimary rounded-full mr-4"></div>
                    <span className="text-slate-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-3xl font-semibold mb-6 text-site-primary">
                Why enterprise teams choose us
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  You need a creative partner that understands scale, approvals,
                  and brand governance.
                </p>
                <p>
                  Our enterprise model delivers predictable output with
                  real-time reporting and quarterly planning.
                </p>
                <p>
                  We integrate with your tools, keep assets organized, and
                  become an extension of your internal team.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-site-primary text-white p-8 sm:p-12 rounded-3xl text-center">
          <h2 className="font-display text-3xl font-semibold mb-4">
            Ready to scale your creative operations?
          </h2>
          <p className="text-lg mb-8 text-gray-300">
            Meet with our enterprise team to craft a custom production plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="bg-site-btnPrimary text-site-primary px-8 py-3 rounded-full font-semibold hover:bg-[#c9f76f] transition-colors"
            >
              Schedule a demo
            </Link>
            <Link
              href="/resources"
              className="border border-white/40 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              Download enterprise deck
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterprisePage;
