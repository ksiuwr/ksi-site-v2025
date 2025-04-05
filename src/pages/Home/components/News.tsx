import { Card } from "../../../components/common/Card"
import { SectionTitle } from "./SectionTitle"

export const News = () => {


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
        <section className="mt-4">
            <div className="w-2/3">
                <SectionTitle
                    title="Koło Studentów Informatyki"
                    description="Wieści ważne xd"
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

export default News;