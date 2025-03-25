interface ProjectProps {
  title: string;
  description: string;
  image: string;
  color: string;
}

const ProjectCard = ({ title, description, image, color }: ProjectProps) => {
  return (
    <section className={`${color} transform`}>
      <div className="container mx-auto transform grid grid-cols-1
                      md:grid-cols-3 items-center gap-8 py-16 px-4">
        <div className="md:col-span-2 flex flex-col">
          <h3 className="text-dark-text-primary text-4xl">{title}</h3>
          <hr className="border-action-blue border-t-2 w-full my-4" />
          <p className="text-dark-text-secondary">{description}</p>
        </div>
        <div>
          <img src={image} alt={title} className="rounded-lg object-cover" />
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
