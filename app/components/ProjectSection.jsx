import ProjectCard from "@/app/components/ProjectCard";
import { data } from "@/app/utils/projectData";
const ProjectSection = () => {
  return (
    <div id="Project">
      <h1 className="mb-20 mt-[50vh] static font-extrabold">Projects</h1>
      {data.map(({ title, desc, content, tags }) => {
        return (
          <ProjectCard
            key={title}
            title={title}
            desc={desc}
            content={content}
            tags={tags}
          />
        );
      })}
      <div className="mb-[100vw]"></div>
    </div>
  );
};

export default ProjectSection;
