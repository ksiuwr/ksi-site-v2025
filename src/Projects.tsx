import React from "react";
import ProjectCard from "./ProjectCard";
import ZosiaSection from "./ZosiaSection";

const projects = [
    { title: "ZOSIA", description: "Nasze koło zrzesza studentów informatyki, jak i tych, którzy już studia skończyli. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", image: "zosia.png", color: "bg-dark-section-blue", skewAmount: 6 },
    { title: "Hour of Code", description: "Inicjatywa edukacyjna...Nasze koło zrzesza studentów informatyki, jak i tych, którzy już studia skończyli. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", image: "hour_of_code.png", color: "bg-dark-section-primary", skewAmount: -8 },
    { title: "Bot Discord", description: "Automatyzacja serwerów...Nasze koło zrzesza studentów informatyki, jak i tych, którzy już studia skończyli. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", image: "no_img.png", color: "bg-dark-section-blue", skewAmount: 9 },
    { title: "Pokój Studencki", description: "Innowacyjna przestrzeń...Nasze koło zrzesza studentów informatyki, jak i tych, którzy już studia skończyli. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", image: "alpaka.png", color: "bg-dark-section-primary", skewAmount: -8 },
    { title: "Sociale", description: "Platforma społecznościowa...Nasze koło zrzesza studentów informatyki, jak i tych, którzy już studia skończyli. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", image: "no_img.png", color: "bg-dark-section-blue", skewAmount: 1 },
];


const Projects: React.FC = () => {
    return (
        <div className="bg-dark-background-primary">
            <ZosiaSection />

            {projects.map((project, index) => (
                <div key={index} className={index === 0 ? "" : "mt-[-11vh]"}>
                    <ProjectCard {...project} />
                </div>
            ))}

            {/* Footer */}
            <footer className="bg-dark-background-primary text-dark-text-secondary py-8 mt-12">
                <div className="container mx-auto text-center">
                    <p>Instytut Informatyki Uniwersytetu Wrocławskiego</p>
                    <p>ul. Fryderyka Joliot-Curie 15, Wrocław, Sala 24</p>
                    <p>ksi@cs.uni.wroc.pl</p>
                    <p>© KSI</p>
                </div>
            </footer>
        </div>
    );
};

export default Projects;