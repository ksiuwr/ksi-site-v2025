import { useState } from "react";

/**
 * Formularz kontaktowy.
 *
 * Renderuje formularz kontaktowy z polem na imię, nazwisko, email, numer
 * telefonu, wiadomość i zgodę na kontakt.
 *
 * @return {JSX.Element} Komponent formularza kontaktowego.
 */
const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  /**
   * Handles form submission.
   *
   * Prevents the default form submission behavior and logs a message to the
   * console. To be replaced with actual form submission logic.
   *
   * @param {React.FormEvent} e - The form event.
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    // TODO: Add form submission logic
    console.log("Form submitted");
  };

  return (
    <section
      className="bg-dark-section-primary relative items-center justify-center
                   z-10 pt-16 pb-16 sm:pt-20 md:pt-24 sm:pb-20 md:pb-24 "
      style={{ clipPath: "polygon(0 5%, 100% 0, 100% 100%, 0 100%)" }}
    >
      <div className="container mx-auto px-4 sm:px-6 mt-12 sm:mt-16 md:mt-20 max-w-4xl">
        <h2 className="text-sans text-3xl sm:text-4xl font-bold text-center">
          Skontaktuj się z nami
        </h2>
        <hr
          className="border-action-dark-blue border-t-3 mt-4
                        sm:mt-6 mb-6 sm:mb-10 mx-auto w-3/4 sm:w-1/2"
        />
        <form onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            {/* First Name */}
            <div>
              <label className="block mb-2 text-sm sm:text-base">
                Imię<span className="font-bold text-error">*</span>
              </label>
              <input
                type="text"
                required
                disabled={isSubmitted}
                className="w-full p-2 sm:p-3 rounded bg-dark-section-secondary border border-dark-border
                         focus:border-action-blue focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed"
              />
            </div>
            {/* Last Name */}
            <div>
              <label className="block mb-2 text-sm sm:text-base">
                Nazwisko<span className="font-bold text-error">*</span>
              </label>
              <input
                type="text"
                required
                disabled={isSubmitted}
                className="w-full p-2 sm:p-3 rounded bg-dark-section-secondary border border-dark-border
                           focus:border-action-blue focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed"
              />
            </div>
            {/* Email */}
            <div className="md:col-span-2">
              <label className="block mb-2 text-sm sm:text-base">
                Email<span className="font-bold text-error">*</span>
              </label>
              <input
                type="email"
                required
                disabled={isSubmitted}
                className="w-full p-2 sm:p-3 rounded bg-dark-section-secondary border border-dark-border
                          focus:border-action-blue focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed"
              />
            </div>
            {/* Phone */}
            <div className="md:col-span-2">
              <label className="block mb-2 text-sm sm:text-base">
                Numer telefonu
              </label>
              <input
                type="tel"
                disabled={isSubmitted}
                className="w-full p-2 sm:p-3 rounded bg-dark-section-secondary border border-dark-border
                          focus:border-action-blue focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed"
              />
            </div>
            {/* Message */}
            <div className="md:col-span-2">
              <label className="block mb-2 text-sm sm:text-base">
                Wiadomość<span className="font-bold text-error">*</span>
              </label>
              <textarea
                required
                disabled={isSubmitted}
                rows={5}
                className="w-full p-2 sm:p-3 rounded bg-dark-section-secondary border border-dark-border
                          focus:border-action-blue focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed"
              />
            </div>
            {/* Checkbox */}
            <div className="md:col-span-2 gap-2 sm:gap-3 flex items-start sm:items-center">
              <input
                type="checkbox"
                required
                disabled={isSubmitted}
                className="w-4 h-4 mt-1 sm:mt-0 rounded-full cursor-pointer checked:bg-action-blue
                         hover:transition-size duration-300 hover:scale-110 disabled:opacity-60 disabled:cursor-not-allowed"
              />
              <label className="text-sm sm:text-base">
                Zgadzam się, aby Koło Studentów Informatyki kontaktowało się ze
                mną używając wyżej podanych przeze Mnie środków kontaktu
              </label>
            </div>
            {/* Submit Button */}
            <div className="md:col-span-2 mt-4">
              <button
                type="submit"
                className={`bg-action-dark-blue w-full py-2 sm:py-3 rounded transition-all duration-300 font-medium touch-manipulation
                  ${
                    isSubmitted
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-action-blue-secondary hover:-translate-y-0.5"
                  }`}
                onClick={(e) => e.currentTarget.blur()}
                disabled={isSubmitted}
              >
                {isSubmitted ? "Formularz wysłany" : "Wyślij formularz"}
              </button>
            </div>
          </div>
        </form>

        {/* Success Message */}
        {isSubmitted && (
          <div className="mt-8 p-4 border-l-4 rounded">
            <p className="font-medium">
              Dziękujemy za wiadomość! Odpowiemy najszybciej jak to możliwe.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
export default ContactForm;
