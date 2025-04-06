import ReadMoreBtn from "./ReadMoreBtn"


type CardProps = {
    title: string,
    description: string
}

export const Card = ({title, description}: CardProps) => {
    return (
        <div className="flex flex-col min-h-[600px] w-full rounded bg-dark-section-secondary">
            <div className="h-[200px] bg-red-100 w-full">
                <img/>
            </div>
            <div className="flex flex-col gap-4 flex-1 p-4">
                <h3 className="font-small text-dark-text-secondary">{title}</h3>
                <p className="text-dark-text-primary">{description}</p>
                <div className="mt-auto self-end">
                {/* <ReadMoreBtn/> */}
                </div>
            </div>
        </div>
    )
}