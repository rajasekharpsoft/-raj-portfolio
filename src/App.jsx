import React, { useState, useEffect } from 'react'
import './styles/app.css'
import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Timeline from './components/sections/Timeline'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Services from './components/sections/Services'
import ChatAssistant from './components/sections/ChatAssistant'
import Vision from './components/sections/Vision'
import Contact from './components/sections/Contact'
import Footer from './components/Footer'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for animations
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="app">
      {isLoading && <LoadingScreen />}
      <Navbar />
      <main className="main-content">
        <Hero />
        <About />
        <Timeline />
        <Skills />
        <Projects />
        <Services />
        <ChatAssistant />
        <Vision />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

// Loading screen component with animated text
function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="loading-container">
        <div className="loading-circle"></div>
        <h2>Initializing AI Portfolio</h2>
        <p>Welcome to Raja's Digital Universe</p>
      </div>
    </div>
  )
}

export default App
