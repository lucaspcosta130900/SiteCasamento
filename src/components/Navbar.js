import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <button className="menu-toggle" onClick={toggleMenu}>
        <span className="hamburger-text">Menu</span>
        <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
      </button>
      <ul className={isMenuOpen ? 'open' : ''}>
        <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
        <li><Link to="/sobre" onClick={() => setIsMenuOpen(false)}>Sobre Nós</Link></li>
        <li><Link to="/confirmacao" onClick={() => setIsMenuOpen(false)}>Confirme sua Presença</Link></li>
        <li><Link to="/local" onClick={() => setIsMenuOpen(false)}>Local do Evento</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar; 