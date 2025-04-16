import { useTheme } from "../../context/ThemeContext";
import SunIcon from "../../assets/SunIcon.svg"
import MoonIcon from "../../assets/MoonIcon.svg"

const ThemeToggle = () => {
  const { isDarkMode, toggleMode } = useTheme();

  return (
    <button
      onClick={toggleMode}
      className="md:m1-4 pt-2 md:p-2 rounded-full hover:opacity-80"
    >
      { isDarkMode ? <img src={SunIcon}/> : <img src={MoonIcon}/>}
    </button>
  );
};

export default ThemeToggle;