import { Hero } from "./components/Hero";
import { AssociationBoard } from "./components/AssociationBoard";
import { RegularMembers } from "./components/RegularMembers";

const Members = () => {
  return (
    <div className="min-h-screen bg-no-repeat bg-fixed bg-dark-background-primary text-dark-text-primary font-sans bg-cover"
      style={{
      backgroundImage: `url('/images/logo.png')`,
      backgroundPosition: '0% -7%'
      }}>

      <Hero/>
      <AssociationBoard/>
      <RegularMembers/>

      {/* footer divider
      <div className="bg-dark-background-primary min-h-[20vh] mt-[-20vh]"></div> */}

      {/* Footer */}
      <footer className="bg-footer-primary text-dark-text-secondary py-8">
        <div className="container mx-auto text-center">
          <p>Instytut Informatyki Uniwersytetu Wrocławskiego</p>
          <p>ul. Fryderyka Joliot-Curie 15, Wrocław, Sala 24</p>
          <p>ksi@cs.uni.wroc.pl</p>
          <p>© KSI</p>
        </div>
      </footer>
    </div>
    
    
  );
};

export default Members;