import { Link } from "react-router";
import { useTheme } from "../../context/ThemeContext";

/**
 * A read more button component.
 *
 * @param {{ link: string, text: { pl: string, en: string } }} props
 * @prop {string} link The link to the page.
 * @prop {{ pl: string, en: string }} text The text to be displayed on the button.
 * @return {JSX.Element} The rendered button component.
 */
export default function ReadMoreBtn({ link, text }: { link: string, text: { pl: string; en: string }}) {
  const { lang } = useTheme();
  return (
    <Link to={link}>
      <button className="flex items-center gap-2 text-secondary">
        <p className="font-semibold text-sm md:text-base hover:underline">{ text[lang] }</p>
      </button>
    </Link>
  );
}
