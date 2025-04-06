import GallerySection from "../../components/common/GallerySection";
import BackgroundImage from "../../components/BackgroundImage";
import ZosiaAbout from "./components/ZosiaAbout";
import ZosiaHeroSection from "./components/ZosiaHeroSection";
import ZosiaLectures from "./components/ZosiaLectures";
import useDocumentTitle from "../../hooks/useDocumentTitle";


const images = [
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_FWF2judaujT30K9sMf-tZFhMWpgP6xCemw&s",
    alt: "Image 1",
  },
  {
    src: "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
    alt: "Image 2",
  },
  {
    src: "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
    alt: "Image 3",
  },
  {
    src: "https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true",
    alt: "Image 4",
  },
  {
    src: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    alt: "Image 5",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9YYh5Fk1u9VsWWr1MhkyQeOzeNbtnnMO96g&s",
    alt: "Image 6",
  },
  {
    src: "https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp",
    alt: "Image 7",
  },
  {
    src: "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
    alt: "Image 8",
  },
  { src: "https://tinypng.com/images/social/website.jpg", alt: "Image 9" },
];


function ZOSIa() {
  useDocumentTitle("KSI | " + "ZOSIA");
  return (
    <div className="min-h-screen bg-no-repeat bg-fixed text-dark-text-primary font-sans bg-cover -mb-0.25">
      <BackgroundImage />
      <ZosiaHeroSection />
      <ZosiaAbout />
      <ZosiaLectures />
      <GallerySection images={images.map((image) => image.src)} />
    </div>
  );
}
export default ZOSIa;