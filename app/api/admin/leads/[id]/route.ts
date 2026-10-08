import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { requireSession } from "@/lib/auth";
import { Lead } from "@/models/Lead";
import { clean, isLeadStatus } from "@/lib/validation";
import mongoose from "mongoose";

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    await requireSession();
    const { id } = await params;
    if (!mongoose.isValidObjectId(id)) return NextResponse.json({ error: "Invalid lead." }, { status: 400 });
    const body = await request.json();
    const update: Record<string, unknown> = {};
    await connectDB();
    const current = await Lead.findById(id);
    if (!current) return NextResponse.json({ error: "Lead not found." }, { status: 404 });
    const activity: Array<{ action: string; detail: string; at: Date }> = [];
    if (typeof body.status === "string" && isLeadStatus(body.status)) {
      update.status = body.status;
      update.archivedAt = body.status === "archived" ? new Date() : null;
      if (body.status !== current.status) activity.push({ action: "status", detail: `Status changed from ${current.status} to ${body.status}.`, at: new Date() });
    }
    if (typeof body.notes === "string") {
      update.notes = clean(body.notes, 5000);
      if (update.notes !== current.notes) activity.push({ action: "notes", detail: "Internal notes updated.", at: new Date() });
    }
    if (typeof body.assignedTo === "string") {
      update.assignedTo = clean(body.assignedTo, 100) || "Primary admin";
      if (update.assignedTo !== current.assignedTo) activity.push({ action: "assignment", detail: `Assigned to ${update.assignedTo}.`, at: new Date() });
    }
    if (typeof body.followUpAt === "string") {
      update.followUpAt = body.followUpAt ? new Date(body.followUpAt) : null;
      const oldDate = current.followUpAt?.toISOString().slice(0, 10) ?? "";
      if (body.followUpAt !== oldDate) activity.push({ action: "follow-up", detail: body.followUpAt ? `Follow-up scheduled for ${body.followUpAt}.` : "Follow-up date cleared.", at: new Date() });
    }
    const operations: Record<string, unknown> = { $set: update };
    if (activity.length) operations.$push = { activity: { $each: activity } };
    const lead = await Lead.findByIdAndUpdate(id, operations, { new: true, runValidators: true }).lean();
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error && error.message === "UNAUTHORIZED" ? "Unauthorized" : "Update failed." }, { status: error instanceof Error && error.message === "UNAUTHORIZED" ? 401 : 500 });
  }
}

