const Members = () => {
  return (
    <div className="min-h-screen bg-no-repeat bg-fixed background text-primary font-sans bg-cover"
      style={{
      backgroundImage: `url('/images/logo.png')`,
      backgroundPosition: '0% -7%'
      }}>

      {/* Hero Section */}
      <div className="text-center min-h-[90vh]">
          <div className=" absolute container ml-[13vw] mt-[37vh]">
            <h1 className="text-primary text-5xl font-bold text-left">Członkowie koła</h1>
            <p className="text-secondary text-2xl  text-left mt-[14px]">Koło ma środek i promień</p>
            <hr className="border-action-blue border-t-2 mr-[198px] mt-[14px]"/>
          </div>
      </div>

      {/* Zarząd Koła Section */}
      <section className="bg-section-primary z-10 pt-24 pb-36 relative items-center justify-center"
          style={{clipPath: 'polygon(0 10%, 100% 0, 100% 90%, 0 100%)'}}>
          <h2 className="text-sans text-4xl font-bold ml-[13vw] mt-[4vw]">Zarząd koła</h2>
          <hr className="border-action-blue border-t-2 mt-2 ml-[13vw] mr-[45vw]"/>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-14 mx-[13vw] pt-10">
              {/* Przewodniczący */}
              <div className="flex flex-row items-center gap-8 mt-[3vw]">
                <div className='flex flex-col'>
                  <h3 className="font-bold mb-2">Przewodniczący</h3>
                  <hr className="border-action-blue border-t-2 mb-6 mr-24"/>
                  <p className="text-secondary mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                </div>
                
                <div>
                  <img src="/images/placeholder.webp" alt="Przwodniczacy" className="rounded-lg min-w-[210px] aspect-square object-cover"/>
                </div>
              </div>

              {/* Wiceprzewodniczący */}
              <div className='flex flex-row items-center gap-8'>
                <div>
                    <img src="/images/placeholder.webp" alt="Wicerzwodniczacy" className="rounded-lg min-w-[210px] aspect-square object-cover"/>
                </div>

                <div className='flex flex-col'>
                  <h3 className="font-bold mb-2">Wiceprzewodniczący</h3>
                  <hr className="border-action-blue border-t-2 mb-6 mr-24"/>
                  <p className="text-secondary mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                </div>
              </div>

              {/* Sekretarz */}
              <div className="flex flex-row items-center gap-8">
                <div className='flex flex-col'>
                  <h3 className="font-bold mb-2">Sekretarz</h3>
                  <hr className="border-action-blue border-t-2 mb-6 mr-24"/>
                  <p className="text-secondary mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                </div>

                <div>
                  <img src="/images/placeholder.webp" alt="Wicerzwodniczacy" className="rounded-lg min-w-[210px] aspect-square object-cover"/>
              </div>
              </div>

              {/* Sekretarz */}
              <div className='flex flex-row items-center gap-8 mt-[-3vw]'>
                <div>
                    <img src="/images/placeholder.webp" alt="Wicerzwodniczacy" className="rounded-lg min-w-[210px] aspect-square object-cover"/>
                </div>

                <div className='flex flex-col'>
                  <h3 className="font-bold mb-2">Sekretarz</h3>
                  <hr className="border-action-blue border-t-2 mb-6 mr-24"/>
                  <p className="text-secondary mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                </div>
              </div>
            </div>
      </section>

      {/* Członkowie Section */}
      <section className="bg-section-secondary z-20 pt-24 pb-36 mt-[-14vh] items-center justify-center"
          style={{clipPath: 'polygon(0 2%, 100% 0, 100% 97%, 0 100%)'}}>
          <h2 className="text-primary text-sans text-4xl font-bold ml-[13vw] mt-[4vw]">Członkowie</h2>
          <hr className="border-action-blue border-t-2 mt-2 ml-[13vw] mr-[45vw]"/>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-20">
              {Array(50).fill(0).map((_, index) => (
                <div key={index} className="bg-section-primary pt-10 pb-4 rounded-md text-center">
                  <div className="w-16 h-24 mx-auto rounded-full mb-4"></div>
                  <p className="text-primary font-bold">imię nazwisko</p>
                  <p className="text-secondary">moj.email@gmail.com</p>
                </div>
              ))}
            </div>
          </div>
      </section>

      {/* footer divider */}
      <div className="background min-h-[20vh] mt-[-20vh]"></div>

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