import { Blog } from "@/app/(models)/BlogModel";
import { NextResponse } from "next/server";
import * as dayjs from "dayjs";
import { blogZodSchema } from "@/schemas/index";

export async function POST(req) {
  try {
    const body = await req.json();

    //zod validate
    const parseResult = blogZodSchema.safeParse(body);

    if (!parseResult.success) {
      return NextResponse.json({ error: parseResult.error }, { status: 400 });
    }
    const blogData = parseResult.data;

    //create blog
    const blog = await Blog.create(blogData);
    if (!blog) {
      return NextResponse.json(
        { error: "blog could not be created" },
        { status: 500 }
      );
    }
    return NextResponse.json({ message: "blog created!" }, { status: 200 });
  } catch (error) {
    console.error(error);
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
