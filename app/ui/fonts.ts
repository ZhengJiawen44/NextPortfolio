import { Space_Grotesk } from "next/font/google";
import { Space_Mono } from "next/font/google";

export const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
});
export const space_mono = Space_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mono",
});
