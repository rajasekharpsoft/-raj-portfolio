import React, { useState } from 'react'
import '../../styles/contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitStatus, setSubmitStatus] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsSubmitting(false)

      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000)
    }, 1500)
  }

  const contactLinks = [
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'Raja Sekhar Vanjeti',
      link: '#',
      color: '#0a66c2',
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'RajaSekhar',
      link: '#',
      color: '#ffffff',
    },
    {
      icon: '✉️',
      label: 'Email',
      value: 'raj@example.com',
      link: 'mailto:raj@example.com',
      color: '#ea4335',
    },
    {
      icon: '💬',
      label: 'WhatsApp',
      value: '+91 XXXX XXX XXX',
      link: '#',
      color: '#25d366',
    },
  ]

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-title">
          <h2>Get In Touch</h2>
          <p className="section-subtitle">Let's discuss your next project</p>
        </div>

        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form glass">
            <h3>Send Me a Message</h3>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Project discussion"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project..."
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  <>Send Message →</>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="success-message">✓ Message sent successfully! I'll get back to you soon.</div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <h3>Connect With Me</h3>

            <div className="contact-links">
              {contactLinks.map((contact, index) => (
                <a key={index} href={contact.link} className="contact-link glass" target="_blank" rel="noopener noreferrer">
                  <span className="link-icon">{contact.icon}</span>
                  <div className="link-content">
                    <span className="link-label">{contact.label}</span>
                    <span className="link-value">{contact.value}</span>
                  </div>
                  <span className="link-arrow">→</span>
                </a>
              ))}
            </div>

            <div className="contact-extras glass">
              <h4>Available For</h4>
              <div className="availability">
                <div className="avail-item">
                  <span className="avail-icon">💼</span>
                  <span>Freelance Projects</span>
                </div>
                <div className="avail-item">
                  <span className="avail-icon">🚀</span>
                  <span>Startup Collaborations</span>
                </div>
                <div className="avail-item">
                  <span className="avail-icon">🤝</span>
                  <span>Technical Consulting</span>
                </div>
                <div className="avail-item">
                  <span className="avail-icon">📚</span>
                  <span>Mentorship & Teaching</span>
                </div>
              </div>
            </div>

            <div className="response-time glass">
              <p className="response-emoji">⚡</p>
              <p>Typically responds within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
