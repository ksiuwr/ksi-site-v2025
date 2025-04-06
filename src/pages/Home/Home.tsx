import BackgroundImage from "../../components/BackgroundImage";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Members from "./components/Members";
import News from "./components/News";
import Projects from "./components/Projects";

function Home() {
    return <>
      <BackgroundImage/>
      <Hero/>
      <div className="bg-dark-section-primary" style={{clipPath: "polygon(0 0, 100% 5%, 100% 95%, 0 100%)"}}>
        <Members/>
        <Projects/>
        <Contact/>
      </div>
      
      <News/>
      
    </>;
  }

export default Home;