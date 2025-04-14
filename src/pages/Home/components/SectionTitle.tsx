interface SectionTitleProps {
  title: string;
  description?: string;
}

/**
 * Renders a section title with optional description.
 *
 * @param {object} props - The component properties.
 * @param {string} props.title - The main title text.
 * @param {string} [props.description] - Optional description text displayed below the title.
 * @returns {JSX.Element} The rendered section title component.
 */
export const SectionTitle = ({ title, description }: SectionTitleProps) => {
  return (
    <div className="flex flex-col">
      <h2
        className={"text-4xl font-bold leading-none text-dark-text-primary"}
      >
        {title}
      </h2>
      <div className="mt-4 border-action-blue border-solid lg:border-4 border-2" />
      {description && (
        <p className={"text-base lg:text-lg text-dark-text-secondary mt-4"}>
          {description}
        </p>
      )}
    </div>
  );
};
