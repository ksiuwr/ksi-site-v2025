interface MemberWindowProps {
  index: number;
  name?: string;
  email?: string;
}

/**
 * Renders a component representing a member window.
 *
 * @param {MemberWindowProps} props - The component properties.
 * @param {number} props.index - The index of the member window.
 * @param {string} [props.name="imi  nazwisko"] - Name of the member.
 * @param {string} [props.email="moj.email@gmail.com"] - Email of the member.
 * @returns {JSX.Element} A styled component representing a member window.
 */
export const MemberWindow = ({
  index,
  name = "imię nazwisko",
  email = "moj.email@gmail.com",
}: MemberWindowProps) => {
  return (
    <div className="bg-section-primary p-6 pb-4 rounded-md text-center transform transition duration-300 hover:scale-105">
      <div className="aspect-square mx-auto mb-4 bg-dark-text-secondary"></div>
      <p className="font-bold">{name}</p>
      <p className="text-secondary text-sm">{email}</p>
    </div>
  );
};

export default MemberWindow;
