import { useTheme } from "../../context/ThemeContext";

export interface HeroSectionProps {
  header: {
    pl: string;
    en: string;
  };
  subheader: {
    pl: string;
    en: string;
  };
}

/**
 * Displays a hero section with a header and subheader.
 *
 * @param {{ header: { pl: string; en: string}; subheader: { pl: string; en: string }}} props
 * @prop {{ pl: string; en: string }} header The main text of the hero section.
 * @prop {{ pl: string; en: string }} subheader Optional subtext of the hero section.
 */
const HeroSection = ({ header, subheader }: HeroSectionProps) => {
  const { lang } = useTheme();
  return (
    <div className="min-h-auto">
      <div className="mx-4 md:mx-40 pt-16 md:pt-64 pb-8 md:pb-32">
        <h1
          className="text-primary font-bold text-center
                        sm:text-5xl md:text-6xl text-4xl md:text-left"
        >
          {header[lang]}
        </h1>
        <hr className="border-action-blue border-t-4 mt-4 w-1/2 mx-auto md:mx-0" />
        <p
          className="text-secondary mt-4 text-center
                      sm:text-2xl md:text-3xl text-xl md:text-left"
        >
          {subheader[lang]}
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
