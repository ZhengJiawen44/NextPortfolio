import { Blog } from "@/app/(models)/BlogModel";
import { NextResponse } from "next/server";
import { validate } from "@/app/utils/blogValidation";

export async function GET(req, { params }) {
  const { id } = await params;
  const blog = await Blog.findById(id);

  console.log(blog);

  return NextResponse.json({ blog }, { status: 200 });
}

export async function DELETE(req, { params }) {
  const { id } = await params;
  const blog = await Blog.findByIdAndDelete(id);
  if (blog) {
    return NextResponse.json({ message: "deleted" }, { status: 200 });
  } else {
    return NextResponse.json(
      { message: "could not be deleted" },
      { status: 500 }
    );
  }
}
