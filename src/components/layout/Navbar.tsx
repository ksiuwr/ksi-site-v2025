import { Link } from "react-router";
import routes from "./routes/routes";

function Navbar() {
  return (
    <header className="bg-navbar-primary text-dark-text-primary py-4">
      <div className="grid grid-cols-[1fr_auto_1fr] px-4 items-center">
        <div className="flex items-center">
          <Link to="/" className="flex flex-row font-bold text-lg items-center">
            <img src="/images/logo_ksi.svg" alt="logo" className="" />
            <span className="ml-2">KSI</span>
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <nav className="md:flex space-x-6">
            {routes.map((item) => (
              <Link to={item.link} key={item.name} className="hover:opacity-80">
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="m1-auto flex items-center">
          <button className="ml-auto hover:opacity-80">PL / EN</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;