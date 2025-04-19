import ContactForm from "./components/ContactForm";
import HeroSection from "../../components/common/HeroSection";
import BackgroundImage from "../../components/common/BackgroundImage";

/**
 * Page displaying the contact form and a hero section with a background image.
 *
 * The hero section is initially translated to the left and then translated
 * back to its original position after a short delay, creating a slide-in effect.
 *
 * @return {JSX.Element} The contact page.
 */
const Contact = () => {

  return (
    <div
      className="text-primary min-h-screen bg-no-repeat
                    bg-fixed bg-cover overflow-x-hidden"
    >
      <BackgroundImage />
      <div>
        <HeroSection header={{ pl: "Kontakt", en: "Contact" }} subheader={{ pl: "Formularz kontaktowy", en: "Contact form" }} />
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
