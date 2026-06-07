# 🚀 Raja Sekhar Vanjeti - AI-Powered Portfolio

A premium, futuristic personal portfolio website for Raja Sekhar Vanjeti - Java Backend Developer, Full Stack Developer, and AI Solutions Engineer.

## ✨ Features

- **Animated Sketch Avatar** - Realistic CSS-based character animation with expressions
- **AI Voice Welcome** - Automatic AI voice introduction using Web Speech API
- **Interactive Timeline** - Beautiful career journey visualization with expandable cards
- **Skills Galaxy** - Interactive skill categories with progress indicators
- **Project Showcase** - Modern project cards with technology tags and hover effects
- **AI Chat Assistant** - Interactive chatbot with predefined intelligent responses
- **Services Display** - Comprehensive service offerings with process workflow
- **Glassmorphism Design** - Modern UI with frosted glass effects and gradients
- **Fully Responsive** - Mobile-friendly design for all devices
- **Dark Theme** - Premium dark theme with neon cyan and green accents
- **Smooth Animations** - Fluid transitions and engaging micro-interactions

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Language**: JavaScript (ES6+)
- **Styling**: Custom CSS3 with Glassmorphism
- **Build Tool**: Vite
- **Package Manager**: npm

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx                 # Navigation bar with sticky positioning
│   ├── Footer.jsx                 # Footer with social links and back-to-top
│   └── sections/
│       ├── Hero.jsx               # Landing page with avatar and AI voice
│       ├── About.jsx              # About section with key strengths
│       ├── Timeline.jsx           # Career timeline with expandable cards
│       ├── Skills.jsx             # Interactive skills galaxy
│       ├── Projects.jsx           # Project showcase with hover effects
│       ├── Services.jsx           # Services offered with workflow
│       ├── ChatAssistant.jsx      # AI chat widget
│       ├── Vision.jsx             # Future vision section
│       └── Contact.jsx            # Contact form and social links
├── styles/
│   ├── index.css                  # Global styles and animations
│   ├── app.css                    # App-level styles
│   ├── navbar.css                 # Navigation bar styles
│   ├── hero.css                   # Hero section styles
│   ├── about.css                  # About section styles
│   ├── timeline.css               # Timeline styles
│   ├── skills.css                 # Skills section styles
│   ├── projects.css               # Projects section styles
│   ├── services.css               # Services section styles
│   ├── chat.css                   # Chat assistant styles
│   ├── vision.css                 # Vision section styles
│   ├── contact.css                # Contact section styles
│   └── footer.css                 # Footer styles
├── App.jsx                        # Main app component
└── main.jsx                       # React entry point

index.html                        # HTML template
vite.config.js                    # Vite configuration
package.json                      # Project dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project**:
```bash
cd "C:\Users\V.Rajasekhar\portfoil of software Engineer"
```

2. **Install dependencies**:
```bash
npm install
```

3. **Start development server**:
```bash
npm run dev
```

The portfolio will open automatically at `http://localhost:5173`

## 🔧 Available Commands

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📋 Features Breakdown

### 1. **Hero Section** ⚡
- Animated sketch avatar with expressions
- Typing animation text
- Auto-play AI voice welcome message
- Responsive CTA buttons
- Quick stats display
- Scroll indicator

### 2. **About Section** 📖
- Professional introduction
- Key strengths with icons
- Highlight tags for important points

### 3. **Career Timeline** 📈
- Expandable timeline cards
- Year-wise progression
- Skills associated with each phase
- Animated markers and connecting lines
- Hover effects for interactivity

### 4. **Skills Galaxy** 🌟
- Category-based skill filtering
- Interactive skill pills
- Progress bars for proficiency levels
- Multiple view modes (grid and detail)
- Skills summary statistics

### 5. **Projects Showcase** 🎨
- Modern project cards with images
- Technology tags
- Project status badges
- Hover animations
- Project action buttons

### 6. **Services** 💼
- Service cards with icons
- Feature lists
- Service workflow (4-step process)
- Glossy glass effect styling

### 7. **AI Chat Assistant** 🤖
- Floating chat button
- Pre-defined intelligent responses
- Message history
- Typing indicators
- Responsive chat modal
- Quick question suggestions

