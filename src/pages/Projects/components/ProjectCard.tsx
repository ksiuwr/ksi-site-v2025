import ReadMoreBtn from "../../../components/common/ReadMoreBtn";

interface ProjectProps {
  index: number;
  title: string;
  description: string;
  image: string;
  color: string;
  isLast?: boolean;
  hasSubpage?: boolean;
  redirectLink: string;
}

/**
 * Renders a project card with a title, description, and image, with an optional
 * "read more" button if a subpage exists. The card layout changes based on
 * the index to alternate content positioning and apply different polygon styles
 * if it's the last card.
 *
 * @param {ProjectProps} props - The properties of the project card.
 * @param {number} props.index - The index of the card for styling purposes.
 * @param {string} props.title - The title of the project.
 * @param {string} props.description - The description of the project.
 * @param {string} props.image - The image URL for the project.
 * @param {string} props.color - The background color class for the card.
 * @param {boolean} [props.isLast] - Optional flag indicating if it's the last card.
 * @param {boolean} [props.hasSubpage] - Optional flag indicating if the project has a subpage.
 * @param {string} props.redirectLink - The link for the "read more" button.
 * @returns {JSX.Element} The rendered project card component.
 */
const ProjectCard = ({
  index,
  title,
  description,
  image,
  color,
  isLast,
  hasSubpage,
  redirectLink,
}: ProjectProps) => {
  const isEven = index % 2 === 0;
  const polygonStyle = isLast
    ? isEven
      ? { clipPath: "polygon(0 85%, 0 15%, 100% 0, 100% 100%, 0 100%)" }
      : { clipPath: "polygon(0 0, 100% 15%, 100% 85%, 100% 100%, 0 100%)" }
    : isEven
    ? { clipPath: "polygon(0 85%, 0 15%, 100% 0, 100% 100%)" }
    : { clipPath: "polygon(0 0, 100% 15%, 100% 85%, 0 100%)" };

  return (
    <section
      className={`${color} transform ${index !== 0 ? "-mt-36" : ""}`}
      style={{ ...polygonStyle }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 items-center py-24 md:py-44 px-4 text-center md:text-left">
        {isEven ? (
          <>
            <div className="md:col-span-2 flex flex-col md:max-w-xl">
              <h3 className="text-primary text-3xl md:text-5xl font-bold">
                {title}
              </h3>
              <hr className="border-action-blue border-t-2 w-full md:w-4/5 my-4" />
              <p className="text-secondary text-base md:text-xl">
                {description}
              </p>
              {hasSubpage && (
                <div className="mt-6">
                  <ReadMoreBtn link="/zosia" text="Więcej o ZOSI" />
                </div>
              )}
            </div>
            <div>
              <img
                src={image}
                alt={title}
                className="rounded-lg object-contain h-48 md:h-72 mx-auto mt-12 md:mt-0 mb-12 md:mb-0 md:ml-2"
              />
            </div>
          </>
        ) : (
          <>
            <div>
              <img
                src={image}
                alt={title}
                className="rounded-lg object-contain h-48 md:h-72 mx-auto md:mx-0 mb-12 md:mb-0 mt-8 md:mt-0"
              />
            </div>
            <div className="md:col-span-2 flex flex-col md:max-w-xl md:ml-8 pb-16 md:pb-0">
              <h3 className="text-primary text-3xl md:text-5xl font-bold">
                {title}
              </h3>
              <hr className="border-action-blue border-t-2 w-full my-4" />
              <p className="text-secondary text-base md:text-xl">
                {description}
              </p>
              {hasSubpage && (
                <div className="mt-6">
                  <ReadMoreBtn link={redirectLink} text="Więcej o Hour of Code" />
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ProjectCard;
