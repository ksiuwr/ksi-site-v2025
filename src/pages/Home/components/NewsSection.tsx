import { Card } from "../../../components/common/Card";
import { SectionTitle } from "../../../components/section/SectionTitle";

type CardData = {
  title: string;
  description: string;
  imageUrl: string;
};

type NewsSectionProps = {
  cards: CardData[];
};

/**
 * A section for displaying news from social media.
 *
 * @param {{ cards: CardData[] }} props
 * @prop {CardData[]} cards An array of objects containing the title and
 * description for each news card.
 *
 * @returns A section with a title and a grid of news cards.
 */
export const NewsSection = ({ cards }: NewsSectionProps) => {
  return (
    <section className="px-4 lg:px-44 mt-20 lg:mb-0 mb-16">
      <div className="w-full md:w-1/2 font-bold mb-4 lg:mb-0">
        <SectionTitle title="Social Media" />
      </div>
      <div className="lg:pt-8 lg:pb-20 w-full grid gap-12 grid-cols-1 md:grid-cols-2 place-items-center max-w-7xl mx-auto">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} imageUrl={card.imageUrl} />
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
