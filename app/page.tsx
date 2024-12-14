import AboutSection from "@/components/About/AboutSection";
import ProjectSection from "@/components/Project/ProjectSection";
import IslandDash from "@/components/Dash/IslandDash";
import TechSection from "@/components/Tech/TechSection";
import BlogSection from "@/components/Blog/BlogSection";
import ContactSection from "@/components/Contact/ContactSection";
// import { ThemeToggle, toggleVariants } from "@/components/ThemeToggle";

// import { useObserver } from "@/tilsuseObserver";

const Home = async () => {
  // const [dashboardRef, isVisible] = useObserver();
  //vite hot refresh breaks this, the Observer stops updating isVisible

  return (
    <>
      {/* {!isVisible && <IslandDash isVertical={true} ref={dashboardRef} />}
      <IslandDash ref={dashboardRef} /> */}
      {/* <ThemeToggle>Day</ThemeToggle> */}
      <IslandDash />
      <div className="flex flex-col gap-[10rem] m-auto mt-[15vh] w-[90%] lg:w-[90%] xl:w-[80%] text-foreground ">
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
