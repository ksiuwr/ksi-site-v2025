import { Link } from "react-router";

export default function ReadMoreBtn({ link, text }: { link: string, text: string}) {
  return (
    <Link to={link}>
      <button className="flex items-center gap-2 text-dark-text-secondary">
        <p className="font-semibold text-sm md:text-base hover:underline">{ text }</p>
      </button>
    </Link>
  );
}
