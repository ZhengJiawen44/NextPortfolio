import IslandDash from "@/components/Dash/IslandDash";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="static">
        <IslandDash />
      </div>

      <div className="mt-[15vh] m-auto md:mt-[20vh]  w-[90%] sm:w-[80%] md:w-[80%] lg:w-[70%] text-primaryMedium">
        <main>{children}</main>
      </div>
    </>
  );
}
