import { SectionTitle } from "./SectionTitle";

export const Hero = () => {

  return (
    <section className="mx-4 lg:mx-32 lg:w-1/2 h-[10vh] lg:min-h-[70vh] flex items-center bg-white">
      <SectionTitle
        title="Koło Studentów Informatyki"
        description='"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque'
      />
    </section>
  );
};

export default Hero;