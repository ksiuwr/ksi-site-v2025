import { AssociationBoard } from "./components/AssociationBoard";
import { RegularMembers } from "./components/RegularMembers";
import BackgroundImage from "../../components/common/BackgroundImage";
import HeroSection from "../../components/common/HeroSection";

const Members = () => {
  return (
    <div className="min-h-screen bg-no-repeat bg-fixed text-dark-text-primary font-sans bg-cover">
      <BackgroundImage />
      <HeroSection header="Członkowie koła" subheader="KSI" />
      <AssociationBoard />
      <RegularMembers />
    </div>
  );
};

export default Members;
