import HeroSection from "../../components/HeroSection";
import ProjectCard from "./components/ProjectCard";
import ZosiaBackgroundImage from "./components/ZosiaBackgroundImage";

const Projects = () => {
  const projects = [
    {
      title: "ZOSIA",
      description:
        "Nasze koło zrzesza studentów informatyki, jak i tych, którzy już studia skończyli. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "zosia.png",
      color: "bg-dark-section-primary",
    },
    {
      title: "Hour of Code",
      description:
        "Inicjatywa edukacyjna...Nasze koło zrzesza studentów informatyki, jak i tych, którzy już studia skończyli. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "hour_of_code.png",
      color: "bg-dark-section-secondary",
    },
    {
      title: "Bot Discord",
      description:
        "Automatyzacja serwerów...Nasze koło zrzesza studentów informatyki, jak i tych, którzy już studia skończyli.",
      image: "no_img.png",
      color: "bg-dark-section-primary",
    },
    {
      title: "Pokój Studencki",
      description:
        "Innowacyjna przestrzeń...Nasze koło zrzesza studentów informatyki, jak i tych, którzy już studia skończyli.",
      image: "alpaka.png",
      color: "bg-dark-section-secondary",
    },
    {
      title: "Sociale",
      description:
        "Platforma społecznościowa...Nasze koło zrzesza studentów informatyki, jak i tych, którzy już studia skończyli.",
      image: "no_img.png",
      color: "bg-dark-section-primary",
    },
  ];

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
