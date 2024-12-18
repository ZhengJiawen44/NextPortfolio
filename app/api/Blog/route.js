import { Blog } from "@/app/(models)/BlogModel";
import { NextResponse } from "next/server";
import { validate } from "@/lib/blogValidation";
import * as dayjs from "dayjs";

export async function POST(req) {
  try {
    const body = await req.json();

    const parsedData = validate(body);
    if (parsedData === true) {
      const blog = await Blog.create(body);
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

export async function GET() {
  try {
    const blogs = await Blog.find({});

    const formattedBlogs = blogs.map((blog) => {
      const blogObj = blog.toObject();
      blogObj.date = dayjs(blog.createdAt).format("DD/MM/YYYY");
      delete blogObj.updatedAt;
      delete blogObj.createdAt;
      delete blogObj.__v;
      return blogObj;
    });

    return NextResponse.json({ formattedBlogs }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function DELETE() {
  const blogs = await Blog.deleteMany();

  return NextResponse.json({ blogs: blogs });
}
