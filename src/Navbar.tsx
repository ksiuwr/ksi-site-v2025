import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="bg-navbar-primary text-dark-text-primary py-4">
        <div className="grid grid-cols-[1fr_auto_1fr] px-4 items-center">
            <Link to="/" className="font-bold text-lg">KSI</Link>

            <div className="flex items-center space-x-4">
                <nav className="hidden md:flex space-x-6">
                    <Link to="/members" className="hover:opacity-80">Członkowie</Link>
                    <Link to="/projects" className="hover:opacity-80">Projekty</Link>
                    <Link to="/zosia" className="hover:opacity-80">ZOSIA</Link>
                    <Link to="/contact" className="hover:opacity-80">Kontakt</Link>
                </nav>
            </div>

            <button className="ml-auto hover:opacity-80">PL / EN</button>
        </div>
        </header>
    );
};
  
export default Navbar;