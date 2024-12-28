import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/token";

export async function authenticate(req: NextRequest) {
  if (req.method === "POST") {
    //get token from cookie
    const cookie = await cookies();
    const token = cookie.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        { error: "please authnenticate yoursefl" },
        { status: 401 }
      );
    }

    //verify token signature
    const { errorMessage } = await verifyToken(token);
    if (errorMessage) {
      return NextResponse.json(
        { error: "user login expired" },
        { status: 401 }
      );
    }

    NextResponse.next();
  }
}
export default authenticate;
