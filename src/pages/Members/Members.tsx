import { AssociationBoard } from "./components/AssociationBoard";
import { RegularMembers } from "./components/RegularMembers";
import BackgroundImage from "../../components/common/BackgroundImage";
import HeroSection from "../../components/common/HeroSection";

/**
 * Page displaying the members of the KSI circle.
 *
 * The page renders a hero section with a background image, the association board
 * section, and the regular members section.
 *
 * @return {JSX.Element} The members page.
 */
const Members = () => {
  return (
    <div className="min-h-screen bg-no-repeat bg-fixed text-primary font-sans bg-cover">
      <BackgroundImage />
      <HeroSection header={{ pl: "Członkowie koła", en: "Association members" }} subheader={{ pl: "KSI", en: "KSI" }} />
      <AssociationBoard />
      <RegularMembers />
    </div>
  );
};

export default Members;
