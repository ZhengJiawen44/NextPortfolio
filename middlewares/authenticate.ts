import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/token";

export async function authenticate(req: NextRequest, res: NextResponse) {
  //get token from cookie
  const cookie = await cookies();
  const token = cookie.get("token")?.value;

  if (!token) {
    return NextResponse.json(
      { error: "please authenticate yourself" },
      { status: 401 }
    );
  }

  //verify token signature
  const { errorMessage, decodedPayload } = await verifyToken(token);

  if (errorMessage) {
    return NextResponse.redirect(new URL("/Auth/Login", req.url));
  }

  return res;
}
export default authenticate;
