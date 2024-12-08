import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";
import IslandDash from "@/components/IslandDash";
import TechSection from "@/components/TechSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import { ThemeToggle, toggleVariants } from "@/components/ThemeToggle";

// import { useObserver } from "@/tilsuseObserver";

const Home = async () => {
  // const [dashboardRef, isVisible] = useObserver();
  //vite hot refresh breaks this, the Observer stops updating isVisible

  return (
    <>
      {/* {!isVisible && <IslandDash isVertical={true} ref={dashboardRef} />}
      <IslandDash ref={dashboardRef} /> */}
      <ThemeToggle>Day</ThemeToggle>
      <IslandDash />
      <div className="flex flex-col gap-[10rem] m-auto mt-[15vh] w-[90%] lg:w-[90%] xl:w-[80%] text-foreground">
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
