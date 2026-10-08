import { leadStatuses, serviceNames } from "./content";

export function clean(value: unknown, max = 500) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export function validateLead(body: Record<string, unknown>) {
  const data = {
    name: clean(body.name, 100), email: clean(body.email, 160).toLowerCase(),
    phone: clean(body.phone, 40), company: clean(body.company, 120),
    service: clean(body.service, 100), budget: clean(body.budget, 80),
    projectDetails: clean(body.projectDetails, 3000), preferredContact: clean(body.preferredContact, 20),
    preferredTime: clean(body.preferredTime, 120), consent: body.consent === true,
  };
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
  if (!data.name || !validEmail || !data.phone || !data.company || !serviceNames.includes(data.service as never) ||
      !data.budget || data.projectDetails.length < 20 || !["Email", "Phone", "WhatsApp"].includes(data.preferredContact) ||
      !data.preferredTime || !data.consent) return { error: "Please complete every required field with valid information." };
  return { data };
}

export function isLeadStatus(value: string) {
  return leadStatuses.includes(value as (typeof leadStatuses)[number]);
}
