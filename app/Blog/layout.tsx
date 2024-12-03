import IslandDash from "../components/IslandDash";

export default function Layout({ children }) {
  return (
    <>
      <IslandDash />
      <main>{children}</main>
    </>
  );
}
