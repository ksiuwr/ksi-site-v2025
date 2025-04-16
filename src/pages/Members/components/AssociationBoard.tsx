import { BoardMember } from "./BoardMember";
import SectionHeader from "./SectionHeader";

/**
 * Renders a section for displaying the association board members.
 *
 * @returns {JSX.Element} A section with a title, and a grid of BoardMember components.
 */
export const AssociationBoard = () => {
  return (
    <section className="bg-section-primary z-10 lg:pt-16 pt-12 lg:pb-24 pb-12 relative items-center justify-center">
      <SectionHeader title="Zarząd koła" />
      <div className="lg:grid lg:grid-cols-2 flex flex-col gap-y-16 gap-x-8 mx-4 pt-12 lg:mx-16">
        <BoardMember
          role="Przewodniczący"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
          imageSrc="/images/placeholder.webp"
          reverse={false}
        />
        <BoardMember
          role="Wiceprzewodniczący"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
          imageSrc="/images/placeholder.webp"
          reverse={true}
          containerClass="lg:mb-[-3vw]"
        />
        <BoardMember
          role="Sekretarz"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
          imageSrc="/images/placeholder.webp"
          reverse={false}
        />
        <BoardMember
          role="Sekretarz"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
          imageSrc="/images/placeholder.webp"
          reverse={true}
          containerClass="lg:mb-[-3vw]"
        />
      </div>
    </section>
  );
};

export default AssociationBoard;
