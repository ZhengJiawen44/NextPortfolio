import { ReactNode } from "react";
import SearchBar from "@/components/ui/SearchBar";
import { TbUserCircle, TbPencil } from "react-icons/tb";
import Link from "next/link";
interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div
        className="shadow-lg shadow-black/30 w-full border-b-[1px] 
      py-2 sm:py-3 flex items-center gap-3 justify-between px-3 lg:px-[3rem] "
      >
        <div className="flex max-w-[70%] sm:min-w-[50%] items-center gap-3">
          <h1 className="sm:text-[1.5rem]">
            <Link href={"/Blog"}>BlogSpot</Link>
          </h1>
          <SearchBar />
        </div>

        <div className="flex items-center gap-3 w-fit">
          <Link
            className="m-0 p-0  border-[1px] bg-item w-fit h-fit px-4 py-2  sm:flex sm:items-center sm:gap-1 rounded-[20px] text-item-foreground hover:text-foreground"
            href="/Blog/new"
          >
            <TbPencil />
            <p className="hidden sm:block m-0 p-0">write</p>
          </Link>

          <Link href="/Auth/Login">
            <TbUserCircle
              className="text-item-foreground h-[2rem] w-[2rem] sm:h-[2.5rem] sm:w-[2.5rem]
           hover:text-white hover:cursor-pointer transition-all duration-300"
            />
          </Link>
        </div>
      </div>

      <div className="mt-[15vh] m-auto lg:ml-[18vw] md:mt-[20vh]  w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] ">
        {children}
      </div>
    </>
  );
}
