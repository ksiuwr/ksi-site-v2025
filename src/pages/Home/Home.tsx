import BackgroundImage from "../../components/common/BackgroundImage";
import HeroSection from "../../components/common/HeroSection";
import ContactSection from "./components/ContactSection";
import MembersSection from "./components/MembersSection";
import NewsSection from "./components/NewsSection";
import ProjectsSection from "./components/ProjectsSection";

function Home() {
    return <>
      <BackgroundImage/>
      <HeroSection header="Koło Studentów Informatyki" subheader="KSI"/>
      <div className="bg-dark-section-primary" style={{clipPath: "polygon(0 0, 100% 5%, 100% 95%, 0 100%)"}}>
        <MembersSection/>
        <ProjectsSection/>
        <ContactSection/>
      </div>

      <NewsSection/>

    </>;
  }

export default Home;