import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Analytics from "./components/Analytics";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";
import Gallery from "./pages/Gallery";
import InstrumentsPage from "./pages/InstrumentsPage";
import Programs from "./pages/Programs";
import Awards from "./pages/Awards";
import Testimonials from "./pages/Testimonials";
import Melams from "./pages/Melams";
import ChendaMelamChennai from "./pages/ChendaMelamChennai";
import ChendaMelamArea from "./pages/ChendaMelamArea";
import ChendaClassesChennai from "./pages/ChendaClassesChennai";
import "./styles/App.css";

const AppRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/instruments" element={<InstrumentsPage />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/melams" element={<Melams />} />
      <Route path="/chenda-melam-chennai" element={<ChendaMelamChennai />} />
      <Route path="/chenda-classes-chennai" element={<ChendaClassesChennai />} />
      <Route path="/:pageSlug" element={<ChendaMelamArea />} />
      <Route path="/awards" element={<Awards />} />
      <Route path="/testimonials" element={<Testimonials />} />
    </Routes>
  );
};

const App = () => {
  return (
    <Router>
      <Analytics />
      <ScrollToTop />
      <div className="app-shell">
        <Navbar />
        <div id="main-content" className="app-main" role="main" tabIndex={-1}>
          <AppRoutes />
        </div>
        <Footer />
        <FloatingActions />
      </div>
    </Router>
  );
};

export default App;
