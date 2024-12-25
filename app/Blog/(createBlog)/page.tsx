import "@/components/Loading";
import BlogSection from "@/components/Blog/BlogSection";
import { cookies } from "next/headers";

const Blog = async () => {
  const cookieStore = await cookies();

  console.log(cookieStore.get("name")?.value);
  console.log(cookieStore.get("email")?.value);
  return (
    <>
      <BlogSection displayAll />
    </>
  );
};

export default Blog;
