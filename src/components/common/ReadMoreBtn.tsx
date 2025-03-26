import { Link } from "react-router";
import { ReadMoreIcon } from "./icons/Icons";


export default function ReadMoreBtn({link}: { link: string}) {
    return (
      <Link to={link}>
        <button className="flex items-center gap-2 text-dark-text-secondary">
          <p>
            Read More
          </p>
          <ReadMoreIcon />
        </button>
      </Link>

    )
  }