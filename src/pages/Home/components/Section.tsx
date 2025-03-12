import { SectionTitle } from "./SectionTitle";
import ReadMoreBtn from "../../../components/common/ReadMoreBtn";

type SectionProps = {
  title: string;
  description: string;
  titleSize?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  descriptionSize?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
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
  titleSize = 7,
  descriptionSize = 1,
  backgroundStyle = {
    color: 'bg-section-primary',
    skewAngle: -6,
    zIndex: 0,
  },
  imageStyle = {
    backgroundColor: 'bg-gray-200',
    shape: 'circle',
  },
  contentPosition = 'left',
  minHeight = '800px',
}: SectionProps) => {
  // Helper function to determine content width and positioning classes
  const getContentClasses = () => {
    const baseClasses = "flex gap-4 flex-col w-1/2";
    return contentPosition === 'right' ? `${baseClasses} self-end` : baseClasses;
  };

  // Helper function to determine image positioning classes
  const getImageClasses = () => {
    const baseClasses = `absolute z-1 top-1/2 -translate-y-1/2 w-1/2 h-full ${imageStyle.backgroundColor}`;
    const shapeClasses = {
      circle: 'aspect-square rounded-full',
      square: 'aspect-square',
      rectangle: 'aspect-[4/3]',
    }[imageStyle.shape || 'circle'];
    
    
    return `${baseClasses} ${shapeClasses}`;
  };

  return (
    <section className="relative min-h-[500px] w-full">
      {/* Full-width background */}
      <div 
        className={`absolute w-full h-full ${backgroundStyle.color} origin-top-left`}
        style={{ 
          width: '100vw', 
          marginLeft: 'calc(-50vw + 50%)',
          minHeight,
          transform: `skewY(${backgroundStyle.skewAngle}deg)`,
          zIndex: backgroundStyle.zIndex,
        }}
      />
      
      {/* Content */}
      <div className={`relative flex flex-col w-full justify-center`} style={{ minHeight }}>
        <div className={getContentClasses()}>
          <SectionTitle
            title={title}
            description={description}
            titleSize={titleSize}
            descriptionSize={descriptionSize}
          />
          <span className="self-end">
            <ReadMoreBtn />
          </span>
        </div>
        
        {/* Image placeholder */}
        <div className={getImageClasses()} />
      </div>
    </section>
  );
};

export default Section;