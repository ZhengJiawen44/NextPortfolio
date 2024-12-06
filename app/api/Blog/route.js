import blogModel from "@/app/(models)/BlogModel";
import { NextResponse, NextRequest } from "next/server";
import { validate } from "@/app/utils/blogValidation";

export async function POST(NextRequest) {
  try {
    const body = await NextRequest.json();

    const parsedData = validate(body);
    if (parsedData === true) {
      const blog = await blogModel.create(body);
      if (blog) {
        return NextResponse.json(
          { message: "created successfully" },
          { status: 200 }
        );
      }
      throw new Error("error: no entry returned from database");
    } else {
      return NextResponse.json(
        { message: "bad input; please check your input values" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
