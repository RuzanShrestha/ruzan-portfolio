import type { PortfolioData } from '../types/portfolio'

export const portfolioData: PortfolioData = {
  name: 'Ruzan Shrestha',
  title: 'Software Developer',
  location: 'Queensland, Australia',
  summary:
    'ICT Master’s (B.IT SE) and full-stack developer specializing in AI automation, modular microservices, and Chrome extensions. Strategic problem-solver expert at bridging complex backend logic with efficient user interfaces.',
  email: 'shrestharuzan15@gmail.com',
  github: 'https://github.com/RuzanShrestha',
  linkedin: 'https://www.linkedin.com/in/ruzan-s/',
  resumeUrl: `${import.meta.env.BASE_URL}resume.pdf`,
  skills: [
    'JavaScript (React, Next.js, Vite, Node.js, Express.js)',
    'TypeScript',
    'Python',
    'HTML5 & CSS3',
    'Docker',
    'Git & GitHub',
    'AWS & Azure',
    'Chrome Extension APIs',
    'REST APIs',
    'Postman & Chrome DevTools',
    'UI/UX (ShadCN UI, Tailwind CSS)',
    'Agile & Project Management',
  ],
  experience: [
    {
      role: 'Software Engineering Intern',
      company: 'ControlShift AI',
      period: 'Jul 2025 – Nov 2025',
      points: [
        'Contributed to an AI automation startup by developing modular workflow microservices and full-stack features using FastAPI, Docker, and a Vite + React + TypeScript stack.',
        'Developed voice agent interfaces, chatbot editors, and Role-Based Access Control (RBAC) dashboards using React Hook Form, Zod, and ShadCN UI.',
        'Optimized frontend-backend integration, significantly improving API communication efficiency and system reliability.',
        'Demonstrated strong proficiency with Git and GitHub for version control, managing complex codebases and ensuring seamless collaboration within a remote team environment.',
      ],
    },
  ],
  projects: [
    {
      title: 'Smart Bookmark Organizer',
      subtitle: 'Chrome Extension + Full Stack App',
      description:
        'A full-stack Chrome extension that leverages LLaMA 3 (via Groq Cloud) to automatically categorize bookmarks. Engineered with a minimalist popup UI and a stateless Express.js backend to prioritize user privacy and performance.',
      tech: ['JavaScript', 'Node.js', 'Express.js', 'Chrome APIs', 'Groq Cloud', 'Render'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'AI Chatbot',
      subtitle: 'Frontend + LLM Integration',
      description:
        'A real-time AI interface featuring a responsive React frontend and an Express.js backend. Integrated Meta’s LLaMA 3 for intelligent language processing, focusing on component-driven development and scalable state management.',
      tech: ['React', 'Vite', 'Express.js', 'Meta LLaMA 3', 'Groq Cloud', 'Render'],
      liveUrl: 'https://ruzanshrestha.github.io/chatbot',
      githubUrl: '#',
    },
  ],
}