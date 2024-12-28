import { NextRequest, NextResponse } from "next/server";
import { chainMiddleware } from "./lib/chainMiddleware";
import { mw1 } from "./middlewares/mw1";
import { mw2 } from "./middlewares/mw2";

export async function middleware(req: NextRequest) {
  const response = await chainMiddleware(req, mw1, mw2);
  return response;
}

export const config = {
  matcher: "/api/Blog",
};
