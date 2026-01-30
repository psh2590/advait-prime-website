import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import RealEstate from "./pages/RealEstate";
import Business from "./pages/Business";
import Healthcare from "./pages/Healthcare";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/real-estate" element={<RealEstate />} />
        <Route path="/services/business" element={<Business />} />
        <Route path="/services/healthcare" element={<Healthcare />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
