interface HourOfCodeSectionProps {
  index: number;
  title: string;
  description: string;
  image: string;
  isLast?: boolean;
}

const HourOfCodeSection = ({
  index,
  title,
  description,
  image,
  isLast,
}: HourOfCodeSectionProps) => {
  const isEven = index % 2 !== 0;
  const polygonStyle = isLast
    ? isEven
      ? { clipPath: "polygon(0 85%, 0 15%, 100% 0, 100% 100%, 0 100%)" }
      : { clipPath: "polygon(0 0, 100% 15%, 100% 85%, 100% 100%, 0 100%)" }
    : isEven
    ? { clipPath: "polygon(0 85%, 0 15%, 100% 0, 100% 100%)" }
    : { clipPath: "polygon(0 0, 100% 15%, 100% 85%, 0 100%)" };
  const backgroundColorClass = isEven
    ? "bg-dark-section-primary"
    : "bg-dark-section-secondary";

  return (
    <>
      <section
        className={`py-44 ${backgroundColorClass}
                  md:-mt-28 -mt-40}`}
        style={{ ...polygonStyle }}
      >
        {isEven ? (
          <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-10 md:max-w-6xl mx-auto">
            <div className="flex flex-col ml-12">
              <h2 className="text-4xl font-bold mb-6">{title}</h2>
              <p className="text-xl md:max-w-md text-justify">{description}</p>
            </div>
            <div>
              <img
                src={image}
                alt={title}
                className="w-full h-auto rounded shadow-lg"
              />
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-10 md:max-w-6xl mx-auto">
            <div>
              <img
                src={image}
                alt={title}
                className="w-full h-auto rounded shadow-lg"
              />
            </div>
            <div className="flex flex-col md:ml-12">
              <h2 className="text-4xl font-bold mb-6">{title}</h2>
              <p className="text-xl md:max-w-md text-justify">{description}</p>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default HourOfCodeSection;
