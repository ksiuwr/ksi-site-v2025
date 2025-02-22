import React from "react";
import { Route, Routes } from "react-router";
import Navbar from "./components/layout/Navbar.tsx";
import Home from './pages/Home/Home.tsx';
import { Footer } from "./components/layout/Footer.tsx";

export default function App() {
    return (
    <div className="bg-dark-background-primary min-h-screen">
        <Navbar/>
        <Routes>
            <Route index element={<Home />} />
            {/* <Route path="about" element={<About />} /> */}

            {/* <Route element={<AuthLayout />}>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Route>

            <Route path="concerts">
                <Route index element={<ConcertsHome />} />
                <Route path=":city" element={<City />} />
                <Route path="trending" element={<Trending />} />
            </Route> */}
        </Routes>
        <Footer/>
    </div>
    );
  }