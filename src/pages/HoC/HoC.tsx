import BackgroundImage from "../../components/common/BackgroundImage";
import HoCEvents from "./components/HoCEvents";
import GallerySection from "../../components/gallery/GallerySection";
import ProjectPageHeroSection from "../../components/projectPages/ProjectPageHeroSection";
import ProjectPageAbout from "../../components/projectPages/ProjectPageAbout";
import { hoc } from "../../data/projectPagesData";
import images from "../../data/zosiaImagesData"; // To replace later with HoC images

/**
 * Renders a hour of code project page with various sections including background image,
 * hero section, about section, events, and a gallery.
 *
 * @returns {JSX.Element} A React component representing the HoC page layout.
 */
function HourOfCode() {
  const hero = hoc.hero;
  const about = hoc.about;

  const urls = images.map((image) => image.src);
  const imageObjs = urls.map((url, i) => ({
    src: url,
    thumb: url,
    alt: `Image #${i + 1}`,
  }));

  return (
    <div>
      <BackgroundImage />
      <ProjectPageHeroSection
        header={hero.header}
        subheader={hero.subheader}
        imagePath={hero.imagePath}
      />
      <div className="lg:pt-16 pt-44">
        <ProjectPageAbout
          title={about.title}
          description={about.description}
          images={about.images}
        />
        <HoCEvents />
        <div className="-mt-16">
          <GallerySection images={imageObjs} />
        </div>
      </div>
    </div>
  );
}

export default HourOfCode;
