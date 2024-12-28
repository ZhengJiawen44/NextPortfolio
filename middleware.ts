import { NextRequest, NextResponse } from "next/server";
import { chainMiddleware } from "./lib/chainMiddleware";
import authenticate from "./middlewares/authenticate";

export async function middleware(req: NextRequest, res: NextResponse) {
  if (req.method === "POST") {
    const response = chainMiddleware(req, res, authenticate);
    return response;
  } else {
    NextResponse.next();
  }
}

export const config = {
  matcher: "/api/Blog",
};
