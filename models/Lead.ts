import { Schema, model, models } from "mongoose";
import { leadStatuses, serviceNames } from "@/lib/content";

const LeadSchema = new Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 100 },
    email: { type: String, required: true, lowercase: true, trim: true, maxlength: 160 },
    phone: { type: String, required: true, trim: true, maxlength: 40 },
    company: { type: String, required: true, trim: true, maxlength: 120 },
    service: { type: String, required: true, enum: serviceNames },
    budget: { type: String, required: true, trim: true, maxlength: 80 },
    projectDetails: { type: String, required: true, trim: true, maxlength: 3000 },
    preferredContact: { type: String, required: true, enum: ["Email", "Phone", "WhatsApp"] },
    preferredTime: { type: String, required: true, trim: true, maxlength: 120 },
    consent: { type: Boolean, required: true },
    status: { type: String, enum: leadStatuses, default: "new", index: true },
    notes: { type: String, default: "", maxlength: 5000 },
    assignedTo: { type: String, default: "Primary admin" },
    followUpAt: { type: Date, default: null, index: true },
    source: { type: String, default: "Website form" },
    duplicateOf: { type: Schema.Types.ObjectId, ref: "Lead", default: null },
    activity: [{
      action: { type: String, required: true },
      detail: { type: String, default: "" },
      at: { type: Date, default: Date.now },
    }],
    archivedAt: { type: Date, default: null },
    ipHash: { type: String, select: false },
  },
  { timestamps: true },
);

LeadSchema.index({ createdAt: -1 });
LeadSchema.index({ name: "text", email: "text", company: "text", projectDetails: "text" });

export const Lead = models.Lead || model("Lead", LeadSchema);

