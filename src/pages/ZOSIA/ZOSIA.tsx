import BackgroundImage from "../../components/common/BackgroundImage";
import GallerySection from "../../components/gallery/GallerySection";
import ZosiaAbout from "./components/ZosiaAbout";
import ZosiaHeroSection from "./components/ZosiaHeroSection";
import ZosiaLectures from "./components/ZosiaLectures";
import images from "../../data/zosiaImagesData";

function Zosia() {
  return (
    <div className="min-h-screen bg-no-repeat bg-fixed text-dark-text-primary font-sans bg-cover">
      <BackgroundImage />
      <ZosiaHeroSection />
      <ZosiaAbout />
      <ZosiaLectures />
      <GallerySection images={images.map((image) => image.src)} />
    </div>
  );
}
export default Zosia;