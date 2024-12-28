import { NextRequest, NextResponse } from "next/server";
import { chainMiddleware } from "./lib/chainMiddleware";
import authenticate from "./middlewares/authenticate";

export async function middleware(req: NextRequest, res: NextResponse) {
  const { method, nextUrl } = req;

  if (nextUrl.pathname === "/api/Blog" && method === "POST") {
    const response = chainMiddleware(req, res, authenticate);
    return response;
  }

  if (
    ["DELETE", "PATCH"].includes(method) &&
    nextUrl.pathname.match(/^\/api\/Blog\/[^/]+$/)
  ) {
    console.log("hit");

    const response = chainMiddleware(req, res, authenticate);
    return response;
  }

  NextResponse.next();
}

export const config = {
  matcher: "/api/Blog/:path*",
};
