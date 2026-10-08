import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { requireSession } from "@/lib/auth";
import { Lead } from "@/models/Lead";
import { isLeadStatus } from "@/lib/validation";

const csv = (value: unknown) => `"${String(value ?? "").replace(/"/g, '""').replace(/^[=+\-@]/, "'$&")}"`;

export async function GET(request: NextRequest) {
  try {
    await requireSession(); await connectDB();
    const p = request.nextUrl.searchParams;
    const query: Record<string, unknown> = {};
    const status = p.get("status") ?? ""; const service = p.get("service") ?? ""; const search = (p.get("search") ?? "").slice(0, 100);
    if (status && isLeadStatus(status)) query.status = status;
    if (service) query.service = service;
    if (search) query.$or = ["name", "email", "company"].map((key) => ({ [key]: { $regex: search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), $options: "i" } }));
    const leads = await Lead.find(query).sort({ createdAt: -1 }).limit(5000).lean();
    const rows = [["Date", "Name", "Email", "Phone", "Company", "Service", "Budget", "Status", "Follow-up", "Source", "Possible duplicate", "Preferred contact", "Preferred time", "Project details", "Notes"],
      ...leads.map((l) => [l.createdAt, l.name, l.email, l.phone, l.company, l.service, l.budget, l.status, l.followUpAt, l.source, l.duplicateOf ? "Yes" : "No", l.preferredContact, l.preferredTime, l.projectDetails, l.notes])];
    return new NextResponse(rows.map((row) => row.map(csv).join(",")).join("\r\n"), { headers: { "Content-Type": "text/csv; charset=utf-8", "Content-Disposition": "attachment; filename=socialedge-leads.csv" } });
  } catch { return NextResponse.json({ error: "Unauthorized" }, { status: 401 }); }
}
