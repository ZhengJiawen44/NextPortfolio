import type { Metadata } from "next";
import "@/app/ui/global.css";
import { space_grotesk, space_mono } from "@/app/ui/fonts";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Zheng Jiawen",
  description: "Zheng Jiawen's portfolio site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${space_grotesk.className} ${space_mono.className} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
