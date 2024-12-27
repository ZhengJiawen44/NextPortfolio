import { registerZodSchema } from "@/schemas";
import { NextResponse, NextRequest } from "next/server";
import { hash } from "@/lib/hash";
import { signToken } from "@/lib/token";
import { prisma } from "@/lib/prisma";
import { sendVerificationEmail } from "@/lib/sendVerificationEmail";

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

    //create a token with the email
    const emailToken = await signToken({ name: name, email: email }, "1h");

    //send email with the token embedded in the URL
    sendVerificationEmail(body.email, emailToken);

    return NextResponse.json({ success: "email sent" });
  } catch (error) {
    console.error(error.message);
    return NextResponse.json({ error: "malformed syntax" });
  }
}
