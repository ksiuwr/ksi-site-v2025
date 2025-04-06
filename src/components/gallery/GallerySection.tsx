import TitleSection from "../common/TitleSection";

function GallerySection({ images }: { images: string[] }) {
  return (
    <section
      className="bg-dark-section-secondary z-30 pt-20 pb-30 -mt-30 relative items-center justify-center pb-20"
      style={{ clipPath: "polygon(0 5%, 100% 0, 100% 100%, 0 100%)" }}
    >
      <div className="text-center mx-28 p-4 lg:px-24 lg:py-12 ">
        <TitleSection header="Galeria" subheader="Zdjęcia z naszych wydarzeń" />
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-350 items-center">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`gallery-${index}`}
            className="rounded-lg object-cover h-72 w-full hover:scale-105 transition duration-500 ease-in-out"
          />
        ))}
      </div>
    </section>
  );
}

export default GallerySection;
