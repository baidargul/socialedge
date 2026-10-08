import Link from "next/link";

export default function PageHero({ eyebrow, title, description, action = true }: { eyebrow: string; title: string; description: string; action?: boolean }) {
  return <section className="relative overflow-hidden bg-site-primary px-4 pb-16 pt-32 text-white sm:pt-36">
    <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-site-textHeadingLight/10 blur-3xl" />
    <div className="relative mx-auto max-w-5xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[.32em] text-site-btnPrimary">{eyebrow}</p>
      <h1 className="mx-auto mt-5 max-w-4xl font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">{title}</h1>
      <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/70">{description}</p>
      {action && <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Link className="rounded-full bg-site-btnPrimary px-6 py-3 font-semibold text-site-primary" href="/pricing#booking">Start a project</Link><Link className="rounded-full border border-white/30 px-6 py-3 font-semibold" href="/our-work">View our work</Link></div>}
    </div>
  </section>;
}
