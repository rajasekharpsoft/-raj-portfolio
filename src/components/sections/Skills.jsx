import React, { useState } from 'react'
import '../../styles/skills.css'

function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const skillsData = {
    backend: {
      title: 'Backend Development',
      icon: '⚙️',
      color: '#00d4ff',
      skills: ['Java', 'Spring Boot', 'REST APIs', 'MySQL', 'Microservices', 'Design Patterns'],
    },
    frontend: {
      title: 'Frontend Development',
      icon: '🎨',
      color: '#00ff88',
      skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Responsive Design', 'DOM Manipulation'],
    },
    cloud: {
      title: 'Cloud & DevOps',
      icon: '☁️',
      color: '#ff006e',
      skills: ['AWS', 'Docker', 'Git', 'CI/CD', 'Linux', 'Server Management'],
    },
    ai: {
      title: 'AI & Automation',
      icon: '🤖',
      color: '#8c43ff',
      skills: ['ChatGPT', 'Claude', 'Prompt Engineering', 'AI Agents', 'n8n', 'Workflow Automation'],
    },
    business: {
      title: 'Business & Architecture',
      icon: '📊',
      color: '#fdb833',
      skills: ['System Design', 'Solution Architecture', 'Process Automation', 'Technical Consulting', 'Requirements Analysis', 'Project Management'],
    },
  }

  const allSkills = [
    ...skillsData.backend.skills,
    ...skillsData.frontend.skills,
    ...skillsData.cloud.skills,
    ...skillsData.ai.skills,
    ...skillsData.business.skills,
  ]

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'backend', label: 'Backend' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'cloud', label: 'Cloud' },
    { id: 'ai', label: 'AI & Automation' },
    { id: 'business', label: 'Business' },
  ]

  const getDisplayedSkills = () => {
    if (selectedCategory === 'all') {
      return Object.values(skillsData).flatMap((category) => ({
        ...category,
        skills: category.skills,
      }))
    }
    return [skillsData[selectedCategory]]
  }

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <div className="section-title">
          <h2>Skills Galaxy</h2>
          <p className="section-subtitle">Technologies, Tools & Expertise</p>
        </div>

        {/* Category Filter */}
        <div className="skills-filters">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="skills-display">
          {selectedCategory === 'all' ? (
            // Show all categories in a grid
            <div className="skills-grid">
              {Object.entries(skillsData).map(([key, category]) => (
                <div key={key} className="skills-category-card glass">
                  <div className="category-header">
                    <span className="category-icon" style={{ fontSize: '2.5rem' }}>
                      {category.icon}
                    </span>
                    <h3>{category.title}</h3>
                  </div>

                  <div className="category-skills">
                    {category.skills.map((skill, idx) => (
                      <div key={idx} className="skill-pill">
                        <span className="skill-name">{skill}</span>
                        <div className="skill-indicator"></div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Show single category in detail
            <div className="skills-detail">
              {getDisplayedSkills().map((category, catIdx) => (
                <div key={catIdx} className="category-detail glass">
                  <div className="category-header-detail">
                    <div className="header-icon">{category.icon}</div>
                    <div className="header-info">
                      <h3>{category.title}</h3>
                      <p>Proficiency & Experience</p>
                    </div>
                  </div>

                  <div className="detailed-skills">
                    {category.skills.map((skill, idx) => (
                      <div key={idx} className="skill-bar">
                        <div className="skill-header-row">
                          <span className="skill-name">{skill}</span>
                          <span className="proficiency-badge">Expert</span>
                        </div>
                        <div className="progress-bar">
                          <div
                            className="progress-fill"
                            style={{
                              width: `${80 + Math.random() * 20}%`,
                              backgroundColor: category.color,
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Skills Summary */}
        <div className="skills-summary glass">
          <h3>Total Skills Mastered</h3>
          <div className="summary-stats">
            <div className="summary-stat">
              <span className="stat-value">{allSkills.length}+</span>
              <span className="stat-label">Technologies</span>
            </div>
            <div className="summary-stat">
              <span className="stat-value">5+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="summary-stat">
              <span className="stat-value">100%</span>
              <span className="stat-label">Dedication</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
