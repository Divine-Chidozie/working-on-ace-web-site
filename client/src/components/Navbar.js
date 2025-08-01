const Navbar = () => {
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
          <nav>
            <ul className="nav_links">
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
            </ul>
          </nav>
          <a className="start-btn" href="">
            Let’s Talk
          </a>
        </header>
      </div>
    </>
  );
};

export default Navbar;
