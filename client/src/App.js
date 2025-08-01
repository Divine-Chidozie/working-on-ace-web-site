// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServiceSection from "./components/ServiceSection";
import Stats from "./components/Stats";

function App() {
  return (
    <div>
      <div className="hero-background">
        <Navbar />
        <HeroSection />
      </div>
      <ServiceSection />
      <Stats />
    </div>
  );
}

export default App;
