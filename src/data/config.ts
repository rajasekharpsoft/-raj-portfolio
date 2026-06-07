import type { PortfolioConfig } from '../types/portfolio';

// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE to update your portfolio content.
//  No other file needs to be touched for content changes.
// ─────────────────────────────────────────────────────────────

export const PORTFOLIO: PortfolioConfig = {
  personal: {
    name: 'V. Rajasekhar',
    tagline: 'Building things for the web.',
    roles: [
      'Software Engineer',
      'Full-Stack Developer',
      'React Specialist',
      'Problem Solver',
    ],
    bio: `I'm a passionate software engineer who loves crafting clean, performant web applications.
I enjoy turning complex problems into simple, beautiful, and intuitive solutions.
When I'm not coding, you'll find me exploring new technologies and open-source projects.`,
    avatar: '/avatar.jpg',          // drop your photo at public/avatar.jpg
    location: 'India',
    email: 'razakroq44@gmail.com',
    resume: '/resume.pdf',          // drop your resume at public/resume.pdf
  },

  social: {
    github: 'https://github.com/rajasekharvanjetiai',   // update with your real GitHub
    linkedin: 'https://www.linkedin.com/in/rajasekharvanjetiai',
    twitter: '',
  },

  experience: [
    {
      company: 'Your Company',
      role: 'Software Engineer',
      period: 'Jan 2023 – Present',
      location: 'Remote',
      bullets: [
        'Built and maintained scalable web applications using React and TypeScript.',
        'Collaborated with cross-functional teams to deliver features on time.',
        'Improved application performance by 40% through code optimisation.',
      ],
    },
    {
      company: 'Previous Company',
      role: 'Frontend Developer',
      period: 'Jun 2021 – Dec 2022',
      location: 'Hyderabad, India',
      bullets: [
        'Developed responsive UI components consumed by 10k+ users.',
        'Integrated REST APIs and managed state with Redux Toolkit.',
        'Mentored 2 junior developers on React best practices.',
      ],
    },
  ],

  skills: {
    Frontend: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
    Backend: ['Node.js', 'Express', 'REST APIs', 'GraphQL'],
    Database: ['PostgreSQL', 'MongoDB', 'MySQL'],
    Tools: ['Git', 'Docker', 'AWS', 'Vite', 'Webpack', 'Figma'],
  },

  projects: [
    {
      title: 'Project Alpha',
      description:
        'A full-stack web application for managing tasks and team collaboration in real time. Built with React, Node.js, and PostgreSQL.',
      tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
      github: 'https://github.com/rajasekharvanjetiai/project-alpha',
      live: '',
      image: '/projects/alpha.png',
      featured: true,
    },
    {
      title: 'Project Beta',
      description:
        'An e-commerce platform with cart management, payment integration, and admin dashboard.',
      tags: ['React', 'Stripe', 'MongoDB', 'Express'],
      github: 'https://github.com/rajasekharvanjetiai/project-beta',
      live: 'https://project-beta.vercel.app',
      image: '/projects/beta.png',
      featured: true,
    },
    {
      title: 'Dev Tools CLI',
      description:
        'A command-line utility that automates repetitive development tasks and project scaffolding.',
      tags: ['Node.js', 'TypeScript', 'CLI'],
      github: 'https://github.com/rajasekharvanjetiai/dev-tools-cli',
      live: '',
      image: '',
      featured: false,
    },
  ],

  contact: {
    // Sign up at https://www.emailjs.com and paste your keys here
    emailjsServiceId: '',
    emailjsTemplateId: '',
    emailjsPublicKey: '',
  },
};
