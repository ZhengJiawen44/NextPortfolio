import { Blog } from "@/app/(models)/BlogModel";
import { NextResponse } from "next/server";
import { blogZodSchema } from "@/schemas/index";
import * as dayjs from "dayjs";

export async function GET(req, { params }) {
  try {
    const { id } = await params;
    if (!id) {
      return NextResponse.json(
        { error: "id does not exist within path params" },
        { status: 400 }
      );
    }

    const blog = await Blog.findById(id);

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    const formattedBlog = blog.toObject();
    formattedBlog.date = dayjs(blog.createdAt).format("DD/MM/YYYY");
    delete formattedBlog.updatedAt;
    delete formattedBlog.createdAt;
    delete formattedBlog.__v;

    return NextResponse.json({ formattedBlog }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = await params;
    if (!id) {
      return NextResponse.json(
        { error: "id does not exist within path params" },
        { status: 400 }
      );
    }
    const blog = await Blog.findByIdAndDelete(id);
    if (!blog) {
      return NextResponse.json({ error: "blog not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "blog deleted" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

export async function PATCH(req, { params }) {
  try {
    const { id } = await params;
    if (!id) {
      return NextResponse.json(
        { error: "id does not exist within path params" },
        { status: 400 }
      );
    }
    const body = await req.json();

    const result = blogZodSchema.safeParse(body);
    if (result.error) {
      return NextResponse.json(
        { message: "bad input recieved" },
        { status: 400 }
      );
    }

    const blog = await Blog.findByIdAndUpdate(id, body);

    if (!blog) {
      return NextResponse.json({ error: "blog not found" }, { status: 404 });
    }
    return NextResponse.json(
      { message: "blog succesfully updated" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
