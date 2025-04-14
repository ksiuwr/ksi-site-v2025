import HeroSection from "../../components/common/HeroSection";
import ProjectCard from "./components/ProjectCard";
import ZosiaBackgroundImage from "./components/ZosiaBackgroundImage";
import projects from "../../data/projectsData";

/**
 * A page showing all projects of KSI.
 *
 * @returns A JSX element representing the Projects page.
 */
const Projects = () => {
  return (
    <>
      <ZosiaBackgroundImage />
      <div>
        <HeroSection
          header="Projekty"
          subheader="Strona KSI będzie skończona, trzymamy się terminów"
        />

        {projects.map((project, index) => (
          <div key={index}>
            <ProjectCard
              index={index}
              {...project}
              isLast={index === projects.length - 1}
              hasSubpage={project.hasSubPage}
              redirectLink={project.hasSubPage ? `/projects/${project.title}` : ""}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
