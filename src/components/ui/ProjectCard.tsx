import type { Project } from '../../types/portfolio'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="grid gap-6 rounded-2xl border border-zinc-200 p-6 transition hover:shadow-lg dark:border-zinc-800">
      <div>
        <p className="text-sm text-zinc-500">{project.subtitle}</p>
        <h3 className="mt-1 text-xl font-semibold text-zinc-900 dark:text-white">
          {project.title}
        </h3>
      </div>

      <p className="text-zinc-600 dark:text-zinc-400">{project.description}</p>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <span
            key={item}
            className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="flex gap-4 text-sm font-medium">
        {project.liveUrl && (
          <a href={project.liveUrl} className="underline" target="_blank" rel="noreferrer">
            Live Demo
          </a>
        )}
        {project.githubUrl && (
          <a href={project.githubUrl} className="underline" target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}
      </div>
    </article>
  )
}