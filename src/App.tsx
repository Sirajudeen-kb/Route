import Navbar from "./Components/Navbar"
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App