### 8. **Vision Section** 🚀
- Mission statement
- Core values display
- Vision points with icons
- Call-to-action button

### 9. **Contact Section** 📞
- Contact form with validation
- Social media links
- Availability status
- Response time indicator
- Multiple contact methods

### 10. **Footer** 🔗
- Logo and tagline
- Social links
- Quick navigation links
- Back-to-top button
- Copyright information

## 🎨 Design Highlights

### Color Scheme
- **Primary**: Cyan (#00d4ff)
- **Secondary**: Neon Green (#00ff88)
- **Accent**: Hot Pink (#ff006e)
- **Tertiary**: Purple (#8c43ff)
- **Background**: Deep Navy (#0a0e27)

### Animations
- Smooth fade-in and slide animations
- Floating elements for visual interest
- Typing effect for text
- Glowing effects for interactive elements
- Pulse animations for loading states
- Transform effects on hover

### Responsive Breakpoints
- Desktop: 1024px and above
- Tablet: 768px to 1023px
- Mobile: 480px to 767px
- Small Mobile: Below 480px

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop computers (1920px+)
- Tablets (768px - 1024px)
- Mobile phones (320px - 767px)

All sections adapt gracefully to different screen sizes with:
- Flexible grid layouts
- Responsive typography
- Touch-friendly buttons and links
- Optimized spacing for readability

## 🔊 AI Voice Feature

The portfolio includes an automatic AI voice welcome using the Web Speech API. The voice plays on page load with a personalized greeting about Raja's expertise.

**Note**: Voice availability depends on browser support and operating system settings.

## 💾 Local Storage & State Management

- Form data is handled with React hooks
- Chat messages are stored in component state
- No external state management library required
- Lightweight and performant

## 🔒 Security

- No sensitive data exposed
- Email is displayed as placeholder
- All external links open in new tabs
- Form submissions can be integrated with backend

## 📝 Customization Guide

### Update Personal Information

Edit the following files:
- **Hero Section**: `src/components/sections/Hero.jsx`
- **About Section**: `src/components/sections/About.jsx`
- **Contact Links**: `src/components/sections/Contact.jsx`
- **Navigation**: `src/components/Navbar.jsx`

### Change Colors

Edit CSS variables in `src/styles/index.css`:
```css
:root {
  --accent-primary: #00d4ff;    /* Main accent color */
  --accent-secondary: #ff006e;  /* Secondary accent */
  --text-primary: #ffffff;      /* Main text color */
  /* ... other variables ... */
}
```

### Add New Sections

1. Create new component in `src/components/sections/`
2. Create corresponding CSS in `src/styles/`
3. Import and add to `src/App.jsx`
4. Add navigation link in `src/components/Navbar.jsx`

### Update Projects

Edit the `projectsData` array in `src/components/sections/Projects.jsx`

### Modify Skills

Edit the `skillsData` object in `src/components/sections/Skills.jsx`

## 🌐 Deployment

### Deploy to Netlify
```bash
npm run build
# Upload the 'dist' folder to Netlify
```

### Deploy to Vercel
```bash
npm run build
# Connect your GitHub repo to Vercel for automatic deployments
```

### Deploy to GitHub Pages
```bash
npm run build
# Push 'dist' folder contents to gh-pages branch
```

## 🐛 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## 📄 License

This portfolio template is created for Raja Sekhar Vanjeti. Feel free to customize it for personal use.

## 🤝 Contact & Support

- **Email**: raj@example.com
- **LinkedIn**: Raja Sekhar Vanjeti
- **GitHub**: RajaSekhar

## 🎯 Future Enhancements

- [ ] Backend integration for form submissions
- [ ] Blog section with articles
- [ ] Dark mode toggle
- [ ] Multiple language support
- [ ] Google Analytics integration
- [ ] SEO optimization
- [ ] Testimonials section
- [ ] Newsletter signup

## 📚 Learn More

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [CSS Glassmorphism](https://glassmorphism.com)
- [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)

---

**Built with ❤️ using React & Modern Web Technologies**

*Last Updated: 2026*
