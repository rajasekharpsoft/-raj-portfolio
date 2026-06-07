import React, { useState } from 'react'
import '../../styles/chat.css'

function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Raja's AI Assistant. How can I help you learn more about Raja's skills and experience?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const suggestedQuestions = [
    {
      question: 'Tell me about yourself',
      id: 'about',
      answer:
        "I'm Raja Sekhar Vanjeti, a Java Backend Developer, Full Stack Developer, and AI Solutions Engineer. I'm passionate about building scalable systems, AI-powered solutions, and business automation platforms.",
    },
    {
      question: 'What skills do you have?',
      id: 'skills',
      answer:
        'My main skills include: Java, Spring Boot, React, JavaScript, MySQL, AWS, Docker, AI (ChatGPT, Claude), and n8n for workflow automation. I have expertise in backend development, full-stack solutions, and AI integration.',
    },
    {
      question: 'What technologies do you work with?',
      id: 'tech',
      answer:
        'I work with Java, Spring Boot for backend, React and JavaScript for frontend, MySQL for databases, AWS for cloud infrastructure, Docker for containerization, and AI tools like ChatGPT and Claude for intelligent automation.',
    },
    {
      question: 'What services do you offer?',
      id: 'services',
      answer:
        'I offer Java Backend Development, Full Stack Development, REST API Development, AI Integration, Business Process Automation with n8n, and Technical Consulting to help businesses build and scale their digital solutions.',
    },
    {
      question: 'How can you help my business?',
      id: 'help',
      answer:
        "I can help your business by building scalable backend systems, creating modern web applications, integrating AI for automation, optimizing business processes, and providing technical guidance for your digital transformation journey.",
    },
  ]

  const handleSuggestedQuestion = (questionData) => {
    const userMessage = {
      id: messages.length + 1,
      text: questionData.question,
      sender: 'user',
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setIsLoading(true)

    // Simulate bot response delay
    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        text: questionData.answer,
        sender: 'bot',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
      setIsLoading(false)
    }, 500)
  }

  const handleSendMessage = () => {
    if (!input.trim()) return

    const userMessage = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    // Simulate bot response
    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        text: "Thanks for your question! For more detailed information, please visit my projects section or contact me directly. I'd love to discuss how I can help you!",
        sender: 'bot',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
      setIsLoading(false)
    }, 800)
  }

  return (
    <section className="chat-section">
      {/* Chat Widget Button */}
      <button className="chat-button" onClick={() => setIsOpen(!isOpen)}>
        <span className="chat-icon">💬</span>
        <span className="chat-label">Chat with me</span>
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="chat-modal glass">
          <div className="chat-header">
            <div className="chat-header-content">
              <div className="chat-avatar">🤖</div>
              <div>
                <h4>Raja's AI Assistant</h4>
                <p>Online</p>
              </div>
            </div>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              ✕
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((message) => (
              <div key={message.id} className={`chat-message ${message.sender}`}>
                <div className="message-content">{message.text}</div>
                <span className="message-time">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            ))}

            {isLoading && (
              <div className="chat-message bot">
                <div className="message-content typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
          </div>

          {/* Suggested Questions or Input Area */}
          {messages.length <= 1 ? (
            <div className="suggested-questions">
              <p className="suggestions-title">Quick Questions:</p>
              <div className="questions-list">
                {suggestedQuestions.map((q) => (
                  <button key={q.id} className="suggestion-btn" onClick={() => handleSuggestedQuestion(q)}>
                    {q.question}
                  </button>
                ))}
              </div>
            </div>
          ) : null}

          <div className="chat-input-area">
            <div className="input-group">
              <input
                type="text"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <button className="send-btn" onClick={handleSendMessage}>
                <span>➤</span>
              </button>
            </div>
            <p className="chat-disclaimer">Powered by AI Assistant</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default ChatAssistant
