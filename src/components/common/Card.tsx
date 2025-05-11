
type CardProps = {
    title: string,
    description: string
    additional_url?: string
    imageUrl: string
}

export const Card = ({title, description, additional_url, imageUrl}: CardProps) => {
    return (
        <div className="flex flex-col min-h-[400px]  w-full rounded bg-section-secondary">
            <div>
                <img className="max-h-[400px] object-cover rounded w-full" src={imageUrl}/>
            </div>
            <div>
                <div className="flex flex-col gap-4 p-6">
                    <h2 className="text-xl md:text-2xl text-primary">
                        {title}
                    </h2>
                    <p className="mt-2 text-secondary text-sm md:text-base">{description}</p>
                    <a className="truncate underline text-action-blue hover:action-blue-secondary visited:text-action-blue-secondary" href={additional_url} target="blank">
                        {additional_url}
                    </a> 
                </div>
            </div>
        </div>
    )
}