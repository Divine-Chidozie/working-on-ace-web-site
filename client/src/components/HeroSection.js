import React from "react";
// import { motion } from "framer-motion";

/* =============== ACE DIGITAL CO HERO-SECTION =============== */
function HeroSection() {
  return (
    <>
      <div className="container">
        <section className="hero_section fade-up" id="home">
          <h1 className="hero_title">Digital Excellence</h1>
          <p className="hero_description">
            We specialize in creating impactful social media strategies,
            high-converting landing pages, and innovative web applications that
            deliver measurable results
          </p>
          <div className="button">
            <a href="" className="btn primary_button">
              Start Now
            </a>
            <a href="" className="btn secondary_button">
              See Portfolio
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default HeroSection;
