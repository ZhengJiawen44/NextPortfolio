import type { Metadata } from "next";
import "@/app/global.css";
import { space_grotesk, space_mono } from "@/app/ui/fonts";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <ToastContainer theme="dark" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
