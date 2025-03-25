interface HeroSectionProps {
  header: string;
  subheader: string;
}

const HeroSection = ({ header, subheader }: HeroSectionProps) => {
  return (
    <div className="text-center min-h-auto">
      <div className="relative pt-64 pb-32 w-1/2 left-72">
        <h1 className="text-dark-text-primary text-5xl font-bold text-left">
          {header}
        </h1>
        <p className="text-dark-text-secondary text-2xl text-left mt-4">
          {subheader}
        </p>
        <hr className="border-action-blue border-t-2 mt-4 w-1/2" />
      </div>
    </div>
  );
};
export default HeroSection;
