import ProjectCard from "./ProjectCard";
import { data } from "@/lib/data/projectData";
const ProjectSection = () => {
  return (
    <div id="Project">
      <h1 className="mb-10 static text-[2.5rem] md:text-title">Projects</h1>
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
    </div>
  );
};

export default ProjectSection;
