import React, { useState } from 'react'
import '../../styles/timeline.css'

function Timeline() {
  const [expandedItem, setExpandedItem] = useState(null)

  const timelineData = [
    {
      year: '2023',
      title: 'B.Tech Graduate',
      description: 'Completed Bachelor of Technology with strong foundation in computer science',
      skills: ['Java', 'C Programming', 'SQL', 'Data Structures', 'Problem Solving'],
      icon: '🎓',
    },
    {
      year: '2024',
      title: 'Software Trainee',
      description: 'Started professional journey as a software trainee, learning industry practices',
      skills: ['Java', 'Git', 'SQL', 'Debugging', 'API Fundamentals', 'SDLC'],
      icon: '🚀',
    },
    {
      year: '2025',
      title: 'Software Developer',
      description: 'Promoted to Software Developer, working on backend systems and APIs',
      skills: ['Java', 'Spring Boot', 'MySQL', 'REST APIs', 'Backend Development', 'Git'],
      icon: '💻',
    },
    {
      year: '2026',
      title: 'Java Backend & Full Stack Developer',
      description: 'Advanced to Full Stack Developer, mastering both backend and frontend',
      skills: ['Java', 'Spring Boot', 'React', 'JavaScript', 'HTML', 'CSS', 'MySQL', 'AWS', 'Docker'],
      icon: '⚡',
    },
    {
      year: 'Current',
      title: 'AI Engineer & Solutions Consultant',
      description: 'Specializing in AI integration, automation, and business solutions',
      skills: ['Artificial Intelligence', 'ChatGPT', 'Claude', 'Prompt Engineering', 'AI Automation', 'AI Agents', 'n8n', 'Workflow Automation', 'System Design', 'Solution Architecture'],
      icon: '🤖',
    },
  ]

  return (
    <section id="timeline" className="timeline section">
      <div className="container">
        <div className="section-title">
          <h2>My Career Journey</h2>
          <p className="section-subtitle">Evolution from Student to AI Solutions Engineer</p>
        </div>

        <div className="timeline-wrapper">
          {timelineData.map((item, index) => (
            <div key={index} className={`timeline-item ${expandedItem === index ? 'expanded' : ''}`}>
              {/* Timeline dot and line */}
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                {index < timelineData.length - 1 && <div className="marker-line"></div>}
              </div>

              {/* Timeline content card */}
              <div className="timeline-card glass" onClick={() => setExpandedItem(expandedItem === index ? null : index)}>
                <div className="timeline-header">
                  <div className="timeline-icon">{item.icon}</div>
                  <div className="timeline-title-group">
                    <span className="timeline-year">{item.year}</span>
                    <h3>{item.title}</h3>
                  </div>
                </div>

                <p className="timeline-description">{item.description}</p>

                <div className="timeline-skills">
                  {item.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline
