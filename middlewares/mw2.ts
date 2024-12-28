import { NextRequest, NextResponse } from "next/server";

export async function mw2(
  req: NextRequest,
  res: NextResponse
): Promise<NextResponse> {
  console.log("mw2");
  return res;
}
