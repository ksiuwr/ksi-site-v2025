import BackgroundImage from "../../components/BackgroundImage";
import hourOfCodeSectionsData from "../../data/hourOfCodeData";
import HourOfCodeIntroduction from "./components/HourOfCodeIntroduction";
import HourOfCodeSection from "./components/HourOfCodeSection";

const HourOfCode = () => {
  return (
    <div className="min-h-screen bg-no-repeat bg-fixed text-dark-text-primary font-sans bg-cover">
      <BackgroundImage />
      <div className="mt-56 mb-0">
        <HourOfCodeIntroduction />

        {hourOfCodeSectionsData.map((section, index) => (
          <div key={index}>
            <HourOfCodeSection
              index={index}
              title={section.title}
              description={section.description}
              image={section.image}
              isLast={index === hourOfCodeSectionsData.length - 1}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourOfCode;
