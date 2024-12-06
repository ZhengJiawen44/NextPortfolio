import BlogPost from "@/app/(components)/BlogPost";

const Blog = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  const data = await fetch(`http:/localhost:3000/api/Blog/${id}`, {
    method: "GET",
    cache: "no-store",
  });
  const { blog } = await data.json();

  if (!blog) {
    return <div>Blog post not found</div>;
  }

  return (
    <BlogPost
      id={blog._id}
      title={blog.title}
      length={blog.length}
      date={blog.date}
      content={blog.content}
    />
  );
};

export default Blog;
