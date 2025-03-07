export const Footer = () => {
    return (
      <footer className="relative flex px-[128px] gap-4 min-h-[275px] justify-center flex-col bg-footer-primary text-sm text-dark-text-primary font-semibold w-full">  
        <address className="flex max-w-full flex-col not-italic">
          <span>Instytut Informatyki Uniwersytetu Wrocławskiego</span>
          <br />
          <span>ul. Fryderyka Joliot-Curie 15, Wrocław, Sala 24</span>
        </address>
        <div className="whitespace-nowrap">
          <a href="mailto:ksi@cs.uni.wroc.pl" className="hover:underline">
            ksi@cs.uni.wroc.pl
          </a>
        </div>
  
        <div>
          <span>©</span>
          <span>KSI</span>
        </div>
      </footer>
  
    );
  
  };