import { useTheme } from "../context/ThemeContext";
import sunIcon from "../assets/sun.svg";
import moonIcon from "../assets/moon.svg";

const ThemeToggle = () => {
  const { isDarkMode, toggleMode } = useTheme();

  return (
    <button
      onClick={toggleMode}
      className="m1-4 p-2 rounded-full hover:opacity-80"
    >
      <img
        src={isDarkMode ? sunIcon : moonIcon}
        alt={isDarkMode ? "Light mode" : "Dark mode"}
        className="w-6 h-6"
      />
    </button>
  );
};

export default ThemeToggle;
