import BlogPost from "@/app/components/BlogPost";
import { blogData } from "@/app/utils/blogData";

interface BlogData {
  id: string;
  title: string;
  read: string;
  date: string;
  content: string;
}

const Blog = ({ params }: { params: { id: string } }) => {
  const blog = blogData.find((blog: BlogData) => blog.id === params.id);

  if (!blog) {
    return <div>Blog post not found</div>;
  }

  return (
    <BlogPost
      id={blog.id}
      title={blog.title}
      read={blog.read}
      date={blog.date}
      content={blog.content}
    />
  );
};

export default Blog;
