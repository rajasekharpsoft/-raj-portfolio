import React from 'react'
import '../../styles/about.css'

function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
          <p className="section-subtitle">My Journey & Passion</p>
        </div>

        <div className="about-content">
          {/* Main Card */}
          <div className="about-card glass">
            <div className="about-card-header">
              <div className="card-icon">🎯</div>
              <h3>Who Am I?</h3>
            </div>

            <p className="about-text">
              Hi, I'm <span className="highlight">Raja Sekhar Vanjeti</span>, a passionate software engineer
              specializing in backend development, full-stack solutions, and artificial intelligence. My journey
              began with a strong foundation in computer science, and I've evolved into building scalable,
              intelligent systems that solve real-world problems.
            </p>

            <p className="about-text">
              I'm passionate about <span className="highlight">software development</span>,{' '}
              <span className="highlight">artificial intelligence</span>, <span className="highlight">automation</span>,
              and <span className="highlight">digital transformation</span>. My focus is on creating systems that help
              businesses improve efficiency, productivity, and growth through modern technology.
            </p>
          </div>

          {/* Three Info Cards */}
          <div className="about-grid">
            {/* Card 1 */}
            <div className="info-card glass">
              <div className="info-icon">💡</div>
              <h4>Innovation First</h4>
              <p>I believe in building innovative solutions using the latest technologies and best practices.</p>
            </div>

            {/* Card 2 */}
            <div className="info-card glass">
              <div className="info-icon">⚡</div>
              <h4>Performance Focused</h4>
              <p>Creating scalable, efficient systems that perform optimally under all conditions.</p>
            </div>

            {/* Card 3 */}
            <div className="info-card glass">
              <div className="info-icon">🚀</div>
              <h4>Future Ready</h4>
              <p>Staying ahead with AI, cloud technologies, and emerging trends in software development.</p>
            </div>
          </div>

          {/* Key Strengths */}
          <div className="strengths-card glass">
            <h3>Key Strengths</h3>
            <div className="strengths-list">
              <div className="strength-item">
                <span className="check-mark">✓</span>
                <span>Building scalable backend systems with Java and Spring Boot</span>
              </div>
              <div className="strength-item">
                <span className="check-mark">✓</span>
                <span>Full-stack development with React, JavaScript, and modern web technologies</span>
              </div>
              <div className="strength-item">
                <span className="check-mark">✓</span>
                <span>Designing and implementing REST APIs and microservices</span>
              </div>
              <div className="strength-item">
                <span className="check-mark">✓</span>
                <span>AI integration and prompt engineering with ChatGPT and Claude</span>
              </div>
              <div className="strength-item">
                <span className="check-mark">✓</span>
                <span>Workflow automation and business process automation with n8n</span>
              </div>
              <div className="strength-item">
                <span className="check-mark">✓</span>
                <span>Cloud deployment and DevOps with AWS and Docker</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
