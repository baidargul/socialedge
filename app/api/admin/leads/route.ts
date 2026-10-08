import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { requireSession } from "@/lib/auth";
import { Lead } from "@/models/Lead";
import { isLeadStatus } from "@/lib/validation";

export async function GET(request: NextRequest) {
  try {
    await requireSession();
    await connectDB();
    const params = request.nextUrl.searchParams;
    const page = Math.max(1, Number(params.get("page")) || 1);
    const limit = Math.min(100, Math.max(1, Number(params.get("limit")) || 20));
    const query: Record<string, unknown> = {};
    const status = params.get("status") ?? "";
    const service = params.get("service") ?? "";
    const search = (params.get("search") ?? "").trim().slice(0, 100);
    if (status && isLeadStatus(status)) query.status = status;
    if (service) query.service = service;
    if (search) query.$or = ["name", "email", "company", "projectDetails"].map((key) => ({ [key]: { $regex: search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), $options: "i" } }));
    const from = params.get("from");
    const to = params.get("to");
    if (from || to) query.createdAt = { ...(from ? { $gte: new Date(from) } : {}), ...(to ? { $lte: new Date(`${to}T23:59:59.999Z`) } : {}) };
    const sort = params.get("sort") === "oldest" ? 1 : -1;
    const [items, total, statusTotals, overdue] = await Promise.all([
      Lead.find(query).sort({ createdAt: sort }).skip((page - 1) * limit).limit(limit).lean(),
      Lead.countDocuments(query),
      Lead.aggregate<{ _id: string; count: number }>([{ $group: { _id: "$status", count: { $sum: 1 } } }]),
      Lead.countDocuments({ followUpAt: { $lt: new Date() }, status: { $nin: ["won", "lost", "archived"] } }),
    ]);
    const counts = Object.fromEntries(statusTotals.map((item) => [item._id, item.count]));
    return NextResponse.json({ items: items.map(serialize), total, counts, overdue, page, pages: Math.max(1, Math.ceil(total / limit)) });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error && error.message === "UNAUTHORIZED" ? "Unauthorized" : "Unable to load leads." }, { status: error instanceof Error && error.message === "UNAUTHORIZED" ? 401 : 500 });
  }
}

function serialize(item: Record<string, unknown>) {
  return { ...item, _id: String(item._id), createdAt: item.createdAt instanceof Date ? item.createdAt.toISOString() : item.createdAt, updatedAt: item.updatedAt instanceof Date ? item.updatedAt.toISOString() : item.updatedAt };
}

