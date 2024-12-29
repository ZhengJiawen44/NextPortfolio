import { NextRequest, NextResponse } from "next/server";
import { chainMiddleware } from "./lib/chainMiddleware";
import authenticate from "./middlewares/authenticate";
import { verifyToken } from "./lib/token";
import { cookies } from "next/headers";
import { getToken } from "./lib/getToken";

export async function middleware(req: NextRequest, res: NextResponse) {
  const { method, nextUrl } = req;

  //POST Blog api
  if (nextUrl.pathname === "/api/Blog" && method === "POST") {
    const response = await chainMiddleware(req, res, authenticate);
    return response;
  }

  //PATCH DELETE Blog api
  if (
    ["DELETE", "PATCH"].includes(method) &&
    nextUrl.pathname.match(/^\/api\/Blog\/[^/]+$/)
  ) {
    const response = await chainMiddleware(req, res, authenticate);

    return response;
  }

  //GET Blog api
  if (nextUrl.pathname.match(/^\/api\/Blog\/.*/) && method === "GET") {
    // const cookie = await cookies();
    // console.log(cookie); //ResponseCookies {}
    // const cookie2 = req.cookies;
    // console.log(cookie2); //RequestCookies {}
    // const reqHeaders = new Headers(req.headers);
    // reqHeaders.set("x-user-ID", "user123");
    // const response = NextResponse.next({
    //   request: {
    //     headers: reqHeaders,
    //   },
    // });
    // return response;
  }

  //protect update route
  if (
    nextUrl.pathname.match(/^\/Blog\/[^/]+$/) &&
    nextUrl.searchParams.get("action") === "update"
  ) {
    console.log("blog/id?action=update hit");

    // Handle blog route logic here
    const response = await authenticate(req, res);
    if (!response.ok) {
      return NextResponse.redirect(new URL("/Auth/Login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/Blog/:path", "/Blog/:path"],
};
