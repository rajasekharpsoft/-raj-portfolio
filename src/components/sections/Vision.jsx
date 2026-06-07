import React from 'react'
import '../../styles/vision.css'

function Vision() {
  return (
    <section id="vision" className="vision section">
      <div className="container">
        <div className="vision-content glass">
          <div className="vision-icon">🚀</div>

          <h2>Future Vision</h2>

          <p className="vision-main">
            My goal is to bridge software engineering, artificial intelligence, and business innovation.
          </p>

          <div className="vision-details">
            <p>
              I believe that technology should simplify complex problems and create meaningful value for businesses and
              individuals. Through innovative solutions, intelligent automation, and thoughtful system design, I aim to
              help organizations transform and thrive in the digital age.
            </p>

            <p>
              I continuously learn, build, and explore new ways to leverage technology for business growth. Whether it's
              developing scalable backend systems, creating modern web applications, or integrating cutting-edge AI
              solutions, I'm committed to excellence in every project.
            </p>
          </div>

          {/* Vision Points */}
          <div className="vision-points">
            <div className="vision-point">
              <span className="point-icon">🎯</span>
              <h4>Build with Purpose</h4>
              <p>Create solutions that solve real business problems and drive measurable results.</p>
            </div>

            <div className="vision-point">
              <span className="point-icon">🔮</span>
              <h4>Embrace Innovation</h4>
              <p>Stay ahead of the curve with emerging technologies and modern development practices.</p>
            </div>

            <div className="vision-point">
              <span className="point-icon">🤝</span>
              <h4>Create Impact</h4>
              <p>Make a positive difference through technology, automation, and intelligent solutions.</p>
            </div>

            <div className="vision-point">
              <span className="point-icon">📈</span>
              <h4>Enable Growth</h4>
              <p>Help businesses scale, optimize, and succeed through strategic technical guidance.</p>
            </div>
          </div>

          {/* CTA */}
          <div className="vision-cta">
            <p>Ready to turn your vision into reality?</p>
            <a href="#contact" className="btn btn-primary">
              Let's Build Together
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Vision
