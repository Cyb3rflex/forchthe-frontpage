import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Testimonial from "./components/Testimonial";
import SpotlightSection from "./components/SpotlightSection";
import BenefitsBanner from "./components/BenefitsBanner";
import PromotionalSection from "./components/PromotionalSection";
import BlogSection from "./components/BlogSection";
import PromotionalBanner from "./components/PromotionalBanner";
import Footer from "./components/Footer";
import "./index.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Portfolio />
      <Testimonial />
      <SpotlightSection />
      <BenefitsBanner />
      <PromotionalSection />
      <BlogSection />
      <PromotionalBanner />
      <Footer />
    </div>
  );
}

export default App;
