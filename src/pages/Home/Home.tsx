import BackgroundImage from "../../components/common/BackgroundImage";
import HeroSection from "../../components/common/HeroSection";
import NewsSection from "./components/NewsSection";
import { homeSections, newsCards } from "../../data/homePageData";
import Section from "../../components/section/Section";
import { useTheme } from "../../context/ThemeContext";

/**
 * Page displaying the main information about the student association.
 *
 * The page is split into sections, each of which displays a title, description, and a "read more" button.
 *
 * @return {JSX.Element} The home page.
 */
function Home() {
  const { lang } = useTheme();

  const hero = {
    header: {
      pl: "Koło Studentów Informatyki",
      en: "Computer Science Students Association"
    },
    subheader: {
      pl: "KSI",
      en: "KSI"
    }
  };

  return (
    <>
      <BackgroundImage />
      <HeroSection header={hero.header[lang]} subheader={hero.subheader[lang]} />
      <div
        className="bg-section-primary lg:py-16 py-32"
        style={{ clipPath: "polygon(0 0, 100% 5%, 100% 95%, 0 100%)" }}
      >
        {homeSections.map((section) => (
          <Section
            key={section.idx}
            title={section.title[lang]}
            description={section.description[lang]}
            image={section.image}
            readMore={section.readMore}
            readMoreText={section.readMoreText[lang]}
            contentPosition={section.contentPosition as "right" | "left"}
            idx={section.idx}
          />
        ))}
      </div>
      <NewsSection cards={newsCards} />
    </>
  );
}

export default Home;
