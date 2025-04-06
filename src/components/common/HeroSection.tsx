interface HeroSectionProps {
  header: string;
  subheader: string;
}

const HeroSection = ({ header, subheader }: HeroSectionProps) => {
  return (
    <div className="text-center min-h-auto">
      <div className="mx-46 pt-64 pb-32 mx-40">
        <h1 className="text-dark-text-primary md:text-6xl text-5xl font-bold text-left">
          {header}
        </h1>
        <hr className="border-action-blue border-t-4 mt-4 w-1/2" />
        <p className="text-dark-text-secondary md:text-3xl text-2xl text-left mt-4">
          {subheader}
        </p>
      </div>
    </div>
  );
};
export default HeroSection;
