import React from "react";
import { Route, Routes } from "react-router";
import Navbar from "./components/layout/Navbar.tsx";
import Home from "./pages/Home/Home.tsx";
import Contact from "./pages/Contact/Contact.tsx";
import Members from "./pages/Members/Members.tsx";
import Footer from "./components/layout/Footer.tsx";
import useDocumentTitle from "./hooks/useDocumentTitle";
        
        

function HomePage() {
  useDocumentTitle("Koło Studentów Informatyki | KSI");
  return <Home/>
}

function MembersPage() {
  useDocumentTitle("Członkowie Koła | KSI");
  return <Members />;
}

function ContactPage() {
  useDocumentTitle("Kontakt | KSI");
  return <Contact />;
}        


export default function App() {
    return (
    <div>
        <Navbar/>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/members" element={<MembersPage />} />
            <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer/>
    </div>
    );
  }
