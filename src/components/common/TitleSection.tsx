interface SectionProps {
  header: string;
  subheader: string;
  link?: string;
}

function TitleSection({ header, subheader }: SectionProps) {
  return (
    <div className="text-center min-h-auto w-full">
      <div className="w-full">
        <h1 className="text-dark-text-primary md:text-5xl text-4xl font-medium text-left">
          {header}
        </h1>
        <hr className="border-action-blue border-t-4 mt-4" />
        <p className="text-dark-text-secondary md:text-2xl text-xl text-left mt-4">
          {subheader}
        </p>
      </div>
    </div>
  );
}
export default TitleSection;
