import { Link } from "react-router";
import { ReadMoreIcon } from "./icons/Icons";


export default function ReadMoreBtn({link}: { link: string}) {
    return (
<<<<<<< HEAD
      <Link to={link}>
        <button className="flex items-center gap-2 text-secondary">
          <p>
            Read More
          </p>
          <ReadMoreIcon />
        </button>
      </Link>
=======
      <button className="flex items-center gap-2 text-base font-medium text-secondary">
        <p>
          Read More
        </p>
        <ReadMoreIcon width={40} height={22}/>
      </button>
>>>>>>> Changed some css classes

    )
  }