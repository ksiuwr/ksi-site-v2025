import { MemberWindow } from "./MemberWindow";
import SectionHeader from "./SectionHeader";

/**
 * Renders a section displaying regular members in a responsive grid format.
 *
 * @returns {JSX.Element} A React component representing the regular members section.
 */
export const RegularMembers = () => {
  return (
    <section className="bg-dark-section-secondary z-20 px-4 pt-12 lg:pt-16 pb-20 items-center justify-center">
      <div>
        <SectionHeader title="Członkowie" />
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-16">
          {Array(50)
            .fill(0)
            .map((_, index) => (
              <MemberWindow key={index} index={index} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default RegularMembers;
