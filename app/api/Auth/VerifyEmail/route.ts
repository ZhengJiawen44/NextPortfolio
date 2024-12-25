import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/token";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function POST(req: NextRequest) {
  const { payload } = await req.json();

  const { errorMessage, decodedPayload } = verifyToken(payload);

  if (errorMessage) {
    return NextResponse.json({ error: errorMessage });
  }
  try {
    await prisma.user.update({
      where: { email: decodedPayload.email },
      data: { emailVerified: true },
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      return NextResponse.json({ error: error.message });
    } else {
      console.log(error);
      return NextResponse.json({ error: error });
    }
  }

  return NextResponse.json({ message: "email verified" });
}
