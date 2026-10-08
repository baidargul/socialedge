import { Schema, model, models } from "mongoose";

const AdminSchema = new Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    passwordHash: { type: String, required: true },
    singletonKey: { type: String, required: true, unique: true, default: "primary" },
  },
  { timestamps: true },
);

export const Admin = models.Admin || model("Admin", AdminSchema);

