import { useState } from 'react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="hero-container">
      <nav className="navbar">
        <div className="logo">
          <span className="logo-icon">❉</span>
          <span className="logo-text">Bellovoire</span>
        </div>
        <div className="burger-menu" onClick={toggleMenu}>
          <div className="line long"></div>
          <div className="line short"></div>
        </div>
      </nav>
      
      <div className="hero-content">
        <p className="subtitle">How Not To Retire poor</p>
        <h1 className="title">Retiring Richly</h1>
      </div>

      {/* OVERLAY */}
      <div 
        className={`overlay ${isMenuOpen ? 'visible' : ''}`} 
        onClick={toggleMenu}
      ></div>

      {/* SIDE NAV */}
      <div className={`side-nav ${isMenuOpen ? 'open' : ''}`}>
        <div className="side-nav-close" onClick={toggleMenu}>
          <div className="close-line left"></div>
          <div className="close-line right"></div>
        </div>
        
        <div className="side-nav-content">
          <div className="menu-section">
            <span className="menu-label">Menu</span>
            <ul className="menu-links">
              <li><a href="#home" onClick={toggleMenu}>Home</a></li>
              <li><a href="#about-author" onClick={toggleMenu}>About Author</a></li>
              <li><a href="#about-book" onClick={toggleMenu}>About Book</a></li>
              <li><a href="#gallery" onClick={toggleMenu}>Gallery</a></li>
              <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
            </ul>
          </div>
          
          <div className="bottom-links">
            <div className="stay-connected">
              <span className="bottom-label">Stay Connected</span>
              <a href="mailto:info@author.com" className="email-link">INFO@AUTHOR.COM</a>
            </div>
            <div className="buy-action">
              <a href="#buy" className="buy-link">BUY BOOK</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
