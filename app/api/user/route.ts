import { NextRequest, NextResponse } from "next/server";
export async function getUser(req: NextRequest) {
  const token = req.cookies.get("token");
  //get token
  //verify token
  //query database
  //return user object
}
