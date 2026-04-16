import { portfolioData } from '../../data/portfolio'

export function HeroSection() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-semibold leading-tight text-zinc-900 dark:text-white md:text-5xl">
        I build practical software products with React, TypeScript, backend APIs, and AI integrations.
      </h2>
      <p className="max-w-3xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        {portfolioData.summary}
      </p>
    </section>
  )
}