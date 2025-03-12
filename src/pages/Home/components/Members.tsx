import Section from "./Section";

export const Members = () => {
  return (

    <Section
        title="Członkowie"
        description="Nasze koło zrzesza studentów informatyki, jak i tych, którzy już studia skończyli. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        readMore="/members"
        backgroundStyle={{
        color: 'bg-section-primary',
        skewAngle: -3,
        }}
    />
  );
};

export default Members;