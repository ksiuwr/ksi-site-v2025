import BackgroundImage from "../../components/common/BackgroundImage";
import HoCEvents from "./components/HoCEvents";
import GallerySection from "../../components/gallery/GallerySection";
import ProjectPageHeroSection from "../../components/projectPages/ProjectPageHeroSection";
import ProjectPageAbout from "../../components/projectPages/ProjectPageAbout";
import images from "../../data/zosiaImagesData"; // To replace later with HoC images

/**
 * Renders a hour of code project page with various sections including background image,
 * hero section, about section, events, and a gallery.
 *
 * @returns {JSX.Element} A React component representing the HoC page layout.
 */
function HourOfCode() {
  return (
    <div>
      <BackgroundImage />
      <ProjectPageHeroSection
        header="Hour of Code"
        subheader="Warsztaty programowania dla najmłodszych"
        imagePath="../HourOfCodeLogoBottom.png"
      />
      <div className="lg:pt-16 pt-44">
        <ProjectPageAbout
          title="Czym jest HoC?"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          images={[]}
        />
        <HoCEvents />
        <div className="-mt-28">
          <GallerySection images={images.map((image) => image.src)} />
        </div>
      </div>
    </div>
  );
}

export default HourOfCode;
