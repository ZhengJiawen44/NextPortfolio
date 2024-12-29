import BlogPost from "@/components/Blog/BlogPost";
import { getToken } from "@/lib/getToken";
import { verifyToken } from "@/lib/token";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";

const Blog = async ({ params }: { params: { id: string } }) => {
  try {
    const { id } = await params;
    if (!id) {
      throw Error("invalid URL was supplied");
    }
    const res = await fetch(`http:/localhost:3000/api/Blog/${id}`, {
      method: "GET",
      cache: "no-store",
    });

    const { errorMessage, decodedPayload } = await getToken();
    const user = await prisma.user.findUnique({
      where: { id: Number(decodedPayload.id) },
      select: { email: true, name: true, role: true },
    });
    console.log(user);

    if (!res.ok) {
      throw Error(`${res.status} blog not found`);
    }
    const { formattedBlog } = await res.json();
    if (!formattedBlog) {
      throw Error("formattedBlog is undefined");
    }

    return (
      <BlogPost
        id={formattedBlog.id}
        title={formattedBlog.title}
        subtitle={formattedBlog.subtitle}
        length={formattedBlog.length}
        date={formattedBlog.createdAt}
        content={formattedBlog.content}
        authorName={formattedBlog.authorName}
      />
    );
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      return <div>{error.message}</div>;
    }
  }
};

export default Blog;
