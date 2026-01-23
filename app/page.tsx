import FirstBanner from "@/components/Site/Advertising/Homepage/FirstBanner";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const services = [
    {
      title: "Performance video ads",
      description:
        "Cut-through ads optimized for paid social, with hooks, cutdowns, and weekly refreshes.",
    },
    {
      title: "Social content engine",
      description:
        "Always-on short form, reels, and stories that keep your brand consistent across platforms.",
    },
    {
      title: "Launch campaigns",
      description:
        "High-impact launch kits: hero video, product photography, and landing assets.",
    },
    {
      title: "Creator editing",
      description:
        "We edit UGC and influencer footage into scroll-stopping narratives that convert.",
    },
    {
      title: "Motion + design",
      description:
        "Design systems, motion packs, and graphics that make every frame feel premium.",
    },
    {
      title: "AI-assisted workflows",
      description:
        "Speed up ideation, tagging, and versioning while keeping your creative direction human.",
    },
  ];

  const caseStudies = [
    {
      title: "Everlane Studio",
      category: "Ecommerce Growth",
      result: "+42% ROAS on paid social",
      image: "/carousels/01.avif",
    },
    {
      title: "Venture Labs",
      category: "SaaS Launch",
      result: "3x demo requests in 6 weeks",
      image: "/carousels/01.avif",
    },
    {
      title: "Rove Wellness",
      category: "Brand Refresh",
      result: "78% higher engagement",
      image: "/carousels/01.avif",
    },
  ];

  const steps = [
    {
      title: "Audit + strategy",
      description:
        "We map your current content, audiences, and goals to define the creative system.",
    },
    {
      title: "Onboard a pod",
      description:
        "Meet your editor, designer, and strategist. We set the cadence and channels.",
    },
    {
      title: "Ship weekly",
      description:
        "We iterate fast with feedback loops, performance reviews, and new variations.",
    },
  ];

  const testimonials = [
    {
      name: "Ariana Vega",
      role: "VP Marketing, Lithic",
      quote:
        "SocialEdge became our in-house studio. Their pacing and creative rigor changed our growth curve.",
      image: "/humans/1.png",
    },
    {
      name: "Julian Park",
      role: "Head of Growth, Sunbeam",
      quote:
        "The editorial talent is unreal. They understand performance metrics and make content feel premium.",
      image: "/humans/6.png",
    },
    {
      name: "Rina Soto",
      role: "Creative Director, Ember",
      quote:
        "We ship faster with fewer revisions. The team gets our brand and elevates it every cycle.",
      image: "/humans/9.png",
    },
  ];

  return (
    <div className="w-full">
      <section className="bg-site-primary text-white relative overflow-hidden">
        <div className="absolute -top-24 -right-32 h-72 w-72 rounded-full bg-site-btnPrimary/20 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl"></div>
        <FirstBanner />
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-site-primary/60">
              Trusted by performance teams
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mt-3">
              Creative output that scales with your pipeline.
            </h2>
          </div>
          <Link
            href="/our-work"
            className="text-site-primary font-semibold hover:text-site-primary/80 transition-colors"
          >
            View case studies &rarr;
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          {[
            "Vela Commerce",
            "Arbor Labs",
            "Orbit Media",
            "Nova Health",
            "Drift Collective",
            "Everlane Studio",
            "Brightwell",
            "Northline",
          ].map((brand) => (
            <div
              key={brand}
              className="rounded-2xl border border-white/50 bg-white/70 px-4 py-3 text-center text-site-primary shadow-sm"
            >
              {brand}
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-16 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-site-primary/60">
              What we deliver
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mt-3">
              A full-stack creative team tuned for revenue.
            </h2>
            <p className="mt-4 text-slate-600">
              Our pods cover creative strategy, editing, design, and production.
              You get a dedicated squad that ships in weekly sprints.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Link
                href="/services"
                className="rounded-full bg-site-primary px-6 py-3 text-white font-semibold hover:bg-site-primary/90 transition-colors"
              >
                Explore services
              </Link>
              <Link
                href="/pricing"
                className="rounded-full border border-site-primary/30 px-6 py-3 text-site-primary font-semibold hover:bg-site-primary/5 transition-colors"
              >
                View pricing
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-white/60 bg-white/80 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-site-primary">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 mt-2">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/70 border-y border-white/70">
        <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-12 items-center">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {caseStudies.map((study) => (
                <div
                  key={study.title}
                  className="rounded-2xl overflow-hidden bg-white shadow-md"
                >
                  <div className="relative h-40">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-site-primary/60">
                      {study.category}
                    </p>
                    <h3 className="text-lg font-semibold text-site-primary mt-2">
                      {study.title}
                    </h3>
                    <p className="text-sm text-slate-600 mt-2">
                      {study.result}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-site-primary/60">
                Proven outcomes
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold mt-3">
                Work that moves the numbers.
              </h2>
              <p className="mt-4 text-slate-600">
                We blend brand storytelling with performance testing, so every
                creative cycle delivers measurable lift.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                {[
                  "Paid social ROAS +38%",
                  "Average CTR +26%",
                  "Cycle time 3.2 days",
                  "35+ formats shipped",
                ].map((stat) => (
                  <div
                    key={stat}
                    className="rounded-2xl border border-site-primary/10 bg-site-primary/5 px-4 py-3 text-site-primary font-semibold"
                  >
                    {stat}
                  </div>
                ))}
              </div>
              <Link
                href="/our-work"
                className="inline-flex items-center mt-6 text-site-primary font-semibold hover:text-site-primary/80 transition-colors"
              >
                See the full portfolio &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-site-primary/60">
              How it works
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mt-3">
              A simple system to keep production flowing.
            </h2>
            <p className="mt-4 text-slate-600">
              From brief to launch, our workflow is designed for speed,
              clarity, and creative excellence.
            </p>
          </div>
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border border-white/60 bg-white/80 p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-site-btnPrimary/70 text-site-primary font-semibold flex items-center justify-center">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-site-primary">
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-600 mt-3">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-16 sm:pb-20">
        <div className="rounded-3xl bg-site-primary text-white p-8 sm:p-10 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-site-btnPrimary/70">
                Client love
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold mt-3">
                The creative partner growth teams rely on.
              </h2>
              <p className="text-gray-300 mt-4">
                We integrate with your team, keep brand standards tight, and
                deliver a constant stream of high-performing creative.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="rounded-2xl bg-white/10 border border-white/10 p-5"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/30">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-xs text-gray-300">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-200 mt-3">
                    "{testimonial.quote}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-20 sm:pb-24">
        <div className="rounded-3xl border border-white/70 bg-white/80 p-8 sm:p-10 md:p-12 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-site-primary">
            Ready to build your content engine?
          </h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Get a dedicated pod, clearer timelines, and creative that performs.
            We can onboard in under two weeks.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="rounded-full bg-site-primary px-6 py-3 text-white font-semibold hover:bg-site-primary/90 transition-colors"
            >
              Start a project
            </Link>
            <Link
              href="/resources"
              className="rounded-full border border-site-primary/30 px-6 py-3 text-site-primary font-semibold hover:bg-site-primary/5 transition-colors"
            >
              Download our deck
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
