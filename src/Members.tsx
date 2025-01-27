import React from 'react';

// const Members: React.FC = () => {
//     return (
//         <div>
//             <div className="text-center">
//                 <h1>Navbar</h1>
//             </div>
//             <div
//                 className="relative bg-dark-background-primary min-h-screen bg-cover bg-top"
//                 style={{
//                     backgroundImage: `url('/public/images/logo.png')`,
//                 }}
//             >   
//                 <div className="relative text-left pt-60 text-dark-text-primary h-full">
//                     <h1 className="font-sans ">Członkowie koła</h1>
//                     <p className="font-sans">koło ma środek i promień</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

//import React from 'react';

const Members = () => {
  return (
    <div className="bg-dark-background-primary text-dark-text-primary font-sans">
      {/* Navbar */}
      <header className="bg-navbar-primary text-dark-text-primary py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center space-x-4">
            <span className="font-bold text-lg">KSI</span>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="hover:underline">Członkowie</a>
              <a href="#" className="hover:underline">Projekty</a>
              <a href="#" className="hover:underline">ZOSIA</a>
              <a href="#" className="hover:underline">Kontakt</a>
            </nav>
          </div>
          <div className="space-x-4">
            <button className="hover:underline">PL / EN</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="text-center py-12 bg-cover min-h-screen"
        style={{
                backgroundImage: `url('/images/logo.png')`,
                }}>
        <div className="container ml-[13vw]">
          <h1 className="text-dark-text-prime text-5xl font-bold text-left mt-[220px]">Członkowie koła</h1>
          <p className="text-dark-text-secondary text-2xl  text-left mt-[14px]">Koło ma środek i promień</p>
          <hr className="border-action-blue border-t-2 mr-[198px] mt-[14px]"/>
        </div>
      </div>

      {/* Zarząd Koła Section */}
      <div className="bg-dark-section-primary mt-[-40px] z-10 relative py-12 pb-36 items-center justify-center"
      style={{clipPath: 'polygon(0 5%, 100% 0, 100% 90%, 0 95%)'}}>
        <h2 className="text-sans text-4xl font-bold ml-[13vw] mt-[4vw]">Zarząd koła</h2>
        <hr className="border-action-blue border-t-2 mt-2 ml-[13vw] mr-[45vw]" style={{marginTop: '14px'}}/>

          
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8 mx-[13vw] pt-10">
            {/* Przewodniczący */}
            <div className="flex flex-row items-center gap-8 mt-[3vw]">
              <div className='flex flex-col'>
                <h3 className="font-bold mb-2">Przewodniczący</h3>
                <p className="text-dark-text-secondary mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
              </div>
              
              <div>
                <img src="/images/placeholder.webp" alt="Przwodniczacy" className="rounded-lg w-[210px] aspect-square object-cover"/>
              </div>
            </div>

            {/* Wiceprzewodniczący */}
            <div className='flex flex-row items-center gap-8'>
              <div>
                  <img src="/images/placeholder.webp" alt="Wicerzwodniczacy" className="rounded-lg w-[210px] aspect-square object-cover"/>
              </div>

              <div className='flex flex-col'>
                <h3 className="font-bold mb-2">Wicerzewodniczący</h3>
                <p className="text-dark-text-secondary mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
              </div>
            </div>

            {/* Sekretarz */}
            <div className="flex flex-row items-center gap-8 mt-[3vw]">
              <div className='flex flex-col'>
                <h3 className="font-bold mb-2">Sekretarz</h3>
                <p className="text-dark-text-secondary mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
              </div>

              <div>
                <img src="/images/placeholder.webp" alt="Wicerzwodniczacy" className="rounded-lg w-[210px] aspect-square object-cover"/>
            </div>
            </div>

            {/* Sekretarz */}
            <div className='flex flex-row items-center gap-8'>
              <div>
                  <img src="/images/placeholder.webp" alt="Wicerzwodniczacy" className="rounded-lg w-[210px] aspect-square object-cover"/>
              </div>

              <div className='flex flex-col'>
                <h3 className="font-bold mb-2">Sekretarz</h3>
                <p className="text-dark-text-secondary mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
              </div>
            </div>
          </div>
        
      </div>

      {/* Członkowie Section */}
      <section className="py-12 bg-dark-section-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Członkowie</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {Array(8).fill(0).map((_, index) => (
              <div key={index} className="bg-dark-section-secondary p-4 rounded text-center">
                <div className="bg-gray-400 w-24 h-24 mx-auto rounded-full mb-4"></div>
                <p className="font-bold">imię nazwisko</p>
                <p className="text-dark-text-secondary">moj.to.email@gmail.com</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

