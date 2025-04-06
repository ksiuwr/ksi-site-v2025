import ImageCarousel from "../../../components/common/ImageCarousel";
import TitleSection from "../../../components/common/TitleSection";

function ZosiaAbout() {
  return (
    <section
      className="bg-dark-section-secondary z-30 py-40 -mt-20 relative items-center justify-center"
      style={{ clipPath: "polygon(0 10%, 100% 0, 100% 100%, 0 90%)" }}
    >
      <div className="container flex flex-row gap-20 mx-auto items-center">
        <TitleSection
          header="Czym jest ZOSIa?"
          subheader="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit
          amet ornare mauris. Curabitur quis neque viverra, ultrices lorem vel,
          mattis nisi. Nunc ac quam neque. Donec viverra dolor eget ex vehicula,
          eget volutpat tortor porta. Curabitur a mi a sapien congue porta. Ut
          porttitor mollis purus sit amet efficitur. Etiam viverra quam a tortor
          dignissim pellentesque."
        />
        <ImageCarousel />
      </div>
    </section>
  );
}

export default ZosiaAbout;
