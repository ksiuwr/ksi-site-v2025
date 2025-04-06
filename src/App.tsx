import { Route, Routes } from "react-router";
import Navbar from "./components/layout/Navbar.tsx";
import Home from "./pages/Home/Home.tsx";
import Contact from "./pages/Contact/Contact.tsx";
import Members from "./pages/Members/Members.tsx";
import Zosia from "./pages/ZOSIA/Zosia.tsx";
import Footer from "./components/layout/Footer.tsx";
import useDocumentTitle from "./hooks/useDocumentTitle";
import Projects from "./pages/Projects/Projects.tsx";
import HoC from "./pages/HoC/HoC.tsx";

function HomePage() {
  useDocumentTitle("Koło Studentów Informatyki | KSI");
  return <Home />;
}

function MembersPage() {
  useDocumentTitle("Członkowie Koła | KSI");
  return <Members />;
}

function ContactPage() {
  useDocumentTitle("Kontakt | KSI");
  return <Contact />;
}

function ZosiaPage() {
  useDocumentTitle("Zosia | KSI");
  return <Zosia />;
}

function HoCPage() {
  useDocumentTitle("Hour of Code | KSI");
  return <HoC/>;
}

function ProjectsPage() {
  useDocumentTitle("Projekty | KSI");
  return <Projects />;
}

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/members" element={<MembersPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/zosia" element={<ZosiaPage />} />
        <Route path="/hoc" element={<HoCPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
