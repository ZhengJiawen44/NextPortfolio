import AboutSection from "@/components/About/AboutSection";
import ProjectSection from "@/components/Project/ProjectSection";
import IslandDash from "@/components/Dash/IslandDash";
import VerticalDash from "@/components/Dash/VerticalDash";
import TechSection from "@/components/Tech/TechSection";
import BlogSection from "@/components/Blog/BlogSection";
import ContactSection from "@/components/Contact/ContactSection";
// import { ThemeToggle, toggleVariants } from "@/components/ThemeToggle";

const Home = async () => {
  return (
    <>
      {/* <ThemeToggle>Day</ThemeToggle> */}
      <VerticalDash />

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
