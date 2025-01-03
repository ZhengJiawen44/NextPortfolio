"use client";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import SearchBar from "@/components/ui/SearchBar";
import Recommendation from "@/components/Blog/Recommendation";
import { TbUserCircle, TbPencil } from "react-icons/tb";
import Link from "next/link";
import useUser from "@/lib/getUser";

interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  const { user, loading, error } = useUser();

  const pathname = usePathname(); // /Blog
  const [isHomepage, setIsHomePage] = useState(true);
  useEffect(() => {
    if (pathname === "/Blog") {
      setIsHomePage(true);
    } else {
      setIsHomePage(false);
    }
  }, [pathname]);
  return (
    <>
      <div
        className="shadow-lg shadow-black/30 w-full border-b-[1px] 
      py-2 sm:py-3 flex items-center gap-3 justify-between px-3 lg:px-[3rem] "
      >
        <div className="flex max-w-[70%] sm:min-w-[50%] items-center gap-3">
          <h1 className="sm:text-[1.5rem]">
            <Link href={"/Blog"}>BlogSpot</Link>1
          </h1>
          <SearchBar />
        </div>

        <div className="flex items-center gap-3 w-fit">
          <Link
            aria-label="create a new blog"
            className="m-0 p-0  border-[1px] bg-item w-fit h-fit px-4 py-2  sm:flex sm:items-center sm:gap-1 rounded-[20px] text-item-foreground hover:text-foreground"
            href={user === null ? "/Auth/Login" : "/Blog/new"}
          >
            <TbPencil />
            <p className="hidden sm:block m-0 p-0">write</p>
          </Link>

          <Link href="/Auth/Login">
            {user?.name ?? (
              <TbUserCircle
                className="text-item-foreground h-[2rem] w-[2rem] sm:h-[2.5rem] sm:w-[2.5rem]
           hover:text-white hover:cursor-pointer transition-all duration-300"
              />
            )}
          </Link>
        </div>
      </div>

      {isHomepage ? (
        <div className="lg:grid grid-cols-3 h-screen">
          <div
            className="col-span-2  lg:overflow-y-auto lg:scrollbar-hide 
       pt-10 pl-[2rem] xl:pl-[8rem] 2xl:pl-[16rem] pr-7"
          >
            {children}
          </div>
          <div className="col-span-1 border-l-2 overflow-y-auto scrollbar-hide pt-16 pl-[2.5rem]">
            <Recommendation />
          </div>
        </div>
      ) : (
        <div className="pt-10 m-auto w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%]">
          {children}
        </div>
      )}
    </>
  );
}
