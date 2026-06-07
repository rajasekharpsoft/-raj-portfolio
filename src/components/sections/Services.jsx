import React from 'react'
import '../../styles/services.css'

function Services() {
  const servicesData = [
    {
      id: 1,
      icon: '☕',
      title: 'Java Backend Development',
      description:
        'Build robust, scalable backend systems using Java and Spring Boot framework with best practices for performance and security.',
      features: ['REST APIs', 'Microservices', 'Database Design', 'API Security'],
    },
    {
      id: 2,
      icon: '🌐',
      title: 'Full Stack Development',
      description:
        'Complete end-to-end development solutions combining powerful backend systems with modern, responsive frontend interfaces.',
      features: ['React Development', 'API Integration', 'Real-time Features', 'Performance Optimization'],
    },
    {
      id: 3,
      icon: '🔌',
      title: 'REST API Development',
      description: 'Design and implement high-performance REST APIs with proper authentication, validation, and comprehensive documentation.',
      features: ['API Design', 'Authentication', 'Error Handling', 'API Documentation'],
    },
    {
      id: 4,
      icon: '🤖',
      title: 'AI Integration',
      description:
        'Integrate cutting-edge AI solutions like ChatGPT and Claude into your applications for intelligent features and automation.',
      features: ['ChatGPT Integration', 'Claude API', 'Prompt Engineering', 'AI Chatbots'],
    },
    {
      id: 5,
      icon: '⚙️',
      title: 'Business Process Automation',
      description:
        'Automate manual workflows and business processes using n8n and AI to improve efficiency and reduce operational costs.',
      features: ['Workflow Design', 'Process Optimization', 'Integration', 'Cost Reduction'],
    },
    {
      id: 6,
      icon: '🧠',
      title: 'Technical Consulting',
      description:
        'Expert guidance on system architecture, technology selection, and technical strategy to help your business grow and scale.',
      features: ['Architecture Review', 'Tech Stack Selection', 'Performance Tuning', 'Strategic Planning'],
    },
  ]

  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="section-title">
          <h2>Services Offered</h2>
          <p className="section-subtitle">Professional solutions tailored to your business needs</p>
        </div>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div key={service.id} className="service-card glass" style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Service Icon */}
              <div className="service-icon">{service.icon}</div>

              {/* Service Title */}
              <h3>{service.title}</h3>

              {/* Service Description */}
              <p className="service-description">{service.description}</p>

              {/* Service Features */}
              <div className="service-features">
                <h4>Features:</h4>
                <ul>
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="feature-check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service Card Hover Effect */}
              <div className="card-shine"></div>
            </div>
          ))}
        </div>

        {/* Service Process */}
        <div className="service-process glass">
          <h3>How We Work</h3>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h4>Consultation</h4>
              <p>Understand your needs and requirements</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h4>Planning</h4>
              <p>Design comprehensive solution strategy</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h4>Development</h4>
              <p>Build and implement the solution</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h4>Support</h4>
              <p>Ongoing maintenance and optimization</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
