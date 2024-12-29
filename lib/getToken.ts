import { cookies } from "next/headers";
import { verifyToken } from "./token";

/**
 * gets the "token" from cookie and verifies before return it
 * @returns errorMessage, decodedPayload
 * @example const {errorMessage, decodedPayload} = await getToken();
 */
interface returnType {
  errorMessage: string;
  decodedPayload: object;
}
export async function getToken(): Promise<returnType> {
  try {
    const cookie = await cookies();

    const token = cookie.get("token")?.value;
    const { errorMessage, decodedPayload } = await verifyToken(String(token));
    // console.log(decodedPayload);

    return { errorMessage, decodedPayload };
  } catch (error) {
    console.error(error);
  }
}
