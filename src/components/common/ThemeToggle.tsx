import { useTheme } from "../../context/ThemeContext";
import { SunIcon, MoonIcon } from "../common/icons/Icons";

const ThemeToggle = () => {
  const { isDarkMode, toggleMode } = useTheme();

  return (
    <button
      onClick={toggleMode}
      className="m1-4 p-2 rounded-full hover:opacity-80"
    >
      { isDarkMode ? <SunIcon /> : <MoonIcon /> }
    </button>
  );
};

export default ThemeToggle;
