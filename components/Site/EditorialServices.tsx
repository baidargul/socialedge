import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/content";

export default function EditorialServices() {
  return (
    <section className="services-editorial overflow-hidden bg-[#d8ff85] text-site-primary">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:py-24">
        <div className="grid gap-8 border-b border-site-primary/25 pb-10 lg:grid-cols-[1fr_22rem] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.34em]">What we create</p>
            <h2 className="mt-3 font-display text-[clamp(4.5rem,13vw,9.5rem)] font-semibold leading-[.78] tracking-[-.065em]">
              Services<span className="text-emerald-800">.</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-site-primary/70 lg:pb-1">
            Strategy, production and digital craft working as one connected system—so every idea can travel further.
          </p>
        </div>

        <div>
          {services.map((service, index) => (
            <Link
              href={`/services/${service.slug}`}
              key={service.slug}
              className="service-editorial-row group relative grid gap-4 border-b border-site-primary/25 py-7 sm:grid-cols-[4rem_minmax(0,1fr)_minmax(15rem,.7fr)_3rem] sm:items-center sm:gap-6 sm:py-9"
            >
              <span className="relative z-10 self-start font-mono text-xs font-bold tracking-[.2em] opacity-60 sm:pt-2">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="relative z-10 max-w-2xl font-display text-3xl font-semibold leading-none tracking-tight transition-transform duration-500 group-hover:translate-x-2 sm:text-4xl lg:text-5xl">
                {service.title}
              </h3>
              <p className="relative z-10 max-w-md text-sm leading-6 text-site-primary/65 transition-colors duration-300 group-hover:text-white/65">
                {service.description}
              </p>
              <span className="relative z-10 hidden h-11 w-11 place-items-center rounded-full border border-site-primary/30 transition-all duration-300 group-hover:rotate-45 group-hover:border-white/40 group-hover:bg-white group-hover:text-site-primary sm:grid">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-end">
          <Link href="/services" className="group inline-flex items-center gap-3 rounded-full bg-site-primary px-6 py-3.5 font-semibold text-white">
            Explore all services
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
