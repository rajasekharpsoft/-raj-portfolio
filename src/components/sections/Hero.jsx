import React, { useState, useEffect } from 'react'
import '../../styles/hero.css'

function Hero() {
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [cursorVisible, setCursorVisible] = useState(true)
  const [voiceStarted, setVoiceStarted] = useState(false)

  // Text to type
  const fullText =
    "I build scalable systems, AI-powered solutions, and digital transformations."

  // Typing animation effect
  useEffect(() => {
    if (!isTyping) return

    let index = 0
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.substring(0, index + 1))
        index++
      } else {
        setIsTyping(false)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [isTyping])

  // Blinking cursor
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  // Auto play AI voice on page load
  useEffect(() => {
    const playVoice = () => {
      const voiceText =
        "Hello, I'm Raja Sekhar Vanjeti. Welcome to my digital portfolio. I am a Java Backend Developer, Full Stack Developer, and AI Solutions Engineer. I build scalable software systems, modern web applications, AI-powered solutions, and business automation platforms. Explore my journey, skills, projects, and future vision."

      // Use Web Speech API if available
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(voiceText)
        utterance.rate = 0.95
        utterance.pitch = 1
        utterance.volume = 1
        speechSynthesis.cancel() // Cancel any ongoing speech
        speechSynthesis.speak(utterance)
        setVoiceStarted(true)
      }
    }

    // Play voice after a short delay
    const timer = setTimeout(playVoice, 1000)
    return () => clearTimeout(timer)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        {/* Left Side - Content */}
        <div className="hero-content">
          <div className="hero-greeting">
            <span className="greeting-wave">👋</span>
            <h3>Welcome to my AI Universe</h3>
          </div>

          <h1 className="hero-title">
            Raja Sekhar <span className="gradient-text">Vanjeti</span>
          </h1>

          <div className="hero-subtitle">
            <p>Java Backend Developer | Full Stack Developer | AI Solutions Engineer</p>
          </div>

          <div className="hero-typing">
            <p>
              <span className="typing-text">{displayedText}</span>
              <span className={`cursor ${cursorVisible ? 'visible' : ''}`}>_</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollToSection('about')}>
              Discover More
              <span className="btn-arrow">→</span>
            </button>
            <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
              Get in Touch
            </button>
          </div>

          {/* Quick Stats */}
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Technologies</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
          </div>
        </div>

        {/* Right Side - Animated Avatar */}
        <div className="hero-avatar">
          <div className="avatar-container">
            {/* Animated background circles */}
            <div className="avatar-bg-circle circle-1"></div>
            <div className="avatar-bg-circle circle-2"></div>
            <div className="avatar-bg-circle circle-3"></div>

            {/* Avatar illustration (CSS-based) */}
            <div className="avatar-illustration">
              <div className="avatar-head">
                <div className="avatar-face">
                  <div className="avatar-eye left"></div>
                  <div className="avatar-eye right"></div>
                  <div className="avatar-mouth"></div>
                </div>
                <div className="avatar-hair"></div>
              </div>
              <div className="avatar-body">
                <div className="avatar-shirt"></div>
                <div className="avatar-arms">
                  <div className="avatar-arm left"></div>
                  <div className="avatar-arm right"></div>
                </div>
              </div>
            </div>

            {/* Tech badges floating around avatar */}
            <div className="avatar-badge badge-1">React</div>
            <div className="avatar-badge badge-2">Java</div>
            <div className="avatar-badge badge-3">AI</div>
            <div className="avatar-badge badge-4">Cloud</div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="scroll-arrow">
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  )
}

export default Hero
