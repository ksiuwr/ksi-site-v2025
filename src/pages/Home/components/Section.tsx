import { SectionTitle } from "./SectionTitle";
import ReadMoreBtn from "../../../components/common/ReadMoreBtn";

type SectionProps = {
  title: string;
  description: string;
  readMore: string;
  contentPosition?: 'left' | 'right';
  bgColor: string;
  idx: number
};

export const Section = ({
  title,
  description,
  readMore,
  contentPosition = 'left',
  bgColor,
  idx
}: SectionProps) => {


  
  const getContentClasses = () => {
    const baseClasses = "lg:flex-1 flex lg:flex-col items-center justify-center";
    return contentPosition === 'right' ? `${baseClasses} order-2` : baseClasses;
  };

  const getImageClasses = () => {
    const baseClasses = "lg:flex-1 flex lg:flex-col justify-center";
    return contentPosition === 'right' ?  `${baseClasses} order-1` : `${baseClasses}`;
  }

  const isLast = idx === 3;
  const isEven = idx % 2 === 0;
  const polygonStyle = isLast
    ? isEven
      ? { clipPath: "polygon(0 85%, 0 15%, 100% 0, 100% 100%, 0 100%)" }
      : { clipPath: "polygon(0 0, 100% 15%, 100% 85%, 100% 100%, 0 100%)" }
    : isEven
    ? { clipPath: "polygon(0 85%, 0 15%, 100% 0, 100% 100%)" }
    : { clipPath: "polygon(0 0, 100% 15%, 100% 85%, 0 100%)" };


  return (
    <section className={`px-4 lg:px-32  flex bg-${bgColor} h-[100vh]`}
    // style={polygonStyle}
    >
      <div className={`flex lg:flex-row flex-col w-full justify-evenly`}>
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