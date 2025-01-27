import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Members from './Members';

function App() {
    return (
        <Router>
            {/* <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/members">Members</Link></li>
                </ul>
            </nav> */}

            <Routes>
                <Route path="/" element={<h1 className="text-4xl sans">
                                          Koło Studentów Informatyki
                                          </h1>} />
                <Route path="/members" element={<Members />} />
            </Routes>
        </Router>
    );
}

export default App;