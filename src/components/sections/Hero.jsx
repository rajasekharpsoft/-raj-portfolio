import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import CinematicLayer from './CinematicLayer'
import profileImage from '../../assets/raj-profile.jpg'
import '../../styles/hero.css'

function Hero() {
  const [isMuted, setIsMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(true)
  const [showSoundBadge, setShowSoundBadge] = useState(true)
  const [showReplayButton, setShowReplayButton] = useState(false)
  const videoRef = useRef(null)
  const contentRef = useRef(null)
  const scrollIndicatorRef = useRef(null)

  // Play voice on first visit
  useEffect(() => {
    const hasVisited = localStorage.getItem('rajPortfolioVisited')

    if (!hasVisited) {
      localStorage.setItem('rajPortfolioVisited', 'true')
      playVoice()
    } else {
      setShowReplayButton(true)
    }
  }, [])

  // GSAP animations on mount
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate content in
      gsap.from('[data-cinematic="title"]', {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.3,
      })

      gsap.from('[data-cinematic="subtitle"]', {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
        delay: 0.6,
      })

      gsap.from('[data-cinematic="description"]', {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: 'power3.out',
        delay: 0.9,
      })

      // Animate scroll indicator
      gsap.to('[data-cinematic="scroll-line"]', {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: 'sine.inOut',
        delay: 1.2,
      })

      // Fade sound badge after 4 seconds
      gsap.to('[data-cinematic="sound-badge"]', {
        opacity: 0,
        pointerEvents: 'none',
        duration: 0.5,
        delay: 4,
        onComplete: () => setShowSoundBadge(false),
      })
    }, contentRef)

    return () => ctx.revert()
  }, [])

  // Play voice
  const playVoice = () => {
    const voiceText =
      "Hey! I'm Raja Sekhar Vanjeti. Welcome to my digital portfolio. I'm a passionate Java Backend Developer, Full Stack Developer, and AI Solutions Engineer. I love building scalable software systems, modern web applications, and AI-powered solutions. Check out my journey, skills, and projects. Let's build something amazing together!"

    if ('speechSynthesis' in window) {
      speechSynthesis.cancel()

      const utterance = new SpeechSynthesisUtterance(voiceText)
      utterance.rate = 0.9
      utterance.pitch = 0.8
      utterance.volume = 1

      const voices = speechSynthesis.getVoices()
      const maleVoice = voices.find((v) => v.name.includes('Male') || v.name.includes('man'))
      if (maleVoice) {
        utterance.voice = maleVoice
      }

      utterance.onend = () => {
        setShowReplayButton(true)
      }

      speechSynthesis.speak(utterance)
    }
  }

  // Toggle play/pause
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  // Toggle mute
  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  // Scroll to next section
  const scrollToNext = () => {
    const nextSection = document.getElementById('about')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero-cinematic">
      {/* Three.js Cinematic Particle Layer */}
      <CinematicLayer />

      {/* Video Background */}
      <div className="video-container">
        {/* Main video */}
        <img
          ref={videoRef}
          src={profileImage}
          alt="Raja Sekhar"
          className="video-foreground"
        />

        {/* Blurred ambient layer */}
        <img
          src={profileImage}
          alt="Ambient"
          className="video-ambient"
        />

        {/* Cinematic gradient overlays */}
        <div className="gradient-overlay-top"></div>
        <div className="gradient-overlay-bottom"></div>
        <div className="gradient-overlay-sides"></div>
      </div>

      {/* Content Overlay */}
      <div ref={contentRef} className="hero-content-cinematic">
        {/* Large Name */}
        <div className="name-container" data-cinematic="title">
          <h1 className="hero-first-name">Raja</h1>
          <h1 className="hero-last-name">Sekhar</h1>
        </div>

        {/* Subtitle */}
        <div className="subtitle-container" data-cinematic="subtitle">
          <p className="hero-subtitle-text">Java Backend Developer • Full Stack Engineer • AI Solutions Expert</p>
        </div>

        {/* Description */}
        <div className="description-container" data-cinematic="description">
          <p className="hero-description">
            Building scalable systems, AI-powered solutions, and digital transformations
          </p>
        </div>

        {/* Controls */}
        <div className="hero-controls">
          {/* Play/Pause Button */}
          <button
            className="control-button glass-button"
            onClick={togglePlayPause}
            title={isPlaying ? 'Pause' : 'Play'}
          >
            <span>{isPlaying ? '⏸' : '▶'}</span>
          </button>

          {/* Mute Button */}
          <button
            className="control-button glass-button"
            onClick={toggleMute}
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            <span>{isMuted ? '🔇' : '🔊'}</span>
          </button>

          {/* Replay Button */}
          {showReplayButton && (
            <button
              className="control-button glass-button replay-btn"
              onClick={playVoice}
              title="Replay introduction"
            >
              <span>🔊</span>
            </button>
          )}
        </div>

        {/* Sound Badge */}
        {showSoundBadge && (
          <div className="sound-badge glass-badge" data-cinematic="sound-badge">
            <span className="badge-icon">🔊</span>
            <span className="badge-text">Tap for sound</span>
          </div>
        )}
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator" onClick={scrollToNext}>
        <p>Scroll to explore</p>
        <div className="scroll-line-container">
          <div className="scroll-line" data-cinematic="scroll-line"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
