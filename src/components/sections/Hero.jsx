import React, { useState, useEffect } from 'react'
import '../../styles/hero.css'
import profileImage from '../../assets/raj-profile.jpg'

function Hero() {
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [cursorVisible, setCursorVisible] = useState(true)
  const [voiceStarted, setVoiceStarted] = useState(false)
  const [showReplayButton, setShowReplayButton] = useState(false)

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

  // Function to play voice with young male voice
  const playVoice = () => {
    const voiceText =
      "Hey! I'm Raja Sekhar Vanjeti. Welcome to my digital portfolio. I'm a passionate Java Backend Developer, Full Stack Developer, and AI Solutions Engineer. I love building scalable software systems, modern web applications, and AI-powered solutions. Check out my journey, skills, and projects. Let's build something amazing together!"

    // Use Web Speech API if available
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel() // Cancel any ongoing speech

      const utterance = new SpeechSynthesisUtterance(voiceText)

      // Young male voice settings (age 23)
      utterance.rate = 0.9 // Natural speaking rate
      utterance.pitch = 0.8 // Lower pitch for male voice
      utterance.volume = 1

      // Try to select a male voice
      const voices = speechSynthesis.getVoices()
      const maleVoice = voices.find(voice => voice.name.includes('Male') || voice.name.includes('man'))
      if (maleVoice) {
        utterance.voice = maleVoice
      }

      utterance.onend = () => {
        setShowReplayButton(true)
      }

      speechSynthesis.speak(utterance)
      setVoiceStarted(true)
    }
  }

  // Auto play voice only on first visit
  useEffect(() => {
    const hasVisited = localStorage.getItem('rajPortfolioVisited')

    if (!hasVisited) {
      // Mark as visited
      localStorage.setItem('rajPortfolioVisited', 'true')

      // Play voice after a short delay
      const timer = setTimeout(playVoice, 1500)
      return () => clearTimeout(timer)
    } else {
      // Show replay button on subsequent visits
      setShowReplayButton(true)
    }
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

            {/* Real Profile Photo */}
            <div className="profile-photo-container">
              <img
                src={profileImage}
                alt="Raja Sekhar Vanjeti"
                className="profile-photo"
              />

              {/* Glowing border effect */}
              <div className="photo-glow"></div>

              {/* Name overlay on photo */}
              <div className="photo-overlay">
                <h2>Raja Sekhar Vanjeti</h2>
                <p>Java Backend Developer</p>
              </div>

              {/* Replay Voice Button */}
              {showReplayButton && (
                <button className="replay-voice-btn" onClick={playVoice} title="Replay welcome message">
                  <span className="speaker-icon">🔊</span>
                </button>
              )}
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
