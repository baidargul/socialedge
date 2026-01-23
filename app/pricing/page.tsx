import React from "react";
import Link from "next/link";
import { Check } from "lucide-react";

const PricingPage = () => {
  const plans = [
    {
      name: "Starter",
      price: "$1,200",
      period: "per month",
      description: "For lean teams shipping consistently on social.",
      features: [
        "8 assets per month",
        "1 dedicated editor",
        "2 content platforms",
        "48-72 hr turnaround",
        "Monthly performance recap",
      ],
      popular: false,
    },
    {
      name: "Growth",
      price: "$3,200",
      period: "per month",
      description: "Best for performance teams scaling paid and organic.",
      features: [
        "24 assets per month",
        "Editor + designer pod",
        "Paid social variants",
        "Weekly testing plan",
        "Priority revisions",
        "Monthly strategy call",
      ],
      popular: true,
    },
    {
      name: "Scale",
      price: "Custom",
      period: "based on volume",
      description: "For brands needing high-volume production and strategy.",
      features: [
        "Unlimited requests",
        "Dedicated creative lead",
        "Multi-channel publishing",
        "Quarterly roadmap",
        "Enterprise reporting",
        "24/7 support",
      ],
      popular: false,
    },
  ];

  const addons = [
    { name: "Additional creator edit", price: "$400" },
    { name: "On-site production day", price: "$2,200" },
    { name: "AI scaling pack", price: "$800 / month" },
    { name: "Rush turnaround", price: "$250 / hour" },
  ];

  return (
    <div className="min-h-screen">
      <div className="bg-site-primary pt-28 sm:pt-32 pb-14 sm:pb-16 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-site-btnPrimary/70">
            Pricing
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold mt-4">
            Flexible plans for every stage of growth.
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-4">
            Choose a plan based on output volume and scale as your content
            needs grow.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white/90 p-8 rounded-3xl shadow-sm border border-white/70 ${
                plan.popular ? "ring-2 ring-site-btnPrimary" : ""
              }`}
            >
              {plan.popular && (
                <div className="bg-site-btnPrimary text-site-primary px-3 py-1 rounded-full text-xs font-semibold inline-block mb-4">
                  Most popular
                </div>
              )}
              <h3 className="text-2xl font-semibold mb-2 text-site-primary">
                {plan.name}
              </h3>
              <div className="text-4xl font-bold text-site-primary">
                {plan.price}
              </div>
              <div className="text-slate-600 mb-5">{plan.period}</div>
              <p className="text-slate-600 mb-6">{plan.description}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm">
                    <Check size={16} className="text-emerald-600 mr-3" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/enterprise"
                className={`block w-full py-3 rounded-full text-center font-semibold transition-colors ${
                  plan.popular
                    ? "bg-site-btnPrimary text-site-primary hover:bg-[#c9f76f]"
                    : "bg-site-primary text-white hover:bg-site-primary/90"
                }`}
              >
                Start with {plan.name}
              </Link>
            </div>
          ))}
        </div>

        <div className="bg-white/90 p-6 sm:p-8 rounded-3xl shadow-sm border border-white/70">
          <h2 className="font-display text-3xl font-semibold mb-8 text-center text-site-primary">
            Add-on services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {addons.map((addon) => (
              <div
                key={addon.name}
                className="flex justify-between items-center p-4 border border-site-primary/10 rounded-2xl"
              >
                <span className="font-semibold text-site-primary">
                  {addon.name}
                </span>
                <span className="text-site-primary font-bold">
                  {addon.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 sm:mt-16 bg-site-primary text-white p-8 sm:p-12 rounded-3xl text-center">
          <h2 className="font-display text-3xl font-semibold mb-4">
            Need a custom plan?
          </h2>
          <p className="text-lg mb-8 text-gray-300">
            Tell us your content volume and channel mix. We'll craft a
            scalable plan within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/enterprise"
              className="bg-site-btnPrimary text-site-primary px-8 py-3 rounded-full font-semibold hover:bg-[#c9f76f] transition-colors"
            >
              Contact sales
            </Link>
            <Link
              href="/services"
              className="border border-white/40 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              Explore services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
