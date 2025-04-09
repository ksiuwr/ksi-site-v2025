import { useEffect, useState } from "react";
import TitleSection from "../projectPages/TitleSection";

/**
 * Renders a gallery section with a title and a grid of images. The layout
 * and style adjust based on the screen size. On larger screens, the section
 * has a polygon clip-path for styling, which is disabled on mobile devices.
 *
 * @param {Object} props - The component props.
 * @param {string[]} props.images - An array of image URLs to be displayed in the gallery.
 * @returns {JSX.Element} A styled section containing a title and a responsive image grid.
 */
function GallerySection({ images }: { images: string[] }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const polygonStyle = { clipPath: "polygon(0 85%, 0 10%, 100% 0, 100% 100%, 0 100%)" };

  // Disable polygons on mobile
  const computedPolygonStyle = !isMobile ? polygonStyle : { clipPath: "none" };

  return (
    <section
      className="bg-dark-section-secondary z-30 px-2 md:px-0 pt-4 md:pt-12 lg:pt-32 pb-8 md:pb-30 -mt-4 md:-mt-30
                  relative flex flex-col items-center justify-center"
      style={computedPolygonStyle}
    >
      <div className="text-center md:mx-28 p-4 lg:px-24 pb-8 lg:py-12">
        <TitleSection header="Galeria" subheader="Zdjęcia z naszych wydarzeń" />
      </div>
      <div className="container grid p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mx-auto items-center">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`gallery-${index}`}
            className="rounded-lg md:h-72 w-full md:object-cover hover:scale-105 transition duration-500 ease-in-out"
          />
        ))}
      </div>
    </section>
  );
}

export default GallerySection;
