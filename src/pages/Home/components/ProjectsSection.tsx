import Section from "./Section";

export const ProjectsSection = () => {
  return (
    <Section
      title="Projekty"
      description="Nasze koło zrzesza studentów informatyki, jak i tych, którzy już studia skończyli. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
      contentPosition="left"
      readMore="/projects"
      bgColor="dark-section-secondary"
      idx={1}
    />
  );
};

export default ProjectsSection;
