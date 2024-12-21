import { registerZodSchema } from "@/schemas";
import { NextResponse, NextRequest } from "next/server";
import { userModel } from "@/app/(models)/UserModel";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const validation = registerZodSchema.safeParse(body);

  if (validation.success) {
    const emailTaken =
      (await userModel.findOne({ email: body.email })) !== null;
    if (!emailTaken) {
      try {
        const user = await userModel.create(body);
        if (user) {
          return NextResponse.json({ success: "email sent" });
        } else {
          return NextResponse.json({
            error: "user could not be created at this time",
          });
        }
      } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "malformed syntax" });
      }
    }
    return NextResponse.json({ error: "email is already taken" });
  }
  return NextResponse.json({ error: "malformed syntax" });
}
