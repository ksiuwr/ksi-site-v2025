import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Members from './Members';
import Contact from './Contact';
import Footer from './Footer';

function App() {
    return (
            <Router>
                <Navbar/>

                <Routes>
                    <Route path="/" element={<h1 className="text-4xl sans">
                                            Koło Studentów Informatyki
                                        </h1>} />
                    <Route path="/members" element={<Members />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>

                <Footer />
            </Router>
    );
}

export default App;