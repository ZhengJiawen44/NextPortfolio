import { registerZodSchema } from "@/schemas";
import { NextResponse, NextRequest } from "next/server";
import { userModel } from "@/app/(models)/UserModel";
import { hash } from "@/lib/hash";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const validation = registerZodSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json({ error: "malformed syntax" });
  }

  const emailTaken = (await userModel.findOne({ email: body.email })) !== null;
  if (emailTaken) {
    return NextResponse.json({ error: "this email is already taken" });
  }

  //code block to send email verification
  try {
    body.password = await hash(body.password);
    const user = await userModel.create(body);
    if (!user) {
      return NextResponse.json({
        error: "user could not be created at this time",
      });
    }
    return NextResponse.json({ success: "email sent" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "malformed syntax" });
  }
}
