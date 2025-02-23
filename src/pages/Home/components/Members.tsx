import { SectionTitle } from "./SectionTitle";
import ReadMoreBtn from "../../../components/common/ReadMoreBtn";
import Section from "./Section";

export const Members = () => {
  return (

    <Section
        title="Członkowie"
        description="Nasze koło zrzesza studentów informatyki, jak i tych, którzy już studia skończyli. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        backgroundStyle={{
        color: 'bg-dark-section-secondary',
        skewAngle: -6,
        }}
    />

    // <div className="relative min-h-[500px] w-full">
    //   {/* Full-width background */}
    //   <div className="absolute w-full h-full bg-dark-section-secondary -skew-y-6 origin-top-left min-h-[800px]" 
    //        style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)' }} 
    //   />
      
    //   {/* Content */}
    //   <div className="relative flex flex-col w-full justify-center min-h-[800px]">
    //     <div className="flex gap-4 flex-col w-1/2">
    //       <SectionTitle
    //         title="Członkowie"
    //         description="Nasze koło zrzesza studentów informatyki, jak i tych, którzy już studia skończyli. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
    //         title_size={7}
    //         description_size={1}
    //       />
    //       <span className="self-end">
    //         <ReadMoreBtn />
    //       </span>
    //     </div>
    //     <div className="absolute z-1 right-0 top-1/2 -translate-y-1/2 w-1/2 h-full aspect-square rounded-full bg-gray-200" />
    //   </div>
    // </div>
  );
};

export default Members;