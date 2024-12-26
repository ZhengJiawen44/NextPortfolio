import { ReactNode } from "react";
import Link from "next/link";
interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return <div className="m-0">{children}</div>;
}
