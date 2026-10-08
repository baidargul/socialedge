import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Admin } from "@/models/Admin";
import { createSession } from "@/lib/auth";
import { clean } from "@/lib/validation";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = clean(body.email, 160).toLowerCase();
    const password = typeof body.password === "string" ? body.password : "";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || password.length < 10)
      return NextResponse.json({ error: "Use a valid email and a password of at least 10 characters." }, { status: 400 });
    await connectDB();
    const admin = await Admin.create({ email, passwordHash: await bcrypt.hash(password, 12), singletonKey: "primary" });
    await createSession(String(admin._id), admin.email);
    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error: unknown) {
    const code = typeof error === "object" && error && "code" in error ? (error as { code?: number }).code : undefined;
    return NextResponse.json({ error: code === 11000 ? "An admin account already exists." : "Setup failed." }, { status: code === 11000 ? 409 : 500 });
  }
}

