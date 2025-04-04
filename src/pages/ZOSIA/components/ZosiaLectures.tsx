import ZosiaPlayer from "./ZosiaPlayer";

function ZosiaLectures() {
  return (
    <section
      className="bg-section-primary z-20 pt-32 pb-36 mt-[-12vh] items-center justify-center"
      style={{ clipPath: "polygon(0 10%, 100% 10%, 100% 100%, 0 100%)" }}
    >
      <h2 className="text-sans text-4xl font-bold ml-[13vw] mt-[2vw]">
        ZOSI'owe wykłady
      </h2>
      <hr className="border-action-blue border-t-2 mt-2 ml-[13vw] mr-[40vw]" />
      <div className="grid lg:grid-cols-[4fr_2fr] md:grid-cols-[3fr_2fr] sm:grid-cols-1 gap-14 mx-[13vw] pt-10">
        <ZosiaPlayer />
        <div className="flex flex-col">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit
          amet ornare mauris. Curabitur quis neque viverra, ultrices lorem vel,
          mattis nisi. Nunc ac quam neque. Donec viverra dolor eget ex vehicula,
          eget volutpat tortor porta. Curabitur a mi a sapien congue porta. Ut
          porttitor mollis purus sit amet efficitur. Etiam viverra quam a tortor
          dignissim pellentesque.
        </div>
      </div>
    </section>
  );
}

export default ZosiaLectures;
