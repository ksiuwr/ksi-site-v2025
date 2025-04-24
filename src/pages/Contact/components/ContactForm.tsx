import { useForm } from "react-hook-form";
import { useTheme } from "../../../context/ThemeContext";
import { useState } from "react";

/**
 * Formularz kontaktowy.
 *
 * Renderuje formularz kontaktowy z polem na imię, nazwisko, email, numer
 * telefonu, wiadomość i zgodę na kontakt.
 *
 * @return {JSX.Element} Komponent formularza kontaktowego.
 */
function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /**
   * Handles form submission.
   *
   * @param data - form data
   */
  const onSubmit = (data: unknown) => {
    console.log("Form data:", data);
    // further processing of form data
    setIsSubmitted(true);
  };

  const { lang } = useTheme();

  return (
    <section
      className="bg-section-primary relative items-center justify-center
                   z-10 pt-16 pb-16 sm:pt-20 sm:pb-20 md:pb-24 "
      style={{ clipPath: "polygon(0 5%, 100% 0, 100% 100%, 0 100%)" }}
    >
      <div className="container mx-auto px-4 sm:px-6 mt-12 sm:mt-16 md:mt-20 max-w-4xl">
        <h2 className="text-sans text-3xl sm:text-4xl font-bold text-center">
          {lang === "pl" ? "Skontaktuj się z nami" : "Contact us"}
        </h2>
        <hr
          className="border-action-dark-blue border-t-3 mt-4
                        sm:mt-6 mb-6 sm:mb-10 mx-auto w-3/4 sm:w-1/2"
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            {/* First Name */}
            <div>
              <label className="block mb-2 text-sm sm:text-base">
                {lang === "pl" ? "Imię" : "Name"}
                <span className="font-bold text-error">*</span>
              </label>
              <input
                {...register("firstName", {
                  required:
                    lang === "pl" ? "Imię jest wymagane" : "Name is required",
                })}
                disabled={isSubmitted}
                className="w-full p-2 sm:p-3 rounded bg-section-secondary border border-dark-border
                         focus:border-action-blue focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed"
              />
              {errors.firstName && (
                <p className="text-error text-sm">
                  {errors.firstName.message?.toString()}
                </p>
              )}
            </div>
            {/* Last Name */}
            <div>
              <label className="block mb-2 text-sm sm:text-base">
                {lang === "pl" ? "Nazwisko" : "Surname"}
                <span className="font-bold text-error">*</span>
              </label>
              <input
                {...register("lastName", {
                  required:
                    lang === "pl"
                      ? "Nazwisko jest wymagane"
                      : "Surname is required",
                })}
                disabled={isSubmitted}
                className="w-full p-2 sm:p-3 rounded bg-section-secondary border border-dark-border
                           focus:border-action-blue focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed"
              />
              {errors.lastName && (
                <p className="text-error text-sm">
                  {errors.lastName.message?.toString()}
                </p>
              )}
            </div>
            {/* Email */}
            <div className="md:col-span-2">
              <label className="block mb-2 text-sm sm:text-base">
                E-mail<span className="font-bold text-error">*</span>
              </label>
              <input
                type="email"
                {...register("email", {
                  required:
                    lang === "pl"
                      ? "Adres e-mail jest wymagany"
                      : "E-mail adress is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message:
                      lang === "pl"
                        ? "Podaj poprawny adres e-mail"
                        : "Provide a valid e-mail address",
                  },
                })}
                disabled={isSubmitted}
                className="w-full p-2 sm:p-3 rounded bg-section-secondary border border-dark-border
                          focus:border-action-blue focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed"
              />
              {errors.email && (
                <p className="text-error text-sm">
                  {errors.email.message?.toString()}
                </p>
              )}
            </div>
            {/* Phone */}
            <div className="md:col-span-2">
              <label className="block mb-2 text-sm sm:text-base">
                {lang === "pl" ? "Numer telefonu" : "Phone number"}
              </label>
              <input
                type="tel"
                {...register("tel", {
                  pattern: {
                    value: /^\+?[0-9\s-]{7,15}$/,
                    message:
                      lang === "pl"
                        ? "Podaj poprawny numer telefonu"
                        : "Please provide a valid phone number",
                  },
                })}
                disabled={isSubmitted}
                className="w-full p-2 sm:p-3 rounded bg-section-secondary border border-dark-border
                          focus:border-action-blue focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed"
              />
              {errors.tel && (
                <p className="text-error text-sm md:col-span-2">
                  {errors.tel.message?.toString()}
                </p>
              )}
            </div>
            {/* Message */}
            <div className="md:col-span-2">
              <label className="block mb-2 text-sm sm:text-base">
                {lang === "pl" ? "Wiadomość" : "Message"}
                <span className="font-bold text-error">*</span>
              </label>
              <textarea
                {...register("message", {
                  required:
                    lang === "pl"
                      ? "Wiadomosc jest wymagana"
                      : "Message is required",
                })}
                disabled={isSubmitted}
                rows={5}
                className="w-full p-2 sm:p-3 rounded bg-section-secondary border border-dark-border
                          focus:border-action-blue focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed"
              />
              {errors.message && (
                <p className="text-error text-sm">
                  {errors.message.message?.toString()}
                </p>
              )}
            </div>
            {/* Checkbox */}
            <div className="md:col-span-2 gap-2 sm:gap-3 flex items-start sm:items-center">
              <input
                type="checkbox"
                {...register("consent", {
                  required:
                    lang === "pl"
                      ? "Zgoda jest wymagana"
                      : "Consent is required",
                })}
                disabled={isSubmitted}
                className="w-4 h-4 self-center sm:mt-0 rounded-full cursor-pointer checked:bg-action-blue
                         hover:transition-size duration-300 hover:scale-110 disabled:opacity-60 disabled:cursor-not-allowed"
              />
              <label className="text-sm sm:text-base">
                {lang === "pl"
                  ? "Zgadzam się, aby Koło Studentów Informatyki kontaktowało się ze mną używając wyżej podanych przeze Mnie środków kontaktu."
                  : "I consent to the Computer Science Students Association contacting me by the means I provided above."}
              </label>
            </div>
            {errors.consent && (
              <p className="text-error text-sm md:col-span-2">
                {errors.consent.message?.toString()}
              </p>
            )}
            {/* Submit Button */}
            <div className="md:col-span-2 mt-4 text-dark-text-primary">
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
                {isSubmitted
                  ? lang === "pl"
                    ? "Formularz wysłany"
                    : "Form sent"
                  : lang === "pl"
                  ? "Wyślij formularz"
                  : "Send form"}
              </button>
            </div>
          </div>
        </form>

        {/* Success Message */}
        {isSubmitted && (
          <div className="mt-8 p-4 border-l-4 rounded">
            <p className="font-medium">
              {lang === "pl"
                ? "Dziękujemy za wiadomość! Odpowiemy najszybciej jak to możliwe."
                : "Thanks for the message! We will get back to you ASAP."}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
export default ContactForm;
