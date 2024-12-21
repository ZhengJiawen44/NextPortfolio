import { NextResponse, NextRequest } from "next/server";
import { loginZodSchema } from "@/schemas";
export async function POST(req: NextRequest) {
  const body = await req.json();
  const validation = loginZodSchema.safeParse(body);

  if (validation.success === true) {
    return NextResponse.json({ success: "email sent" });
  }

  return NextResponse.json({ error: "invalid fields!" });
}
