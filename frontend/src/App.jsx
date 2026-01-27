import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Healthcare from "./components/Healthcare";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Healthcare />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
