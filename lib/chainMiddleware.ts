import { NextRequest, NextResponse } from "next/server";

/**
 *
 * @param NextRequest the request object
 * @param NextRequest the response object
 * @param ...middleware an Array of middleware function
 * @returns {Promise<NextResponse>} The final NextResponse after all middleware are executed.
 * @example
 * const response = await chainMiddleware(req, AuthMiddleware, validationMiddleware);
 */

export async function chainMiddleware(
  req: NextRequest,
  res: NextResponse,
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
