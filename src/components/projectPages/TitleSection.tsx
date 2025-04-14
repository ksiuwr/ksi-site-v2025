interface SectionProps {
  header: string;
  subheader: string;
  link?: string;
}

/**
 * Renders a title section with a header and subheader.
 *
 * @param {SectionProps} props - The component properties.
 * @param {string} props.header - The main title text.
 * @param {string} props.subheader - The subtext displayed below the header.
 * @returns {JSX.Element} The rendered title section component.
 */
function TitleSection({ header, subheader }: SectionProps) {
  return (
    <div className="text-center min-h-auto w-full">
      <div className="w-full">
        <h1 className="text-dark-text-primary md:text-5xl text-4xl font-medium text-left">
          {header}
        </h1>
        <hr className="border-action-blue border-t-4 mt-4" />
        <p className="text-dark-text-secondary text-xl text-left mt-4">
          {subheader}
        </p>
      </div>
    </div>
  );
}
export default TitleSection;
