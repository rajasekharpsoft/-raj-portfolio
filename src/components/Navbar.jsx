import React, { useState } from 'react'
import '../styles/navbar.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = (e) => {
    e.preventDefault()
    const targetId = e.currentTarget.getAttribute('href').substring(1)
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo" onClick={scrollToTop}>
          <span className="logo-icon">⚡</span>
          <span className="logo-text">RAJA</span>
        </div>

        {/* Hamburger Menu */}
        <button
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Menu */}
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <a href="#home" onClick={handleNavClick}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={handleNavClick}>
              About
            </a>
          </li>
          <li>
            <a href="#timeline" onClick={handleNavClick}>
              Journey
            </a>
          </li>
          <li>
            <a href="#skills" onClick={handleNavClick}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={handleNavClick}>
              Projects
            </a>
          </li>
          <li>
            <a href="#services" onClick={handleNavClick}>
              Services
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleNavClick}>
              Contact
            </a>
          </li>
        </ul>

        {/* CTA Button */}
        <a href="#contact" onClick={handleNavClick} className="btn btn-primary">
          Let's Talk
        </a>
      </div>
    </nav>
  )
}

export default Navbar
