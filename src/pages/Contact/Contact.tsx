import { useEffect, useRef } from "react";
import ContactForm from "./components/ContactForm";
import HeroSection from "../../components/HeroSection";
import BackgroundImage from "../../components/BackgroundImage";

const Contact = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.style.transform = "translateX(-80vw)";
      heroRef.current.style.transition = "transform 1.5s ease-out";
      setTimeout(() => {
        if (heroRef.current) {
          heroRef.current.style.transform = "translateX(0)";
        }
      }, 0);
    }
  }, []);

  return (
    <div className="min-h-screen bg-no-repeat bg-fixed text-dark-text-primary font-sans bg-cover">
      <BackgroundImage />
      <HeroSection header="Kontakt" subheader="Formularz kontaktowy" />
      <ContactForm />
    </div>
  );
};

export default Contact;
