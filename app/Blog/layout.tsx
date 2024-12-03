import IslandDash from "../components/IslandDash";

export default function Layout({ children }) {
  return (
    <>
      <IslandDash />
      <div className="m-auto mt-[15vh] w-[90vw] md:w-[80vw] text-primaryMedium">
        <main>{children}</main>
      </div>
    </>
  );
}
