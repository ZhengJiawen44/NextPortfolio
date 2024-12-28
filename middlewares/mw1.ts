import { NextRequest, NextResponse } from "next/server";

export async function mw1(
  req: NextRequest,
  res: NextResponse
): Promise<NextResponse> {
  console.log("mw1");
  return res;
}
