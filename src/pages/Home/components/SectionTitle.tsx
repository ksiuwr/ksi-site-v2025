import { useTheme } from "../../../context/ThemeContext";

interface SectionTitleProps {
  title: {
    pl: string;
    en: string;
  };
  description?: {
    pl: string;
    en: string;
  };
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
  const { lang } = useTheme();
  return (
    <div className="flex flex-col">
      <h2
        className={"lg:text-5xl text-4xl leading-none text-primary"}
      >
        {title[lang]}
      </h2>
      <div className="mt-4 border-action-blue border-solid lg:border-4 border-2" />
      {description && (
        <p className={"text-base lg:text-xl text-secondary mt-4"}>
          {description[lang]}
        </p>
      )}
    </div>
  );
};
