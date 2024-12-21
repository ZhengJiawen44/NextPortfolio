import { registerZodSchema } from "@/schemas";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const isValid = registerZodSchema.safeParse(body);
  if (isValid.success === true) {
    return NextResponse.json({ success: "email sent" });
  }
  return NextResponse.json({ error: "malformed syntax" });
}
