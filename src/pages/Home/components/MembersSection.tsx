import Section from "./Section";

export const MembersSection = () => {
  return (
    <Section
      title="Członkowie"
      description="Nasze koło zrzesza studentów informatyki, jak i tych, którzy już studia skończyli. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
      readMore="/members"
      bgColor="dark-section-primary"
      contentPosition="right"
      idx={0}
    />
  );
};

export default MembersSection;
