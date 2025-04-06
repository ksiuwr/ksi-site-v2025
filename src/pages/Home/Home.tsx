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
      <Members/>
      <Projects/>
      <Contact/>
      <News/>
      
    </>;
  }

export default Home;