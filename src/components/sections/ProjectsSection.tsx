import { portfolioData } from '../../data/portfolio'
import { SectionTitle } from '../ui/SectionTitle'
import { ProjectCard } from '../ui/ProjectCard'

export function ProjectsSection() {
  return (
    <section className="space-y-8">
      <SectionTitle>Projects</SectionTitle>
      <div className="grid gap-6">
        {portfolioData.projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}