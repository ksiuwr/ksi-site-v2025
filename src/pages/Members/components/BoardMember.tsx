interface BoardMemberProps {
  role: string;
  description: string;
  imageSrc: string;
  reverse?: boolean;
  containerClass?: string;
}

/**
 * Component for displaying a board member.
 *
 * @param {BoardMemberProps} props - The component properties.
 * @param {string} role - The role of the board member.
 * @param {string} description - A brief description of the board member.
 * @param {string} imageSrc - The URL of the image of the board member.
 * @param {boolean} [reverse=false] - An optional flag to reverse the order of the text and image sections.
 * @param {string} [containerClass=""] - An optional class for the container element.
 * @returns {JSX.Element} A styled component with a text section and an image section.
 */
export const BoardMember = ({
  role,
  description,
  imageSrc,
  reverse = false,
  containerClass = "",
}: BoardMemberProps) => {
  const textOrderClass = reverse ? "lg:order-2" : "lg:order-1";
  const imageOrderClass = reverse ? "lg:order-1" : "lg:order-2";

  return (
    <div
      className={`grid grid-cols-1 mx-4 lg:grid-cols-2 items-center gap-x-12 ${containerClass}`}
    >
      {/* Text Section */}
      <div className={`flex flex-col ${textOrderClass}`}>
        <h3 className="font-bold text-xl lg:text-2xl mb-2 text-center lg:text-left">
          {role}
        </h3>
        <hr className="border-action-blue border-t-2 mb-6 w-1/2 mx-auto lg:mx-0" />
        <p className="text-dark-text-secondary mb-4 text-center lg:text-left">
          {description}
        </p>
      </div>
      {/* Image Section */}
      <div className={`flex flex-col ${imageOrderClass} mt-4 md:px-32 lg:px-0`}>
        <img
          src={imageSrc}
          alt={role}
          className="rounded-lg min-w-52 aspect-square object-cover"
        />
      </div>
    </div>
  );
};

export default BoardMember;
