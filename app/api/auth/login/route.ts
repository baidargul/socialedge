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
    await connectDB();
    const admin = await Admin.findOne({ email });
    if (!admin || !(await bcrypt.compare(password, admin.passwordHash)))
      return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
    await createSession(String(admin._id), admin.email);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Login failed." }, { status: 500 });
  }
}

