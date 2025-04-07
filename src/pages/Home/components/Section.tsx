import { useState, useEffect } from "react";
import { SectionTitle } from "./SectionTitle";
import ReadMoreBtn from "../../../components/common/ReadMoreBtn";

type SectionProps = {
  title: string;
  description: string;
  readMore: string;
  readMoreText: string;
  contentPosition?: "left" | "right";
  idx: number;
};

/**
 * Renders a section with a title, description, and an image, along with a
 * "read more" button. The layout and style of the section changes based on
 * the screen size and content position.
 *
 * @param {SectionProps} props - The properties of the section.
 * @param {string} props.title - The title of the section.
 * @param {string} props.description - The description of the section.
 * @param {string} props.readMore - The URL for the "read more" link.
 * @param {"left" | "right"} - The position of the content in the section.
 * @param {string} props.bgColor - The background color class for the section.
 * @param {number} props.idx - The index of the section used for determining layout.
 * @returns {JSX.Element} The rendered section component.
 */
export const Section = ({
  title,
  description,
  readMore,
  readMoreText,
  contentPosition = "left",
  idx,
}: SectionProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getContentClasses = () => {
    const baseClasses =
      "lg:flex-1 flex lg:flex-col items-center justify-center";
    return contentPosition === "right" ? `${baseClasses} order-2` : baseClasses;
  };

  const getImageClasses = () => {
    const baseClasses = "lg:flex-1 flex lg:flex-col justify-center";
    return contentPosition === "right" ? `${baseClasses} order-1` : baseClasses;
  };

  const isLast = idx === 2;
  const isEven = idx % 2 !== 0;
  const polygonStyle = isLast
    ? isEven
      ? { clipPath: "polygon(0 85%, 0 15%, 100% 0, 100% 100%, 0 100%)" }
      : { clipPath: "polygon(0 0, 100% 15%, 100% 85%, 100% 100%, 0 100%)" }
    : isEven
    ? { clipPath: "polygon(0 85%, 0 15%, 100% 0, 100% 100%)" }
    : { clipPath: "polygon(0 0, 100% 15%, 100% 85%, 0 100%)" };

  // Disable polygons on mobile
  const computedPolygonStyle = !isMobile ? polygonStyle : { clipPath: "none" };

  return (
    <section
      className={`px-4 lg:px-32 flex ${
        isEven ? "bg-dark-section-secondary py-8 lg:h-[100vh]" : "lg:h-[80vh]"
      } mb-8 lg:mb-0`}
      style={computedPolygonStyle}
    >
      <div className="flex lg:flex-row flex-col w-full justify-evenly gap-6 lg:gap-16">
        <div className={getContentClasses()}>
          <div className="gap-4 flex flex-col mt-4 lg:mt-0">
            <SectionTitle title={title} description={description} />
            <span className="self-end">
              <ReadMoreBtn link={readMore} text={readMoreText}/>
            </span>
          </div>
        </div>

        <div className={getImageClasses()}>
          <img
            src="images/placeholder.webp"
            className={`${
              contentPosition === "left" ? "self-end lg:mb-0 mb-8" : ""
            } lg:w-full rounded-lg object-cover`}
            alt="Description"
          />
        </div>
      </div>
    </section>
  );
};

export default Section;
