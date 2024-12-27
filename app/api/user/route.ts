import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/token";
import { prisma } from "@/lib/prisma";

//gets the user information about the current user
export async function GET(req: NextRequest) {
  //get token
  const token = req.cookies.get("token")?.value;
  // return NextResponse.json(token);
  //verify token
  const { errorMessage, decodedPayload } = await verifyToken(String(token));
  //query database

  const user = await prisma.user.findUnique({
    where: { id: decodedPayload.id },
  });
  console.log(user);
  //return user object
  return NextResponse.json({ user });
}
