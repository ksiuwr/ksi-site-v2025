import { Hero } from "./components/Hero";
import { AssociationBoard } from "./components/AssociationBoard";
import { RegularMembers } from "./components/RegularMembers";
import BackgroundImage from "../../components/BackgroundImage";

const Members = () => {
  return (
    <div className="min-h-screen bg-no-repeat bg-fixed text-dark-text-primary font-sans bg-cover">
      <BackgroundImage/>
      <Hero/>
      <AssociationBoard/>
      <RegularMembers/>
    </div>
    
    
  );
};

export default Members;