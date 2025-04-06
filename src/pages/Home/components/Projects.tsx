import { SectionTitle } from "./SectionTitle";
import ReadMoreBtn from "../../../components/common/ReadMoreBtn";
import Section from "./Section";

export const Projects = () => {
  return (
    <Section
            title="Projekty"
            description="Nasze koło zrzesza studentów informatyki, jak i tych, którzy już studia skończyli. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
            contentPosition= 'right'
            readMore="/projects"
            bgColor="dark-section-secondary"
            idx={1}
        />
  );
};

export default Projects;