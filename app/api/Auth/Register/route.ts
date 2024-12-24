import { registerZodSchema } from "@/schemas";
import { NextResponse, NextRequest } from "next/server";
import { hash } from "@/lib/hash";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const validation = registerZodSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json({ error: "malformed syntax" });
  }

  const emailTaken =
    (await prisma.user.findUnique({
      where: { email: body.email },
    })) !== null;
  if (emailTaken) {
    return NextResponse.json({ error: "this email is already taken" });
  }

  //code block to send email verification
  try {
    body.password = await hash(body.password);

    const { name, email, password } = body;
    const user = await prisma.user.create({
      data: { name, email, password },
    });
    if (!user) {
      return NextResponse.json({
        error: "user could not be created at this time",
      });
    }
    return NextResponse.json({ success: "email sent" });
  } catch (error) {
    console.error(error.message);
    return NextResponse.json({ error: "malformed syntax" });
  }
}
