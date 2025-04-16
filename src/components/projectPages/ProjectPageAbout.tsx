import { useState, useEffect } from "react";
import { SectionTitle } from "../section/SectionTitle";
import ImageCarouselAutomatic from "../gallery/ImageCarouselAutomatic";

type ProjectPageAboutProps = {
  title: string;
  description: string;
  images: string[];
};

/**
 * Renders a project page about section with a title, description, and an image carousel.
 *
 * The section is divided into two parts: the left side contains the image carousel, while the right side contains the title and description.
 * The layout adjusts based on the screen size. On larger screens, the section has a polygon clip-path for styling, which is disabled on mobile devices.
 *
 * @param {object} props - The component properties.
 * @param {string} props.title - The main title text.
 * @param {string} props.description - The description text displayed below the title.
 * @param {string[]} props.images - An array of image URLs to be displayed in the carousel.
 * @returns {JSX.Element} A styled section containing a carousel and text section.
 */
export const ProjectPageAbout = ({
  title,
  description,
  images,
}: ProjectPageAboutProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const polygonStyle = {
    clipPath: "polygon(0 10%, 100% 0%, 100% 90%, 0% 100%)",
  };

  // Disable polygons on mobile
  const computedPolygonStyle = !isMobile ? polygonStyle : { clipPath: "none" };

  return (
    <section
      className="px-4 lg:px-32 py-12 lg:py-40 -mt-44 bg-section-secondary"
      style={computedPolygonStyle}
    >
      <div className="flex lg:flex-row flex-col w-full justify-evenly gap-6 lg:gap-16">
        {/* Carousel Section */}
        <div className="lg:flex-1 flex lg:flex-col justify-center order-1 lg:order-1">
          <ImageCarouselAutomatic
            images={[
              "https://i1.sndcdn.com/artworks-Yiyr5xGCtveVtAwm-9FdyMQ-t1080x1080.jpg",
              "https://i1.sndcdn.com/avatars-P6rpwYMVW4gZxgGi-papHcQ-t1080x1080.jpg",
            ]}
          />
        </div>

        {/* Text Section */}
        <div className="lg:flex-1 flex lg:flex-col justify-center order-2 lg:order-2">
          <div className="gap-4 flex flex-col mt-4 lg:mt-0">
            <SectionTitle title={title} description={description} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectPageAbout;
