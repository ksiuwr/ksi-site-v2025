import { SectionTitle } from "./SectionTitle";

export const Hero = () => {

  return (
    <section className="w-2/3 min-h-screen flex items-center bg-white">
      <SectionTitle
        title="Koło Studentów Informatyki"
        description='"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque'
        titleSize={7}
        descriptionSize={2}
      />
    </section>
  );
};