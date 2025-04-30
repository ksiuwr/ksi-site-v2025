import BackgroundImage from "../../components/common/BackgroundImage";
import GallerySection from "../../components/gallery/GallerySection";
import ProjectPageAbout from "../../components/projectPages/ProjectPageAbout";
import ProjectPageHeroSection from "../../components/projectPages/ProjectPageHeroSection";
import ZosiaLectures from "./components/ZosiaLectures";
import { hero, about } from "../../data/zosiaData"
import images from "../../data/zosiaImagesData";

/**
 * Renders a page with various sections including background image,
 * hero section, about section, lectures, and a gallery.
 *
 * @returns {JSX.Element} A React component representing the Zosia page layout.
 */
function Zosia() {
  return (
    <div>
      <BackgroundImage />
      <ProjectPageHeroSection
        header={hero.header}
        subheader={hero.subheader}
        imagePath={hero.imagePath}
      />
      <div className="lg:py-16 pb-8 pt-44">
        <ProjectPageAbout
          title={about.title}
          description={about.description}
          images={about.images}
        />
      </div>
      <ZosiaLectures />
      <GallerySection images={images.map((image) => image.src)} />
    </div>
  );
}
export default Zosia;
