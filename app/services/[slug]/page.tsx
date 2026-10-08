import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { notFound } from "next/navigation";
import PageHero from "@/components/Site/PageHero";
import { services } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  return service ? { title: service.title, description: service.description } : {};
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  return <>
    <PageHero eyebrow="Service" title={service.title} description={service.description} />
    <section className="mx-auto max-w-6xl px-4 py-20">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <div><p className="eyebrow">What it means</p><h2 className="section-title">Creative execution with a clear purpose.</h2><p className="mt-6 text-lg leading-8 text-slate-600">{service.intro}</p><div className="mt-8 flex flex-wrap gap-3">{service.details.map((item) => <span key={item} className="rounded-full border border-emerald-950/10 bg-white px-4 py-2 text-sm font-medium">{item}</span>)}</div></div>
        <div className="rounded-3xl bg-site-primary p-8 text-white"><p className="text-xs font-bold uppercase tracking-[.25em] text-site-btnPrimary">A good fit for</p><ul className="mt-6 grid gap-4">{service.idealFor.map((item) => <li key={item} className="flex gap-3"><Check className="mt-0.5 h-5 w-5 shrink-0 text-site-btnPrimary" /><span className="text-white/80">{item}</span></li>)}</ul></div>
      </div>
      <div className="mt-20 grid gap-6 lg:grid-cols-3"><InfoList title="What to bring" items={service.inputs}/><InfoList title="What we prepare" items={service.deliverables}/><InfoList title="Formats" items={service.formats}/></div>
      <div className="mt-20"><p className="eyebrow">How we approach it</p><h2 className="section-title">A focused four-step process.</h2><div className="mt-9 grid gap-4 md:grid-cols-4">{service.process.map((item, index) => <div key={item} className="rounded-2xl border border-emerald-950/10 bg-white p-6"><span className="text-sm font-bold text-emerald-700">0{index + 1}</span><p className="mt-4 font-semibold leading-6">{item}</p></div>)}</div></div>
      <div className="mt-20 grid gap-10 lg:grid-cols-[.7fr_1.3fr]"><div><p className="eyebrow">Common questions</p><h2 className="section-title">Useful context before we begin.</h2></div><div className="grid gap-3">{service.faq.map((item) => <details key={item.question} className="group rounded-2xl border border-emerald-950/10 bg-white p-5"><summary className="cursor-pointer list-none font-semibold">{item.question}<span className="float-right text-emerald-700 group-open:rotate-45">+</span></summary><p className="mt-4 leading-7 text-slate-600">{item.answer}</p></details>)}</div></div>
      <div className="mt-20 flex flex-col items-start justify-between gap-6 rounded-[2rem] bg-white p-8 shadow-soft sm:p-10 md:flex-row md:items-center"><div><p className="eyebrow">Have a project in mind?</p><h2 className="mt-3 font-display text-3xl font-semibold">Tell us what you want to create.</h2></div><Link href={`/pricing#booking`} className="inline-flex items-center gap-2 rounded-full bg-site-primary px-6 py-3 font-semibold text-white">Start a project <ArrowRight className="h-4 w-4" /></Link></div>
    </section>
  </>;
}

function InfoList({ title, items }: { title: string; items: readonly string[] }) {
  return <div className="rounded-3xl border border-emerald-950/10 bg-white p-7"><h2 className="font-display text-2xl font-semibold">{title}</h2><ul className="mt-5 grid gap-3">{items.map((item) => <li key={item} className="flex gap-3 text-sm text-slate-600"><Check className="h-4 w-4 shrink-0 text-emerald-700" />{item}</li>)}</ul></div>;
}
