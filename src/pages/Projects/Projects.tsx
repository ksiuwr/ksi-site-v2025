import HeroSection from "../../components/common/HeroSection";
import CustomBackgroundImage from "../../components/common/CustomBackgroundImage";
import projects from "../../data/projectsData";
import Section from "../../components/section/Section";
import { useTheme } from "../../context/ThemeContext";
/**
 * A page showing all projects of KSI.
 *
 * @returns A JSX element representing the Projects page.
 */
const Projects = () => {
  const { lang } = useTheme();

  return (
    <>
      <CustomBackgroundImage />
      <HeroSection
        header={{
          pl: "Projekty",
          en: "Projects"
        }}
        subheader={{
          pl: "Strona KSI będzie skończona, trzymamy się terminów",
          en: "KSI site will be completed, we stick to deadlines"
        }}
      />
      <div
        className="bg-section-primary lg:py-16 pb-8 pt-44"
        style={{ clipPath: "polygon(0 0, 100% 5%, 100% 100%, 0 100%)" }}
      >
        {projects.map((project, index) => (
          <div key={index}>
            <Section
              key={index}
              title={project.title[lang]}
              description={project.description[lang]}
              image={project.image}
              readMore={project.readMore}
              readMoreText={project.readMoreText[lang]}
              contentPosition={project.contentPosition as "right" | "left"}
              idx={index}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
