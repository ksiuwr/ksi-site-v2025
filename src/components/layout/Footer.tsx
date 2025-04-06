/**
 * Footer component.
 *
 * Renders the footer of the app with the contact information.
 *
 * @return {JSX.Element} The footer component.
 */
const Footer = () => {
  return (
    <footer className="bg-footer-primary text-dark-text-secondary relative py-8 z-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="font-medium text-sm md:text-base">
              Instytut Informatyki Uniwersytetu Wrocławskiego
            </p>
            <p className="text-sm md:text-base mt-1">
              ul. Fryderyka Joliot-Curie 15, Wrocław, Sala 24
            </p>
          </div>

          <div className="text-center md:text-right">
            <a
              href="mailto:ksi@cs.uni.wroc.pl"
              className="text-sm md:text-base hover:underline transition-all duration-200"
            >
              ksi@cs.uni.wroc.pl
            </a>
            <p className="text-sm mt-1">© KSI {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
