import BackgroundImage from "../../components/common/BackgroundImage";
import GallerySection from "../../components/gallery/GallerySection";
import ZosiaAbout from "./components/ZosiaAbout";
import ProjectPageHeroSection from "../../components/common/ProjectPageHeroSection";
import ZosiaLectures from "./components/ZosiaLectures";
import images from "../../data/zosiaImagesData";

/**
 * Renders a page with various sections including background image,
 * hero section, about section, lectures, and a gallery.
 *
 * @returns {JSX.Element} A React component representing the Zosia page layout.
 */
function Zosia() {
  return (
    <div className="min-h-screen bg-no-repeat bg-fixed text-dark-text-primary font-sans bg-cover">
      <BackgroundImage />
      <ProjectPageHeroSection />
      <ZosiaAbout />
      <ZosiaLectures />
      <GallerySection images={images.map((image) => image.src)} />
    </div>
  );
}
export default Zosia;
