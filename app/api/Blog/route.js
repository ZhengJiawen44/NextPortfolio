import blogModel from "@/app/(models)/BlogModel";
import { NextResponse, NextRequest } from "next/server";

export async function POST(NextRequest) {
  try {
    const body = await NextRequest.json();
    const blog = await blogModel.create(body);
    if (blog) {
      return NextResponse.json(
        { message: "created successfully" },
        { status: 200 }
      );
    }
    throw new Error("error: no entry returned from database");
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
