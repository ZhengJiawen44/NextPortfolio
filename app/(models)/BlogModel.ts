import mongoose, { mongo, Schema } from "mongoose";

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
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);
