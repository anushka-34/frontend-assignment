import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import JewelrySection from "./components/JewelrySection";
import FashionSection from "./components/FashionSection";
import WeaponSection from "./components/WeaponSection";
import PrintSection from "./components/PrintSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <JewelrySection />
      <FashionSection />
      <PrintSection />
      <WeaponSection />
      <Footer />
    </>
  );
}

export default App;