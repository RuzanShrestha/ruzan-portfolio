import { portfolioData } from '../../data/portfolio'

export function Sidebar() {
  return (
    <aside className="lg:sticky lg:top-0 lg:h-screen border-b border-zinc-200 p-6 lg:border-b-0 lg:border-r lg:p-10 dark:border-zinc-800">
      <div className="flex h-full flex-col justify-between gap-10">
        <div className="space-y-6">
          <div className="h-13 w-13 rounded-full bg-purple-100 border border-purple-300 flex items-center justify-center font-serif text-purple-800 text-lg font-medium">
            RS
          </div>

          <div>
            <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
              {portfolioData.name}
            </h1>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              {portfolioData.title}
            </p>
            <p className="text-sm text-zinc-500">{portfolioData.location}</p>
          </div>

          <p className="leading-7 text-zinc-700 dark:text-zinc-300">
            Full-stack developer building scalable, production-ready applications with React, TypeScript, and modern backend systems.
          </p>

          <div className="flex flex-col gap-3 text-sm">
            <a
              href={portfolioData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              View Resume
            </a>
            <a href={`mailto:${portfolioData.email}`} className="underline">
              Contact Me
            </a>
            <a href={portfolioData.github} className="underline" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={portfolioData.linkedin} className="underline" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>

        <p className="text-xs text-zinc-500">© 2026 Ruzan Shrestha</p>
      </div>
    </aside>
  )
}