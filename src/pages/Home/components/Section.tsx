import { SectionTitle } from "./SectionTitle";
import ReadMoreBtn from "../../../components/common/ReadMoreBtn";

type SectionProps = {
  title: string;
  description: string;
  readMore: string;
  backgroundStyle?: {
    color?: string;
    skewAngle?: number;
    zIndex?: number;
  };
  imageStyle?: {
    position?: 'left' | 'right';
    backgroundColor?: string;
    shape?: 'circle' | 'square' | 'rectangle';
  };
  contentPosition?: 'left' | 'right';
  minHeight?: string;
};

export const Section = ({
  title,
  description,
  readMore,
  backgroundStyle = {
    color: 'bg-dark-section-primary',
    skewAngle: -6,
    zIndex: -1,
  },
  contentPosition = 'left',
}: SectionProps) => {
  
  const getContentClasses = () => {
    const baseClasses = "lg:flex-1 flex lg:flex-col items-center justify-center";
    return contentPosition === 'right' ? `${baseClasses} order-2` : baseClasses;
  };

  const getImageClasses = () => {
    const baseClasses = "lg:flex-1 flex lg:flex-col justify-center";
    return contentPosition === 'right' ?  `${baseClasses} order-1` : `${baseClasses}`;
  }


  return (
    <section className="relative min-h-[800px] lg:min-h-[800px] w-full">
      <div 
        className={`absolute w-full h-full min-h-[800px] ${backgroundStyle.color} origin-top-left`}
        style={{ 
          width: '100vw', 
          marginLeft: 'calc(-50vw + 50%)',
          transform: `skewY(${backgroundStyle.skewAngle}deg)`,
          zIndex: backgroundStyle.zIndex,
        }}
      />

      <div className={`absolute  flex lg:flex-row flex-col w-full h-4/5 justify-evenly`} 
        style={{
          top: '50%',
          transform: 'translateY(-50%)',
          position: 'absolute',
          zIndex: (backgroundStyle.zIndex || -1) + 1
        }}
      >
          <div className={getContentClasses()}>
            <div className="gap-4 flex flex-col">
              <SectionTitle
                title={title}
                description={description}
              />
              <span className="self-end">
                <ReadMoreBtn link={readMore} />
              </span>
            </div>
          </div>
         
         <div className={getImageClasses()}>
            <img src="public/images/malpka.png" className={`${contentPosition == 'left' ? "self-end" : ""} w-3/4 rounded-full aspect-square object-cover`} alt="Description"/>
         </div>   
      </div>
     </section>
  );
};

export default Section;