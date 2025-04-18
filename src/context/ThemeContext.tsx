import { createContext, useState, useContext, ReactNode } from "react";

type Lang = "pl" | "en";


interface ThemeContextType {
  isDarkMode: boolean;
  toggleMode: () => void;
  lang: Lang;
  toggleLang: () => void;
}

interface Props {
  children: ReactNode;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const initialTheme = (): boolean => {
  const savedTheme = localStorage.getItem("theme");
  return savedTheme ? savedTheme === "dark" : true;
};

const applyTheme = (isDark: boolean) => {
  if (isDark) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
};

const initialLang = (): Lang => {
  const savedLang = localStorage.getItem("lang");
  return savedLang === "pl" ? "pl" : "en";
}

export const ThemeProvider = ({ children }: Props) => {
  const [isDarkMode, setDarkMode] = useState(() => initialTheme());


  const toggleMode = () => {
    setDarkMode((mode) => {
      const newMode = !mode;
      applyTheme(newMode);
      return newMode;
    });
  };

  if (typeof window !== undefined) applyTheme(isDarkMode);

  const [lang, setLang] = useState<Lang>(() => initialLang());

  const toggleLang = () => {
    setLang((lang) => {
      const newLang = lang === "pl" ? "en" : "pl";
      localStorage.setItem("lang", newLang);
      return newLang;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleMode, lang, toggleLang }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};