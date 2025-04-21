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
      <SectionHeader title={{ pl: "Zarząd koła", en: "Board members" }} />
      <div className="lg:grid lg:grid-cols-2 flex flex-col gap-y-16 gap-x-8 mx-4 pt-12 lg:mx-16">
        <BoardMember
          role={{
            pl: "Przewodniczący",
            en: "Chairman"
          }}
          description={{
            pl: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
          }}
          imageSrc="/images/placeholder.webp"
          reverse={false}
        />
        <BoardMember
          role={{
            pl: "Wiceprzewodniczący",
            en: "Vice-Chairman"
          }}
          description={{
            pl: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
          }}
          imageSrc="/images/placeholder.webp"
          reverse={true}
          containerClass="lg:mb-[-3vw]"
        />
        <BoardMember
          role={{
            pl: "Sekretarz",
            en: "Secretary"
          }}
          description={{
            pl: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
          }}
          imageSrc="/images/placeholder.webp"
          reverse={false}
        />
        <BoardMember
          role={{
            pl: "Sekretarz",
            en: "Secretary"
          }}
          description={{
            pl: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
          }}
          imageSrc="/images/placeholder.webp"
          reverse={true}
          containerClass="lg:mb-[-3vw]"
        />
      </div>
    </section>
  );
};

export default AssociationBoard;
