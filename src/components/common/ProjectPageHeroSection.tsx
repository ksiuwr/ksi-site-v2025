/**
 * Displays a custom hero section with a header and subheader.
 *
 * @returns {JSX.Element}
 */
function ProjectPageHeroSection() {
  return (
    <div className="min-h-auto">
      <div className="flex justify-center pt-48 md:pt-64">
        <img src="/images/zosia.svg" alt="ZOSIA" className="w-250 z-20" />
      </div>
      <section
        className="bg-dark-section-primary z-10 relative items-center justify-center"
        style={{
          clipPath: "polygon(50% 0, 100% 10%, 100% 100%, 0 100%,0 10%)",
        }}
      >
        <div className="text-center -mt-16 md:-mt-20">
          <div className="mx-8 lg:mx-44 pt-24 md:pt-32 pb-24 md:pb-32">
            <h1 className="text-dark-text-primary md:text-6xl text-5xl font-bold lg:text-left">
              ZOSIA
            </h1>
            <hr className="border-action-blue border-t-4 md:border-t-8 mt-4 w-1/2 mx-auto lg:mx-0" />
            <p className="text-dark-text-secondary md:text-3xl text-2xl lg:text-left mt-4">
              Zimowy Obóz Studentów Informatyki A
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
export default ProjectPageHeroSection;
