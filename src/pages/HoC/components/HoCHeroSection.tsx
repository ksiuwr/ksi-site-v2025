function HoCHeroSection() {
  return (
    <div className="min-h-auto">
      <div className="flex justify-center pt-32">
        <img
          src="/HourOfCodeLogoBottom.png"
          alt="HOC"
          className="z-20 rounded-t-full rounded-b-[40rem]"
        />
      </div>
      <section
        className="bg-dark-section-primary h-120 relative items-center justify-center"
        style={{
          clipPath: "polygon(50% 0, 100% 10%, 100% 100%, 0 100%,0 10%)",
        }}
      >
        <div className="text-center -mt-20">
          <div className="mx-44 pt-32 pb-32">
            <h1 className="text-dark-text-primary md:text-6xl text-5xl font-bold text-left">
              Hour of Code
            </h1>
            <hr className="border-action-blue border-t-8 mt-4 w-1/2" />
            <p className="text-dark-text-secondary md:text-3xl text-2xl text-left mt-4">
              Warsztaty programowania dla najmłodszych
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
export default HoCHeroSection;
