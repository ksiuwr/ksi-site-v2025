import { useTheme } from "../../context/ThemeContext";

const LangToggle = () => {
  const { lang, toggleLang } = useTheme();

  return (
      <button
      onClick={toggleLang}
      className="md:m1-4 pt-2 md:p-2 rounded-full hover:opacity-80 text-dark-text-primary"
      >
      { lang === 'pl' ? 'EN' : 'PL' }
      </button>
  );
};

export default LangToggle;