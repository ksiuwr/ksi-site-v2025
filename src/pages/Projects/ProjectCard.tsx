import React from "react";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  color: string;
  skewAmount?: number;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, image, color, skewAmount = 0 }) => {
  return (
    <section className={`${color} z-10 relative pt-20 pb-20 flex justify-center items-center`}
      style={{ clipPath: `polygon(0 ${10 - skewAmount}%, 100% 0, 100% ${90 + skewAmount}%, 0 100%)` }}>
      <div className="flex flex-row items-center gap-16 p-8">
        <div className='flex flex-col'>
          <h3 className="text-dark-text-primary text-4xl">{title}</h3>
          <hr className="border-action-blue border-t-2" />
          <p className="text-dark-text-secondary">{description}</p>
        </div>
        <div>
          <img src={image} alt="zosia" className="rounded-lg min-w-[210px] aspect-square object-cover" />
        </div>
      </div>
    </section>
  );
};
export default ProjectCard;
