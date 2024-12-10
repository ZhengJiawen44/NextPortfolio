import BlogPost from "@/components/BlogPost";

const Blog = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  const res = await fetch(`http:/localhost:3000/api/Blog/${id}`, {
    method: "GET",
    cache: "no-store",
  });
  const { formattedBlog } = await res.json();
  console.log(formattedBlog);

  if (!formattedBlog) {
    return <div>Blog post not found</div>;
  }

  return (
    <BlogPost
      id={formattedBlog._id}
      title={formattedBlog.title}
      length={formattedBlog.length}
      date={formattedBlog.date}
      content={formattedBlog.content}
    />
  );
};

export default Blog;
