import HeroSection from "../../components/HeroSection";
import ProjectCard from "./components/ProjectCard";
import ZosiaBackgroundImage from "./components/ZosiaBackgroundImage";
import projects from "../../data/projectsData";

const Projects = () => {
  return (
    <>
    <ZosiaBackgroundImage />
    <div>
      <HeroSection header="Projekty" subheader="Strona KSI będzie skończona, trzymamy się terminów" />

      {projects.map((project, index) => (
        <div key={index}>
          <ProjectCard {...project} />
        </div>
      ))}
    </div>
    </>
  );
};

export default Projects;
