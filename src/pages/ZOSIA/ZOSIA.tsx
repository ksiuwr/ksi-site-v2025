import BackgroundImage from "../../components/common/BackgroundImage";
import GallerySection from "../../components/gallery/GallerySection";
import ProjectPageAbout from "../../components/projectPages/ProjectPageAbout";
import ProjectPageHeroSection from "../../components/projectPages/ProjectPageHeroSection";
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
    <div>
      <BackgroundImage />
      <ProjectPageHeroSection
        header={{ pl: "ZOSIA", en: "ZOSIA" }}
        subheader={{ pl: "Zimowy Obóz Studentów Informatyki A", en: "Zimowy Obóz Studentów Informatyki A" }}
        imagePath="../images/zosia.svg"
      />
      <div className="lg:py-16 pb-8 pt-44">
        <ProjectPageAbout
          title={{ pl: "Czym jest ZOSIA?", en: "What is ZOSIA?" }}
          description={{ 
            pl: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet ornare mauris. Curabitur quis neque viverra, ultrices lorem vel, mattis nisi. Nunc ac quam neque. Donec viverra dolor eget ex vehicula, eget volutpat tortor porta. Curabitur a mi a sapien congue porta. Ut porttitor mollis purus sit amet efficitur. Etiam viverra quam a tortor dignissim pellentesque.",
            en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet ornare mauris. Curabitur quis neque viverra, ultrices lorem vel, mattis nisi. Nunc ac quam neque. Donec viverra dolor eget ex vehicula, eget volutpat tortor porta. Curabitur a mi a sapien congue porta. Ut porttitor mollis purus sit amet efficitur. Etiam viverra quam a tortor dignissim pellentesque."
          }}
          images={[]}
        />
      </div>
      <ZosiaLectures />
      <GallerySection images={images.map((image) => image.src)} />
    </div>
  );
}
export default Zosia;
