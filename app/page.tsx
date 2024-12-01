"use client";
import AboutSection from "@/app/components/AboutSection";
import IslandDash from "@/app/components/IslandDash";
import { useObserver } from "@/app/utils/useObserver";
const Home = () => {
  const [dashboardRef, isVisible] = useObserver();
  //vite hot refresh breaks this, the Observer stops updating isVisible

  return (
    <>
      {!isVisible && <IslandDash isVertical={true} ref={dashboardRef} />}
      <IslandDash ref={dashboardRef} />

      <div className="m-auto mt-[15vh] w-[80vw] text-primaryMedium">
        <AboutSection />
      </div>
      <div className="h-[100vh]"></div>
    </>
  );
};

export default Home;
