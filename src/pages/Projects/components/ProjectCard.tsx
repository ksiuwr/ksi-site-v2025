import ReadMoreBtn from "../../../components/common/ReadMoreBtn";

interface ProjectProps {
  index: number;
  title: string;
  description: string;
  image: string;
  color: string;
  isLast?: boolean;
  hasSubpage?: boolean;
}

const ProjectCard = ({
  index,
  title,
  description,
  image,
  color,
  isLast,
  hasSubpage,
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
      className={`${color} transform ${index !== 0 ? "md:-mt-24 -mt-40" : ""}`}
      style={{ ...polygonStyle }}
    >
      <div
        className="container mx-auto transform grid grid-cols-1
                      md:grid-cols-3 items-center py-44 px-4 text-center md:text-left"
      >
        {isEven ? (
          <>
            <div className="md:col-span-2 flex flex-col max-w-xl">
              <h3 className="text-dark-text-primary text-5xl font-bold">
                {title}
              </h3>
              <hr className="border-action-blue border-t-2 w-full md:w-4/5 my-4" />
              <p className="text-dark-text-secondary text-xl">{description}</p>
              {hasSubpage && (
                <div className="mt-6">
                  {/* <ReadMoreBtn link="/zosia" /> */}
                </div>
              )}
            </div>
            <div>
              <img
                src={image}
                alt={title}
                className="rounded-lg object-contain h-72 mx-auto md:mx-0 mt-12 md:mt-0"
              />
            </div>
          </>
        ) : (
          <>
            <div>
              <img
                src={image}
                alt={title}
                className="rounded-lg object-contain h-72 mx-auto md:mx-0 mb-12 md:mb-0"
              />
            </div>
            <div className="md:col-span-2 flex flex-col max-w-xl md:ml-8">
              <h3 className="text-dark-text-primary text-5xl font-bold">
                {title}
              </h3>
              <hr className="border-action-blue border-t-2 w-full my-4" />
              <p className="text-dark-text-secondary text-xl">{description}</p>
              {hasSubpage && (
                <div className="mt-6">{/* <ReadMoreBtn link="/" /> */}</div>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ProjectCard;
