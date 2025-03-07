import AboutUs from "./components/AboutUs";
import { Hero } from "./components/Hero";
import Members from "./components/Members";
import { News } from "./components/News";
import Projects from "./components/Projects";

function Home() {
    return <>
    <div className="relative ">
        <img 
          src="/logo.png"
          alt="Description"
          className="fixed left-0 right-0 w-full opacity-30" 
        />
      </div>
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