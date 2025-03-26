interface ProjectProps {
  index: number;
  title: string;
  description: string;
  image: string;
  color: string;
  isLast?: boolean;
}

const ProjectCard = ({ index, title, description, image, color, isLast }: ProjectProps) => {
  const isEven = index % 2 === 0;
  const polygonStyle = isLast
  ? (isEven
    ? { clipPath: "polygon(0 85%, 0 15%, 100% 0, 100% 100%, 0 100%)" }
    : { clipPath: "polygon(0 0, 100% 15%, 100% 85%, 100% 100%, 0 100%)" }
  )
  : (isEven
    ? { clipPath: "polygon(0 85%, 0 15%, 100% 0, 100% 100%)" }
    : { clipPath: "polygon(0 0, 100% 15%, 100% 85%, 0 100%)" }
  );

  const overlapStyle = {
    marginTop: index !== 0 ? '-100px' : '0px'
  };

  return (
    <section className={`${color} transform`} style={{...polygonStyle, ...overlapStyle}}>
      <div className="container mx-auto transform grid grid-cols-1
                      md:grid-cols-3 items-center py-44 px-4">
        <div className="md:col-span-2 flex flex-col max-w-xl">
          <h3 className="text-dark-text-primary text-4xl">{title}</h3>
          <hr className="border-action-blue border-t-2 w-full my-4" />
          <p className="text-dark-text-secondary">{description}</p>
        </div>
        <div>
          <img src={image} alt={title} className="rounded-lg object-contain h-72" />
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
