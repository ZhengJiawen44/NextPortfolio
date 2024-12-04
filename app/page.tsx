"use client";
import AboutSection from "@/app/components/AboutSection";
import ProjectSection from "@/app/components/ProjectSection";
import IslandDash from "@/app/components/IslandDash";
import TechSection from "@/app/components/TechSection";
import BlogSection from "@/app/components/BlogSection";
import ContactSection from "@/app/components/ContactSection";
import { useObserver } from "@/app/utils/useObserver";
const Home = () => {
  const [dashboardRef, isVisible] = useObserver();
  //vite hot refresh breaks this, the Observer stops updating isVisible

  return (
    <>
      {!isVisible && <IslandDash isVertical={true} ref={dashboardRef} />}
      <IslandDash ref={dashboardRef} />

      <div className="flex flex-col gap-[10rem] m-auto mt-[15vh] w-[90%] lg:w-[90%] xl:w-[80%] text-primaryMedium">
        <AboutSection />
        <ProjectSection />
        <TechSection />
        <BlogSection displayAll={false} />
        <ContactSection />
      </div>
    </>
  );
};

export default Home;
