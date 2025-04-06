function HoCHeroSection() {
    return (
      <div className="min-h-auto">
        <div className="flex justify-center pt-64">
          <img src="/images/hour-of-code.png" alt="ZOSIA" className="w-80 z-20" />
        </div>
        <section
          className="bg-dark-section-primary z-10 h-120 relative items-center justify-center"
          style={{
            clipPath: "polygon(50% 0, 100% 10%, 100% 100%, 0 100%,0 10%)",
          }}
        >
          <div className="text-center -mt-40">
            <div className="mx-46 pt-34 pb-32">
              <h1 className="text-dark-text-primary md:text-6xl text-5xl font-bold text-left">
                Hour of Code
              </h1>
              <hr className="border-action-blue border-t-10 mt-4 w-1/2" />
              <p className="text-dark-text-secondary md:text-3xl text-2xl text-left mt-4">
                Czyli wciąganie dzieci w depresje i smutek
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
  export default HoCHeroSection;