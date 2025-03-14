const ContactForm = () => {
  return (
    <section
      className="bg-section-primary z-10 pt-24 pb-24 relative items-center justify-center"
      style={{ clipPath: "polygon(0 10%, 100% 0, 100% 100%, 0 100%)" }}
    >
      <div className="container mx-auto px-4 mt-20">
        <h2 className="text-sans text-4xl font-bold text-center">
          Skontaktuj się z nami
        </h2>
        <hr className="border-action-dark-blue border-t-3 mt-6 mb-10" />
        <form>
          <div className="grid md:grid-cols-2 gap-6">
            {/* First Name */}
            <div>
              <label className="block mb-2">
                Imię<span className="font-bold text-error">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full p-3 rounded bg-section-secondary border border-dark-border focus:border-action-blue focus:outline-none"
              />
            </div>
            {/* Last Name */}
            <div>
              <label className="block mb-2">
                Nazwisko<span className="font-bold text-error">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full p-3 rounded bg-section-secondary border border-dark-border focus:border-action-blue focus:outline-none"
              />
            </div>
            {/* Email */}
            <div className="md:col-span-2">
              <label className="block mb-2">
                Email<span className="font-bold text-error">*</span>
              </label>
              <input
                type="email"
                required
                className="w-full p-3 rounded bg-section-secondary border border-dark-border focus:border-action-blue focus:outline-none"
              />
            </div>
            {/* Phone */}
            <div className="md:col-span-2">
              <label className="block mb-2">Numer telefonu</label>
              <input
                type="tel"
                className="w-full p-3 rounded bg-section-secondary border border-dark-border focus:border-action-blue focus:outline-none"
              />
            </div>
            {/* Message */}
            <div className="md:col-span-2">
              <label className="block mb-2">
                Wiadomość<span className="font-bold text-error">*</span>
              </label>
              <textarea
                required
                rows={5}
                className="w-full p-3 rounded bg-section-secondary border border-dark-border focus:border-action-blue focus:outline-none"
              />
            </div>
            {/* Checkbox */}
            <div className="md:col-span-2 gap-3 flex items-center">
              <input
                type="checkbox"
                required
                className="w-4 h-4 rounded-full cursor-pointer checked:bg-action-blue
                         hover:transition-size duration-300 hover:scale-110"
              />
              <label>
                Zgadzam się, aby Koło Studentów Informatyki kontaktowało się ze
                mną używając wyżej podanych przeze Mnie środków kontaktu
              </label>
            </div>
            {/* Submit Button */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="bg-action-blue dark:bg-action-dark-blue text-white w-full py-3 rounded hover:bg-action-blue-secondary
                           hover:transition-size duration-300 hover:-translate-y-0.5 hover:text-dark-text-secondary"
              >
                Wyślij formularz
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
export default ContactForm;
