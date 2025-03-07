import BackgroundImage from "../../components/BackgroundImage";
import AboutUs from "./components/AboutUs";
import { Hero } from "./components/Hero";
import Members from "./components/Members";
import { News } from "./components/News";
import Projects from "./components/Projects";

function Home() {
    return <>
      <BackgroundImage/>
      <div className="mx-32">
        <Hero/>
        <AboutUs/>
        <Members/>
        <Projects/>
        <News/>
      </div>
      
    </>;
  }

export default Home;