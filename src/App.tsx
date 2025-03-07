import React from "react";
import { Route, Routes } from "react-router";
import Navbar from "./components/layout/Navbar.tsx";
import Home from './pages/Home/Home.tsx';
import Contact from "./pages/Contact";  
import { Footer } from "./components/layout/Footer.tsx";
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


export default function App() {
    return (
    <div className="bg-dark-background-primary min-h-screen">
        <Navbar/>
        <Routes>
            <Routes>
            <Route path="/" element={<Home />} />
<!--             <Route path="/members" element={<MembersPage />} /> -->
            <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer/>
    </div>
    );
  }
