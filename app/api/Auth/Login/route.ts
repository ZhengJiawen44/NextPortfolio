import { NextResponse, NextRequest } from "next/server";
import { loginZodSchema } from "@/schemas";
import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";
import { signToken } from "@/lib/token";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const validation = loginZodSchema.safeParse(body);
  if (validation.success !== true) {
    return NextResponse.json({ error: "invalid fields!" });
  }

  //compare password from database and frontend
  try {
    const user = await prisma.user.findUnique({ where: { email: body.email } });
    if (!user) {
      return NextResponse.json({ error: "user not found" }, { status: 404 });
    }
    const { id, password, emailVerified } = user;

    const passwordValid = await bcrypt.compare(body.password, password);
    if (!passwordValid || !emailVerified) {
      return NextResponse.json(
        { error: "invalid credentials" },
        { status: 403 }
      );
    }

    //clear previous Auth token from cookie
    const cookieStore = await cookies();
    cookieStore.set("token", "", { maxAge: 0, path: "/" });

    //create new jwt with id as payload
    const token = await signToken({ id: id }, "1h");

    //place new jwt into cookie
    cookieStore.set("token", token, {
      httpOnly: true,
      maxAge: 60 * 60,
      secure: process.env.NODE_ENV == "production",
      path: "/",
    });

    return NextResponse.json({ success: "logged in" });
  } catch (error) {
    return NextResponse.json(
      { success: "Internal server error" },
      { status: 500 }
    );
  }
}
