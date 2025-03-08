function ZosiaIntroduction() {
  return (
    <>
      <div className="flex justify-center ">
        <img src="/images/zosia.svg" alt="Logo" className="z-30" />
      </div>
      <section
        className="relative items-center justify-center bg-dark-section-primary z-0 pt-24 pb-32 -mt-20"
        style={{ clipPath: "polygon(0 0%, 100% 12%, 100% 100%, 0 100%)" }}
      >
        <div className="container mx-auto px-4 mt-12">
          <h1 className="text-dark-text-prime text-5xl font-bold text-left">
            Zimowy Obóz Studentów Informatyki A
          </h1>
          <p className="text-dark-text-secondary text-2xl  text-left mt-[14px]">
            Inaczej konferencja naukowa ZOSIA
          </p>
          <hr className="border-action-blue border-t-2 mt-2 z-22" />
        </div>
      </section>
    </>
  );
}
export default ZosiaIntroduction;
