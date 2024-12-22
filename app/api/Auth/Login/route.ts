import { NextResponse, NextRequest } from "next/server";
import { loginZodSchema } from "@/schemas";
import bcrypt from "bcrypt";
import { userModel } from "@/app/(models)/UserModel";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const validation = loginZodSchema.safeParse(body);
  if (validation.success !== true) {
    return NextResponse.json({ error: "invalid fields!" });
  }

  //compare password from database and frontend
  try {
    const user = await userModel.findOne({ email: body.email });
    if (!user) {
      return NextResponse.json({ error: "user not found" });
    }
    const { password } = user;
    const passwordValid = await bcrypt.compare(body.password, password);
    if (!passwordValid) {
      return NextResponse.json({ error: "invalid credentials" });
    }
    return NextResponse.json({ success: "email sent" });
  } catch (error) {}
}
