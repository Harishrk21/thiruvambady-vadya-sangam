import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Gallery from "./pages/Gallery";
import InstrumentsPage from "./pages/InstrumentsPage";
import Programs from "./pages/Programs";
import Awards from "./pages/Awards";
import Testimonials from "./pages/Testimonials";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/instruments" element={<InstrumentsPage />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
