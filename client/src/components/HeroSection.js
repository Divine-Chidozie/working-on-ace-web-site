import React from "react";
import { useEffec, useRef } from "react";
// import { motion } from "framer-motion";

/* =============== ACE DIGITAL CO HERO-SECTION =============== */
function HeroSection() {
  const startBtnRef = useRef(null);

  const handleStartBtn = (e) => {
    e.preventDefault();
    alert("Sign up feature coming soon! stay tuned.");
  };

  const handlePortfolioBtn = (e) => {
    e.preventDefault();
    alert("Our portfolio is still in progress. please check back later!");
  };
  return (
    <>
      <div className="container">
        <section className="hero_section fade-up" id="home">
          <h1 className="hero_title">
            Digital <br></br> Excellence
          </h1>
          <p className="hero_description">
            We specialize in creating impactful social media strategies,
            high-converting landing pages, and innovative web applications that
            deliver measurable results
          </p>
          <div className="button">
            <a onClick={handleStartBtn} href="" className="btn primary_button">
              Start Now
            </a>
            <a
              onClick={handlePortfolioBtn}
              href=""
              className="btn secondary_button"
            >
              See Portfolio
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default HeroSection;
