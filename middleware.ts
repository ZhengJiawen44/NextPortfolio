import { NextRequest, NextResponse } from "next/server";
import * as jose from "jose";

export async function middleware(req: NextRequest) {
  //get cookie from incoming request, see if token is present.
  const userToken = req.cookies.get("token")?.value;
  const secret = new TextEncoder().encode(process.env.AUTH_SECRET);

  try {
    //verify and get the token payload
    const { payload } = await jose.jwtVerify(String(userToken), secret);

    const header = new Headers(req.headers);
    header.set("x-user-name", String(payload.name));
    header.set("x-user-email", String(payload.email));
    return NextResponse.next();
  } catch (error) {
    console.error(error);
  }
  return NextResponse.next();
}
export const config = {
  matcher: "/Blog",
};
