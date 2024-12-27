import { NextRequest, NextResponse } from "next/server";
import * as jose from "jose";
export async function getUser(req: NextRequest) {
  //get token
  const token = req.cookies.get("token");
  //verify token
  const secret = new TextEncoder().encode(process.env.AUTH_SECRET);
  jose.jwtVerify(String(token), secret);
  //query database

  //return user object
}
