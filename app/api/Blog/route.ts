import { Blog } from "@/app/(models)/BlogModel";
import { NextRequest, NextResponse } from "next/server";
import * as dayjs from "dayjs";
import { blogZodSchema } from "@/schemas/index";
import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/token";
import { cookies } from "next/headers";
import { getToken } from "@/lib/getToken";

export async function POST(req: NextRequest) {
  try {
    //access the request header for user ID passed from middleware
    const userID = req.headers.get("x-user-ID");
    console.log(userID);

    const body = await req.json();

    //zod validate
    const parseResult = blogZodSchema.safeParse(body);

    if (!parseResult.success) {
      return NextResponse.json({ error: parseResult.error }, { status: 400 });
    }

    type DecodedPayload = {
      id: String;
    };
    //get cookie

    const cookie = req.cookies.get("token");
    //verify cookie
    const { errorMessage, decodedPayload } = await verifyToken(
      cookie?.value ?? ""
    );
    if (errorMessage) {
      return NextResponse.json(
        { error: "invalid user token" },
        { status: 403 }
      );
    }
    const blogData = {
      ...parseResult.data,
      authorID: (decodedPayload as DecodedPayload).id,
    };

    //create blog
    const blog = await prisma.blog.create({ data: blogData });
    if (!blog) {
      return NextResponse.json(
        { error: "blog could not be created" },
        { status: 500 }
      );
    }
    return NextResponse.json({ message: "blog created!" }, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
    console.error(error);
  }
}

export async function GET() {
  try {
    // const { errorMessage, decodedPayload } = await getToken();
    // console.log(decodedPayload);

    const blogs = await prisma.blog.findMany({});
    // const formattedBlogs = blogs;
    const formattedBlogs = blogs.map((blog) => ({
      ...blog,
      createdAt: dayjs(blog.createdAt).format("DD/MM/YYYY"),
    }));

    return NextResponse.json({ formattedBlogs }, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
    console.log(error);
  }
}
