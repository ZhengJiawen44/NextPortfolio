import IslandDash from "../(components)/IslandDash";

export default function Layout({ children }) {
  return (
    <>
      <IslandDash />
      <div className="mt-[15vh] m-auto md:mt-[20vh]  w-[90%] sm:w-[80%] md:w-[80%] lg:w-[70%] text-primaryMedium">
        <main>{children}</main>
      </div>
    </>
  );
}
