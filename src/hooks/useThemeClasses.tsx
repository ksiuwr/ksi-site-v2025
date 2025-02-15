import { useTheme } from "../context/ThemeContext";

export const useThemeClasses = () => {
    const { isDarkMode } = useTheme();

    return {
        textPrimary: isDarkMode ? 'text-dark-text-primary' : 'text-light-text-primary',
        textSecondary: isDarkMode ? 'text-dark-text-secondary' : 'text-light-text-secondary',
        background: isDarkMode ? 'bg-dark-background-primary' : 'bg-light-background-primary',
        sectionPrimary: isDarkMode ? 'bg-dark-section-primary' : 'bg-light-section-primary',
        sectionSecondary: isDarkMode ? 'bg-dark-section-secondary' : 'bg-light-section-secondary'
    }
}