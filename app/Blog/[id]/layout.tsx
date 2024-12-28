import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return <div className="m-0">{children}</div>;
}
