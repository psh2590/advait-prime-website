import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollManager from "./components/ScrollManager";

import Home from "./pages/Home";
import About from "./pages/About";
import RealEstate from "./pages/RealEstate";
import Business from "./pages/Business";
import Healthcare from "./pages/Healthcare";
import Contact from "./pages/Contact";
import NABH from "./pages/NABH";

export default function App() {
  return (
    <BrowserRouter>
     <ScrollManager />   {/* ✅ ONE SCROLL BOSS */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Advisory Pages */}
        <Route path="/real-estate-advisory" element={<RealEstate />} />
        <Route path="/business-advisory" element={<Business />} />
        <Route path="/healthcare-advisory" element={<Healthcare />} />
        <Route path="/nabh-certification" element={<NABH />} />
        
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
