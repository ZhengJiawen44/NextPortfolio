import { NextRequest, NextResponse } from "next/server";

export async function chainMiddleware(
  req: NextRequest,
  ...middlewares: ((
    req: NextRequest,
    res: NextResponse
  ) => Promise<NextResponse>)[]
): Promise<NextResponse> {
  let response = NextResponse.next();
  for (const middleware of middlewares) {
    response = await middleware(req, response);
  }
  return response;
}
