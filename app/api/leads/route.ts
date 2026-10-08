import { createHash } from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Lead } from "@/models/Lead";
import { validateLead } from "@/lib/validation";

export async function POST(request: NextRequest) {
  try {
    if (!request.headers.get("content-type")?.includes("application/json"))
      return NextResponse.json({ error: "Invalid request." }, { status: 415 });
    const body = await request.json();
    if (body.website) return NextResponse.json({ success: true }, { status: 201 });
    const result = validateLead(body);
    if (result.error) return NextResponse.json({ error: result.error }, { status: 400 });
    if (!result.data) return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
    await connectDB();
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";
    const ipHash = createHash("sha256").update(`${ip}:${process.env.AUTH_SECRET ?? ""}`).digest("hex");
    const recent = await Lead.countDocuments({ ipHash, createdAt: { $gte: new Date(Date.now() - 10 * 60 * 1000) } });
    if (recent >= 3) return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
    const duplicate = await Lead.findOne({
      $or: [{ email: result.data.email }, { phone: result.data.phone }],
      createdAt: { $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) },
    }).select("_id").lean() as { _id: unknown } | null;
    await Lead.create({
      ...result.data,
      ipHash,
      duplicateOf: duplicate?._id ?? null,
      activity: [{ action: "created", detail: duplicate ? "Website inquiry received and marked as a possible duplicate." : "Website inquiry received." }],
    });
    return NextResponse.json({ success: true }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "We could not submit your request. Please try again." }, { status: 500 });
  }
}

