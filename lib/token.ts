import Jwt from "jsonwebtoken";
import * as jose from "jose";

// export async function signToken(payload: object, expiresIn: string) {
//   const token = Jwt.sign(payload, String(process.env.AUTH_SECRET), {
//     expiresIn: expiresIn,
//   });
//   return token;
// }

export async function signToken(payload: string, expiresIn: string) {
  const secret = new TextEncoder().encode(process.env.AUTH_SECRET);
  const token = await new jose.SignJWT({ payload })
    .setProtectedHeader({
      alg: "HS256",
    })
    .setExpirationTime("1h")
    .sign(secret);
  console.log("token: ", token);
  return token;
}

export async function verifyToken(claims: string) {
  let errorMessage;
  let decodedPayload;
  const secret = new TextEncoder().encode(process.env.AUTH_SECRET);
  try {
    const { payload } = await jose.jwtVerify(claims, secret);
    decodedPayload = payload;
  } catch (error) {
    console.log(error);

    errorMessage = error;
  }
  return { errorMessage, decodedPayload };
}
