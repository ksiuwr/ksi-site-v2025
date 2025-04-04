import ZosiaGallery from "./ZosiaGallery";

function ZosiaAbout() {
  return (
    <section
      className="relative items-center justify-center bg-section-secondary z-10 pt-24 pb-24 -mt-20"
      style={{ clipPath: "polygon(0 10%, 100% 0%, 100% 100%, 0 95%)" }}
    >
      <h2 className="text-sans text-4xl font-bold ml-[13vw] mt-[2vw]">
        Czym jest ZOSIA?
      </h2>
      <hr className="border-action-blue border-t-2 mt-2 ml-[13vw] mr-[50vw]" />
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-14 mx-[13vw] pt-10">
        <div className="flex flex-col">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit
          amet ornare mauris. Curabitur quis neque viverra, ultrices lorem vel,
          mattis nisi. Nunc ac quam neque. Donec viverra dolor eget ex vehicula,
          eget volutpat tortor porta. Curabitur a mi a sapien congue porta. Ut
          porttitor mollis purus sit amet efficitur. Etiam viverra quam a tortor
          dignissim pellentesque.
        </div>
        <ZosiaGallery />
      </div>
    </section>
  );
}

export default ZosiaAbout;
