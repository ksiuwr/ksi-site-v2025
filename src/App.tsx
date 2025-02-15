import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Members from './Members';
import { ThemeProvider } from './context/ThemeContext';

function App() {
    return (
        <ThemeProvider>
            <div>
                <Router>
                    <Navbar/>

                    <Routes>
                        <Route path="/" element={<h1 className="text-4xl sans">
                                                Koło Studentów Informatyki
                                            </h1>} />
                        <Route path="/members" element={<Members />} />
                    </Routes>
                </Router>
            </div>
        </ThemeProvider>
    );
}

export default App;