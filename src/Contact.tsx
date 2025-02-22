const Contact = () => {
    return (
      <div className="min-h-screen bg-no-repeat bg-fixed bg-dark-background-primary text-dark-text-primary font-sans bg-cover">
        {/* Hero Section */}
        <div className="text-center min-h-[90vh]">
          <div className="absolute container ml-[13vw] mt-[37vh]">
            <h1 className="text-dark-text-prime text-5xl font-bold text-left">Kontakt</h1>
            <p className="text-dark-text-secondary text-2xl text-left mt-[14px]">Skontaktuj się z nami</p>
            <hr className="border-action-blue border-t-2 mr-[198px] mt-[14px]"/>
          </div>
        </div>
  
        {/* Contact Form Section */}
        <section className="bg-dark-section-primary z-10 pt-24 pb-36 relative items-center justify-center"
          style={{clipPath: 'polygon(0 10%, 100% 0, 100% 90%, 0 100%)'}}>
          
          <div className="mx-[13vw] mt-[4vw]">
            <h2 className="text-sans text-4xl font-bold">Formularz kontaktowy</h2>
            <hr className="border-action-blue border-t-2 mt-2 mr-[45vw] mb-8"/>
  
            <form className="max-w-3xl">
              <div className="grid md:grid-cols-2 gap-6">
                {/* First Name */}
                <div>
                  <label className="block mb-2">Imię *</label>
                  <input 
                    type="text" 
                    required
                    className="w-full p-3 rounded bg-dark-section-secondary border border-dark-border focus:border-action-blue focus:outline-none"
                  />
                </div>
  
                {/* Last Name */}
                <div>
                  <label className="block mb-2">Nazwisko *</label>
                  <input 
                    type="text" 
                    required
                    className="w-full p-3 rounded bg-dark-section-secondary border border-dark-border focus:border-action-blue focus:outline-none"
                  />
                </div>
  
                {/* Email */}
                <div className="md:col-span-2">
                  <label className="block mb-2">Email *</label>
                  <input 
                    type="email" 
                    required
                    className="w-full p-3 rounded bg-dark-section-secondary border border-dark-border focus:border-action-blue focus:outline-none"
                  />
                </div>
  
                {/* Phone */}
                <div className="md:col-span-2">
                  <label className="block mb-2">Numer telefonu</label>
                  <input 
                    type="tel" 
                    className="w-full p-3 rounded bg-dark-section-secondary border border-dark-border focus:border-action-blue focus:outline-none"
                  />
                </div>
  
                {/* Message */}
                <div className="md:col-span-2">
                  <label className="block mb-2">Wiadomość *</label>
                  <textarea 
                    required
                    rows={5}
                    className="w-full p-3 rounded bg-dark-section-secondary border border-dark-border focus:border-action-blue focus:outline-none"
                  />
                </div>
  
                {/* Checkbox */}
                <div className="md:col-span-2 flex items-center">
                  <input 
                    type="checkbox" 
                    required
                    className="w-4 h-4 mr-2 accent-action-blue"
                  />
                  <label>Akceptuję tę formę komunikacji *</label>
                </div>
  
                {/* Submit Button */}
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="bg-action-blue text-white px-8 py-3 rounded hover:bg-action-blue-dark transition-colors"
                  >
                    Wyślij
                  </button>
                </div>
              </div>
            </form>
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
  
  export default Contact;