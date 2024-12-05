import mongoose, { Schema } from "mongoose";

try {
  await mongoose.connect(process.env.MONGODB_URI as string);
} catch (error) {
  console.log(error);
}

const blogSchema = new Schema(
  {
    title: { type: String },
    length: { type: String },
    content: { type: String },
  },
  { timestamps: true }
);

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

export default Blog;
