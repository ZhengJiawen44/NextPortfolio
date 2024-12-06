"use server";

export async function loader() {
  try {
    const blogs = await fetch("http://localhost:3000/api/Blog");
    return await blogs.json();
  } catch (error) {
    console.error("Error:", error);
    return;
  }
}
