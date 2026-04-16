export type Project = {
  title: string
  subtitle: string
  description: string
  tech: string[]
  liveUrl?: string
  githubUrl?: string
}

export type Experience = {
  role: string
  company: string
  period: string
  points: string[]
}

export type PortfolioData = {
  name: string
  title: string
  location: string
  summary: string
  email: string
  github: string
  linkedin: string
  resumeUrl: string
  skills: string[]
  experience: Experience[]
  projects: Project[]
}