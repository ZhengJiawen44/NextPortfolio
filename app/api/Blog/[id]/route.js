import { Blog } from "@/app/(models)/BlogModel";
import { NextResponse } from "next/server";
import { validate } from "@/lib/blogValidation";
import * as dayjs from "dayjs";

export async function GET(req, { params }) {
  const { id } = await params;
  const blog = await Blog.findById(id);

  const formattedBlog = blog.toObject();
  formattedBlog.date = dayjs(blog.createdAt).format("DD/MM/YYYY");
  delete formattedBlog.updatedAt;
  delete formattedBlog.createdAt;
  delete formattedBlog.__v;

  return NextResponse.json({ formattedBlog }, { status: 200 });
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

export async function PATCH(req, { params }) {
  const { id } = await params;
  const body = await req.json();
  const isValid = validate(body);

  if (isValid === true) {
    const blog = await Blog.findByIdAndUpdate(id, body);

    if (blog) {
      return NextResponse.json(
        { message: "succesfully updated blog" },
        { status: 200 }
      );
    }
    return NextResponse.json(
      { message: "could not update your blog" },
      { status: 500 }
    );
  } else {
    return NextResponse.json(
      { message: "could not update your blog" },
      { status: 500 }
    );
  }
}
