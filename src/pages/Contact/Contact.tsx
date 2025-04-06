import { useEffect, useRef } from "react";
import ContactForm from "./components/ContactForm";
import HeroSection from "../../components/common/HeroSection";
import BackgroundImage from "../../components/common/BackgroundImage";

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
    <div className="text-dark-text-primary min-h-screen bg-no-repeat
                    bg-fixed bg-cover overflow-x-hidden">
      <BackgroundImage />
      <div ref={heroRef}>
        <HeroSection header="Kontakt" subheader="Formularz kontaktowy" />
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
