import Section from "./Section";

export const Contact = () => {
  return (

    <Section
        title="Skontatkuj się"
        description="Nasze koło zrzesza studentów informatyki, jak i tych, którzy już studia skończyli. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
        readMore="/contact"
        backgroundStyle={{
        color: 'bg-dark-section-primary',
        skewAngle: -6,
      
        }}
    />
  );
};

export default Contact;