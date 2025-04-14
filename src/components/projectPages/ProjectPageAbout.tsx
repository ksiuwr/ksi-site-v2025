import { useEffect, useState } from "react";
import ImageCarousel from "../common/ImageCarousel";
import TitleSection from "./TitleSection";
import { HeroSectionProps } from "../common/HeroSection";

/**
 * Renders a project page about section with a title and subheader, and an image
 * carousel below it. The section has a custom polygon clip-path style on larger
 * screens, which is disabled on mobile devices.
 *
 * @param {{ header: string; subheader: string; }} props
 * @prop {string} header The main title text.
 * @prop {string} subheader The subtext displayed below the header.
 * @returns {JSX.Element} A styled section containing a title and an image carousel.
 */
function ProjectPageAbout({ header, subheader }: HeroSectionProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const polygonStyle = { clipPath: "polygon(0 10%, 100% 0, 100% 100%, 0 90%)" };

  // Disable polygons on mobile
  const computedPolygonStyle = !isMobile ? polygonStyle : { clipPath: "none" };

  return (
    <section
      className="bg-dark-section-secondary z-30 py-12 lg:py-40 -mt-8 md:-mt-20 px-4 md:px-24
                   relative flex flex-col lg:flex-row items-center justify-center"
      style={computedPolygonStyle}
    >
      <div className="w-full lg:w-1/2 p-4">
        <TitleSection header={header} subheader={subheader} />
      </div>
      <div className="w-full lg:w-1/2 p-4">
        <ImageCarousel />
      </div>
    </section>
  );
}

export default ProjectPageAbout;
