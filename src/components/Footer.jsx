import React from 'react'
import '../styles/footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: 'Navigation',
      links: [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Timeline', href: '#timeline' },
        { label: 'Skills', href: '#skills' },
      ],
    },
    {
      title: 'Projects',
      links: [
        { label: 'Featured Work', href: '#projects' },
        { label: 'Services', href: '#services' },
        { label: 'Case Studies', href: '#projects' },
      ],
    },
    {
      title: 'Connect',
      links: [
        { label: 'LinkedIn', href: '#', external: true },
        { label: 'GitHub', href: '#', external: true },
        { label: 'Email', href: 'mailto:raj@example.com' },
        { label: 'WhatsApp', href: '#', external: true },
      ],
    },
  ]

  const socialLinks = [
    { icon: '💼', label: 'LinkedIn', href: '#' },
    { icon: '🐙', label: 'GitHub', href: '#' },
    { icon: '✉️', label: 'Email', href: 'mailto:raj@example.com' },
    { icon: '💬', label: 'Twitter', href: '#' },
  ]

  return (
    <footer className="footer">
      <div className="container">
        {/* Footer Content */}
        <div className="footer-content">
          {/* Logo Section */}
          <div className="footer-section footer-logo-section">
            <div className="footer-logo">
              <span className="logo-icon">⚡</span>
              <span className="logo-text">RAJA</span>
            </div>
            <p className="footer-tagline">
              Building scalable systems, AI-powered solutions, and digital transformations.
            </p>
            <div className="social-links">
              {socialLinks.map((link, idx) => (
                <a key={idx} href={link.href} title={link.label} className="social-link">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          {footerLinks.map((section, idx) => (
            <div key={idx} className="footer-section">
              <h4>{section.title}</h4>
              <ul>
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a href={link.href} target={link.external ? '_blank' : '_self'} rel={link.external ? 'noopener noreferrer' : ''}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Divider */}
        <div className="footer-divider"></div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-credit">
            <p>
              © {currentYear} Raja Sekhar Vanjeti. All rights reserved. |{' '}
              <a href="#contact">Get in Touch</a>
            </p>
          </div>

          <div className="footer-made">
            <p>
              Built with <span className="heart">❤️</span> using React & Modern Web Technologies
            </p>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <BackToTopButton />
    </footer>
  )
}

// Back to Top Button Component
function BackToTopButton() {
  const [isVisible, setIsVisible] = React.useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  React.useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <button
      className={`back-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      title="Back to top"
    >
      ↑
    </button>
  )
}

export default Footer
