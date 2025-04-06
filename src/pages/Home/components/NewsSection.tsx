import { Card } from "../../../components/common/Card"
import { SectionTitle } from "./SectionTitle"

export const NewsSection = () => {


    const cards = [
        {
            title: "Title 1",
            description: "Random Description 1"
        },
        {
            title: "Title 2",
            description: "Random Description 2"
        }
    ]

    return (
        <section className="px-4 lg:px-44 mt-20">
            <div className="w-1/2 font-bold">
                <SectionTitle
                    title="Social Media"
                />
            </div>
            <div className="lg:p-24 w-full grid gap-16 lg:grid-cols-2 place-items-center max-w-7xl mx-auto">
                {cards.map(card => (
                    <Card title={card.title} description={card.description}/>
                ))}
            </div>
        </section>
    )
}

export default NewsSection;