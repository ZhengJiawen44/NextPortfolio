import BlogPost from "@/components/Blog/BlogPost";

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
