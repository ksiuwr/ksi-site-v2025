import { Link } from "react-router";

/**
 * A read more button component.
 *
 * @param {{ link: string, text: string }} props
 * @prop {string} link The link to the page.
 * @prop {string} text The text to be displayed on the button.
 * @return {JSX.Element} The rendered button component.
 */
export default function ReadMoreBtn({ link, text }: { link: string, text: string}) {
  return (
    <Link to={link}>
      <button className="flex items-center gap-2 text-secondary">
        <p className="font-semibold text-sm md:text-base hover:underline">{ text }</p>
      </button>
    </Link>
  );
}
