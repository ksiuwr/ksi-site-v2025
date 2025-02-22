import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { isDarkMode, toggleMode } = useTheme();

  return (
    <button
      onClick={toggleMode}
      className="m1-4 p-2 rounded-full hover:opacity-80"
    >
      {isDarkMode ? "☀️" : "🌙"}
    </button>
  );
};

export default ThemeToggle;
