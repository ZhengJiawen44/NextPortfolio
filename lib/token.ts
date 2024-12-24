import Jwt from "jsonwebtoken";

export function signToken(payload: object, expiresIn: string) {
  const token = Jwt.sign(payload, String(process.env.AUTH_SECRET), {
    expiresIn: expiresIn,
  });
  return token;
}

export function verifyToken(payload: string) {
  const decodedPayload = Jwt.verify(payload, String(process.env.AUTH_SECRET));
  return decodedPayload;
}
