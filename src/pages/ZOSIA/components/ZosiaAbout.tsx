import { useEffect, useState } from "react";
import ImageCarousel from "../../../components/common/ImageCarousel";
import TitleSection from "../../../components/common/TitleSection";

/**
 * Renders a section with a background clip-path set to a
 * polygon, and is disabled on mobile devices.
 *
 * @returns {React.ReactElement} A React component representing the ZOSIa
 * section.
 */
function ZosiaAbout() {
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
        <TitleSection
          header="Czym jest ZOSIa?"
          subheader="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet ornare mauris. Curabitur quis neque viverra, ultrices lorem vel, mattis nisi. Nunc ac quam neque. Donec viverra dolor eget ex vehicula, eget volutpat tortor porta. Curabitur a mi a sapien congue porta. Ut porttitor mollis purus sit amet efficitur. Etiam viverra quam a tortor dignissim pellentesque."
        />
      </div>
      <div className="w-full lg:w-1/2 p-4">
        <ImageCarousel />
      </div>
    </section>
  );
}

export default ZosiaAbout;
