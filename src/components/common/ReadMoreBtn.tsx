import { ReadMoreIcon } from "./icons/Icons";


export default function ReadMoreBtn() {
    return (
      <button className="flex items-center gap-2 text-base font-medium text-secondary">
        <p>
          Read More
        </p>
        <ReadMoreIcon width={40} height={22}/>
      </button>

    )
  }