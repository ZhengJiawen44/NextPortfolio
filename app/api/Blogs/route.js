import blogModel from "@/app/(models)/BlogModel";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const ticketData = body.formData;

    await blogModel.create(ticketData);
    return NextResponse.json(
      { message: "created successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json({ message: error }, { status: 500 });
  }
}
