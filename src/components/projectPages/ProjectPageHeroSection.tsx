import { useTheme } from "../../context/ThemeContext";
/**
 * Renders a hero section with a header and subheader, customized for project pages.
 *
 * @param {{ header: { pl: string, en: string}; subheader: { pl: string, en: string}; }} props
 * @prop {{ pl: string, en: string }} header The main text of the hero section.
 * @prop {{ pl: string, en: string }} subheader Optional subtext of the hero section.
 * @returns {JSX.Element} A styled section containing a header and subheader.
 */
function ProjectPageHeroSection({
  header,
  subheader,
  imagePath,
}: {
  header: {
    pl: string;
    en: string;
  };
  subheader: {
    pl: string;
    en: string;
  };
  imagePath: string;
}) {
  const { lang } = useTheme();
  return (
    <div className="min-h-auto">
      <div className="flex justify-center pt-48 md:pt-64">
        <img src={imagePath} alt="ZOSIA" className="w-250 z-20" />
      </div>
      <section
        className="bg-section-primary z-0 relative items-center justify-center"
        style={{
          clipPath: "polygon(50% 0, 100% 10%, 100% 100%, 0 100%,0 10%)",
        }}
      >
        <div className="text-center -mt-16 md:-mt-20">
          <div className="mx-8 lg:mx-44 pt-24 md:pt-32 pb-8 md:pb-16 lg:pb-44">
            <h1 className="text-primary lg:text-6xl text-4xl md:text-5xl font-bold lg:text-left">
              {header[lang]}
            </h1>
            <hr className="border-action-blue border-t-4 md:border-t-8 mt-4 w-1/2 mx-auto lg:mx-0" />
            <p className="text-secondary md:text-3xl text-xl lg:text-left mt-4">
              {subheader[lang]}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
export default ProjectPageHeroSection;
