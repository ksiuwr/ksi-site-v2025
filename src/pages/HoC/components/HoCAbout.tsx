import ImageCarousel from "../../../components/common/ImageCarousel";
import TitleSection from "../../../components/projectPages/TitleSection";

function HoCAbout() {
  return (
    <section
      className="bg-dark-section-secondary z-10 pt-40 pb-40 -mt-20 items-center justify-center"
      style={{ clipPath: "polygon(0 10%, 100% 0, 100% 100%, 0 90%)" }}
    >
      <div className="container flex flex-row gap-20 mx-auto max-w-350 items-center">
        <TitleSection
          header="Czym jest HoC?"
          subheader="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
        <ImageCarousel />
      </div>
    </section>
  );
}

export default HoCAbout;
