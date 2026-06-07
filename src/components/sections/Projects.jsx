import React, { useState } from 'react'
import '../../styles/projects.css'

function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null)

  const projectsData = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce solution built with Java Spring Boot and React, featuring real-time inventory management, secure payment integration, and scalable microservices architecture.',
      image: '🛍️',
      technologies: ['Java', 'Spring Boot', 'React', 'MySQL', 'AWS'],
      status: 'In Development',
    },
    {
      id: 2,
      title: 'AI Automation Workflow',
      description:
        'Intelligent workflow automation platform using n8n and Claude AI, designed to automate business processes, reduce manual effort, and improve operational efficiency.',
      image: '🤖',
      technologies: ['n8n', 'Claude AI', 'REST APIs', 'Node.js'],
      status: 'Deployed',
    },
    {
      id: 3,
      title: 'Data Analytics Dashboard',
      description:
        'Real-time analytics dashboard built with React and Java backend, providing comprehensive business insights with interactive visualizations and custom reporting features.',
      image: '📊',
      technologies: ['React', 'Java', 'MySQL', 'Charts.js', 'Docker'],
      status: 'Live',
    },
    {
      id: 4,
      title: 'Cloud Infrastructure Manager',
      description:
        'AWS-based infrastructure management tool for automated deployment, scaling, and monitoring of cloud resources with cost optimization features.',
      image: '☁️',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
      status: 'In Development',
    },
    {
      id: 5,
      title: 'REST API Gateway',
      description:
        'High-performance API gateway built with Java Spring Boot, handling authentication, rate limiting, logging, and request routing for microservices.',
      image: '🔌',
      technologies: ['Java', 'Spring Boot', 'Redis', 'MySQL', 'Docker'],
      status: 'Production',
    },
    {
      id: 6,
      title: 'AI Chatbot Assistant',
      description:
        'Intelligent chatbot powered by Claude AI and ChatGPT, integrated with business systems for customer support automation and intelligent responses.',
      image: '💬',
      technologies: ['Claude AI', 'ChatGPT', 'React', 'Node.js', 'MongoDB'],
      status: 'Live',
    },
  ]

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="section-title">
          <h2>Featured Projects</h2>
          <p className="section-subtitle">Showcasing innovative solutions and real-world applications</p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className={`project-card glass ${hoveredProject === project.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image Area */}
              <div className="project-image">
                <span className="project-emoji">{project.image}</span>
                <div className="image-overlay"></div>
              </div>

              {/* Project Content */}
              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <span className={`status-badge ${project.status.toLowerCase().replace(/\s+/g, '-')}`}>
                    {project.status}
                  </span>
                </div>

                <p className="project-description">{project.description}</p>

                {/* Technologies */}
                <div className="project-tech">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Actions */}
                <div className="project-actions">
                  <button className="btn-icon">
                    <span>View Project →</span>
                  </button>
                  <button className="btn-icon btn-secondary">
                    <span>GitHub</span>
                  </button>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="card-border"></div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="more-projects">
          <p>Interested in seeing more projects?</p>
          <a href="#contact" className="btn btn-primary">
            Let's Discuss Your Idea
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
