import BackgroundImage from "../../components/BackgroundImage";
import ZosiaIntroduction from "./components/ZosiaIntroduction";
import ZosiaAbout from "./components/ZosiaAbout";
import ZosiaLectures from "./components/ZosiaLectures";

function Zosia() {
  return (
    <div className="min-h-screen bg-no-repeat bg-fixed text-dark-text-primary font-sans bg-cover">
      <BackgroundImage />
      <div className="mt-56 mb-0">
        <ZosiaIntroduction />
        <ZosiaAbout />
        <ZosiaLectures />
      </div>
    </div>
  );
}

export default Zosia;
