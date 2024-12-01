import type { Metadata } from "next";
import "@/app/ui/global.css";

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
      <body>
        <div className="m-auto mt-[15vh] w-[80vw] text-primaryMedium">
          {children}
        </div>
      </body>
    </html>
  );
}
