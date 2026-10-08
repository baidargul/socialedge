"use client";
import { FormEvent, useState } from "react";
import { serviceNames } from "@/lib/content";

const input = "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/15";

export default function BookingForm() {
  const [step, setStep] = useState(1);
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setState("loading"); setMessage("");
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form));
    const response = await fetch("/api/leads", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...values, consent: values.consent === "on" }) });
    const result = await response.json().catch(() => ({}));
    if (response.ok) { setState("success"); setMessage("Thanks — your project request is now with our team."); form.reset(); setStep(1); }
    else { setState("error"); setMessage(result.error ?? "Something went wrong. Please try again."); }
  }
  return (
    <form onSubmit={submit} className="grid gap-5" aria-busy={state === "loading"}>
      <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="mb-2 grid grid-cols-2 gap-3" aria-label={`Step ${step} of 2`}>
        {[1, 2].map((number) => <div key={number} className={`h-1.5 rounded-full ${number <= step ? "bg-emerald-700" : "bg-slate-200"}`} />)}
      </div>
      <div className={step === 1 ? "grid gap-5" : "hidden"}>
        <div><p className="text-xs font-bold uppercase tracking-[.25em] text-emerald-700">Step 1 of 2</p><h3 className="mt-2 text-2xl font-semibold text-site-primary">Project requirements</h3></div>
        <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Service"><select className={input} name="service" required defaultValue=""><option value="" disabled>Select a service</option>{serviceNames.map((name) => <option key={name}>{name}</option>)}</select></Field>
        <Field label="Estimated budget"><select className={input} name="budget" required defaultValue=""><option value="" disabled>Select a range</option><option>Under $1,000</option><option>$1,000 – $3,000</option><option>$3,000 – $7,500</option><option>$7,500+</option><option>Not sure yet</option></select></Field>
        </div>
        <Field label="Tell us about your project"><textarea className={`${input} min-h-36 resize-y`} name="projectDetails" minLength={20} maxLength={3000} required /></Field>
        <button type="button" onClick={(event) => {
          const form = event.currentTarget.form;
          if (!form) return;
          const fields = ["service", "budget", "projectDetails"].map((name) => form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement);
          const invalid = fields.find((field) => !field.checkValidity());
          if (invalid) return invalid.reportValidity();
          setStep(2);
        }} className="rounded-full bg-site-primary px-7 py-3.5 font-semibold text-white transition hover:bg-emerald-950">Continue to contact details</button>
      </div>
      <div className={step === 2 ? "grid gap-5" : "hidden"}>
        <div><p className="text-xs font-bold uppercase tracking-[.25em] text-emerald-700">Step 2 of 2</p><h3 className="mt-2 text-2xl font-semibold text-site-primary">How should we reach you?</h3></div>
        <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name"><input className={input} name="name" required autoComplete="name" /></Field>
        <Field label="Email"><input className={input} name="email" type="email" required autoComplete="email" /></Field>
        <Field label="Phone"><input className={input} name="phone" type="tel" required autoComplete="tel" /></Field>
        <Field label="Company"><input className={input} name="company" required autoComplete="organization" /></Field>
        <Field label="Preferred contact"><select className={input} name="preferredContact" required defaultValue="Email"><option>Email</option><option>Phone</option><option>WhatsApp</option></select></Field>
        <Field label="Best time to reach you"><input className={input} name="preferredTime" required placeholder="e.g. Weekdays after 2 PM" /></Field>
        </div>
        <label className="flex items-start gap-3 text-sm text-slate-600"><input type="checkbox" name="consent" required className="mt-1 h-4 w-4 accent-emerald-900" /><span>I agree that SocialEdge Creative may contact me about this project.</span></label>
        <div className="flex flex-col-reverse gap-3 sm:flex-row"><button type="button" onClick={() => setStep(1)} className="rounded-full border border-site-primary/20 px-7 py-3.5 font-semibold text-site-primary">Back</button><button disabled={state === "loading"} className="flex-1 rounded-full bg-site-primary px-7 py-3.5 font-semibold text-white transition hover:bg-emerald-950 disabled:opacity-60">{state === "loading" ? "Sending…" : "Submit project request"}</button></div>
      </div>
      {message && <p role="status" className={state === "success" ? "text-emerald-700" : "text-red-700"}>{message}</p>}
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="grid gap-2 text-sm font-semibold text-site-primary"><span>{label}</span>{children}</label>;
}

