import mongoose, { Schema } from "mongoose";

try {
  await mongoose.connect(process.env.MONGODB_URI as string);
} catch (error) {
  console.log(error);
}

const userSchema = new Schema({
  name: { type: String, trim: true },
  email: { type: String, trim: true },
  emailVerified: { type: Date },
  password: { type: String, trim: true },
});
export const userModel =
  mongoose.models.user || mongoose.model("user", userSchema);
