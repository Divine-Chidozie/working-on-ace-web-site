import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClickBtn = (e) => {
    e.preventDefault();
    alert(
      "Thank you for reaching out! our contact form is under development. stay tuned!"
    );
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      <div className="container">
        <header className="nav_bar fade-up">
          <a href="#home">
            <img
              className="nav_bar_logo"
              src="/assets/ace-digital-logo.jpg"
              alt="Ace Digital Logo"
            />
          </a>

          {/* Hamburger Icon */}
          <div className="hamburger" onClick={toggleMenu}>
            <span className={menuOpen ? "bar open" : "bar"}></span>
            <span className={menuOpen ? "bar open" : "bar"}></span>
            <span className={menuOpen ? "bar open" : "bar"}></span>
          </div>

          <nav className={`nav_links ${menuOpen ? "open" : ""}`}>
            <a href="#services">
              <li>Services</li>
            </a>
            <a href="#portfolio">
              <li>Portfolio</li>
            </a>
            <a href="#about">
              <li>About</li>
            </a>
            <a href="#contact">
              <li>Contact</li>
            </a>
          </nav>

          <a onClick={handleClickBtn} className="start-btn" href="">
            Let’s Talk
          </a>
        </header>
      </div>
    </>
  );
};

export default Navbar;
