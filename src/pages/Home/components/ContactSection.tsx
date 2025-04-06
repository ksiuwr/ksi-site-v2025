import Section from "./Section";

export const ContactSection = () => {
  return (

    <Section
        title="Skontatkuj się"
        description="Nasze koło zrzesza studentów informatyki, jak i tych, którzy już studia skończyli. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
        readMore="/contact"
        bgColor="dark-section-primary"
        contentPosition="right"
        idx={2}
    />
  );
};

export default ContactSection;