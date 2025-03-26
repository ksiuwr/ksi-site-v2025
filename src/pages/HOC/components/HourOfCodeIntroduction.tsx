const HourOfCodeIntroduction = () => {
  return (
    <>
      <div className="flex justify-center">
        {/* Temporary zosia.svg placeholder  */}
        <img src="/images/zosia.svg" alt="Hour of Code Logo" className="z-10" />
      </div>
      <section
        className="relative items-center justify-center bg-dark-section-primary z-0 pt-24 pb-44 -mt-20"
        style={{ clipPath: "polygon(0 12%, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="container mx-auto px-4 mt-12">
          <h1 className="text-dark-text-prime text-5xl font-bold text-left">
            Hour of Code
          </h1>
          <p className="text-dark-text-secondary text-2xl text-left mt-4">
            Czyli nauka programowania na naszym instytucie dla najmłodszych
          </p>
          <hr className="border-action-blue border-t-2 mt-2" />
        </div>
      </section>
    </>
  );
}

export default HourOfCodeIntroduction;
