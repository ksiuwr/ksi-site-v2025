import { BoardMember } from "./BoardMember";
import SectionHeader from "./SectionHeader";
import { boardMembers } from "../../../data/membersData";

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
        {boardMembers.map((member) => (
          <BoardMember
            role={member.role}
            description={member.description}
            imageSrc={member.imageSrc}
            reverse={member.reverse}
            containerClass={member.containerClass}
          />
        ))}
      </div>
    </section>
  );
};

export default AssociationBoard;
