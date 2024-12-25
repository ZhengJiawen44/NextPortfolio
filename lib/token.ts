import Jwt from "jsonwebtoken";

export function signToken(payload: object, expiresIn: string) {
  const token = Jwt.sign(payload, String(process.env.AUTH_SECRET), {
    expiresIn: expiresIn,
  });
  return token;
}

export function verifyToken(payload: string) {
  let errorMessage;
  let decodedPayload;
  Jwt.verify(payload, String(process.env.AUTH_SECRET), function (err, decoded) {
    if (err) {
      errorMessage = err.message;
    } else {
      decodedPayload = decoded;
    }
  });
  return { errorMessage, decodedPayload };
}
