import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import Members from './pages/Members/Members';
import Home from './pages/Home/Home';

function App() {
    return (
        <div>
            <Router>
                <Navbar/>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/members" element={<Members />} />
                </Routes>
            </Router>
            <Footer/>
        </div>
    );
}

export default App;