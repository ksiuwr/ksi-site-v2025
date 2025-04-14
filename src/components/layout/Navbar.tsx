import { Link } from "react-router";
import ThemeToggle from "../common/ThemeToggle";
import routes from "../../routes/routes";
import { useState } from "react";

/**
 * Navigation bar component.
 *
 * Renders a navigation bar responsive to screen size.
 * On small screens, it renders a mobile-friendly menu with a button to toggle
 * the menu open/closed. On larger screens, it renders a horizontal navigation
 * bar with links to all the pages in the app.
 *
 * @return {JSX.Element} The navigation bar component.
 */
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /**
   * Toggles the menu open/closed for mobiles.
   *
   * @return {void} Does not return a value.
   */
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-navbar-primary text-dark-text-primary py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="flex flex-row font-bold text-lg items-center"
            >
              <img src="/images/logo_ksi.svg" alt="logo" className="h-8" />
              <span className="ml-2">KSI</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-6">
              {routes.map((item) => (
                <Link
                  to={item.link}
                  key={item.name}
                  className="hover:opacity-80"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

            <div className="m1-auto flex items-center">
                <button className="ml-auto hover:opacity-80">PL / EN</button>
                <ThemeToggle />
            </div>
        </div>
        </header>
    );
};
  
export default Navbar;
