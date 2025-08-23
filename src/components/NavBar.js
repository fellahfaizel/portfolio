import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showIntro, setShowIntro] = useState(true);
  const [introAnimation, setIntroAnimation] = useState('intro-enter');

  useEffect(() => {
    // Hide intro after 3 seconds and start transition
    const timer = setTimeout(() => {
      setIntroAnimation('intro-exit');
      setTimeout(() => {
        setShowIntro(false);
      }, 1000); // Wait for exit animation to complete
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Intro Animation */}
      {showIntro && (
        <div className={`intro-overlay ${introAnimation}`}>
          <div className="intro-content">
            <h1 className="intro-text">Hello Everyone</h1>
            <div className="intro-sparkles">
              <span className="sparkle">✨</span>
              <span className="sparkle">⭐</span>
              <span className="sparkle">💫</span>
            </div>
          </div>
        </div>
      )}

      <nav className={`navbar ${showIntro ? 'navbar-hidden' : 'navbar-visible'}`}>
        <div className="nav-container">
          <div className="logo">
            <span className="logo-text">Fellah</span>
            <span className="logo-accent">Faizel</span>
          </div>
          
          <ul className="nav-menu">
            {['home', 'skills', 'projects', 'contact'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className={`nav-link ${activeSection === item ? 'active' : ''}`}
                >
                  <span className="nav-link-text">{item.charAt(0).toUpperCase() + item.slice(1)}</span>
                  <span className="nav-link-bg"></span>
                </button>
              </li>
            ))}
          </ul>

          {/* Greeting Message */}
          <div className={`nav-greeting ${!showIntro ? 'greeting-visible' : ''}`}>
            <span className="greeting-text">Hello Everyone! 👋</span>
          </div>

          <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
            <span className={`menu-icon ${isMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

          <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
            <ul className="nav-menu mobile">
              {['home', 'skills', 'projects', 'contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className={`nav-link mobile ${activeSection === item ? 'active' : ''}`}
                  >
                    <span className="nav-link-text">{item.charAt(0).toUpperCase() + item.slice(1)}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;