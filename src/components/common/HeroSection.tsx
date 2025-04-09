export interface HeroSectionProps {
  header: string;
  subheader: string;
}

/**
 * Displays a hero section with a header and subheader.
 *
 * @param {{ header: string; subheader: string; }} props
 * @prop {string} header The main text of the hero section.
 * @prop {string} subheader Optional subtext of the hero section.
 */
const HeroSection = ({ header, subheader }: HeroSectionProps) => {
  return (
    <div className="min-h-auto">
      <div className="mx-4 md:mx-40 pt-16 md:pt-64 pb-8 md:pb-32">
        <h1
          className="text-dark-text-primary font-bold text-center
                        sm:text-5xl md:text-6xl text-4xl md:text-left"
        >
          {header}
        </h1>
        <hr className="border-action-blue border-t-4 mt-4 lg:w-1/2 lg:mx-auto md:mx-0" />
        <p
          className="text-dark-text-secondary mt-4 text-center
                      sm:text-2xl md:text-3xl text-xl md:text-left"
        >
          {subheader}
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
