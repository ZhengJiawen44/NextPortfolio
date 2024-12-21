import mongoose, { Schema } from "mongoose";

try {
  await mongoose.connect(process.env.MONGODB_URI as string);
} catch (error) {
  console.log(error);
}

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
});
export const userModel =
  mongoose.model("user", userSchema) || mongoose.models.User;
