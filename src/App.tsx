import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Members from "./Members";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import useDocumentTitle from "./hooks/useDocumentTitle";

function Home() {
  useDocumentTitle("Koło Studentów Informatyki | KSI");
  return <h1 className="text-4xl sans">Koło Studentów Informatyki</h1>;
}

function MembersPage() {
  useDocumentTitle("Członkowie Koła | KSI");
  return <Members />;
}

function ContactPage() {
  useDocumentTitle("Kontakt | KSI");
  return <Contact />;
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<MembersPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
