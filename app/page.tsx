"use client";
import AboutSection from "@/app/components/AboutSection";
import ProjectSection from "@/app/components/ProjectSection";
import IslandDash from "@/app/components/IslandDash";
import TechSection from "@/app/components/TechSection";
import { useObserver } from "@/app/utils/useObserver";
const Home = () => {
  const [dashboardRef, isVisible] = useObserver();
  //vite hot refresh breaks this, the Observer stops updating isVisible

  return (
    <>
      {!isVisible && <IslandDash isVertical={true} ref={dashboardRef} />}
      <IslandDash ref={dashboardRef} />

      <div className="m-auto mt-[15vh] w-[90vw] md:w-[80vw] text-primaryMedium">
        <AboutSection />
        <ProjectSection />
        <TechSection />
      </div>
    </>
  );
};

export default Home;
