import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Admin } from "@/models/Admin";

export async function GET() {
  try {
    await connectDB();
    return NextResponse.json({ needsSetup: (await Admin.countDocuments({})) === 0 });
  } catch {
    return NextResponse.json(
      { error: "Database unavailable. Check the MongoDB URI and Atlas Network Access settings." },
      { status: 503 },
    );
  }
}

