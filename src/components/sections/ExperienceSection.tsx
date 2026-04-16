import { portfolioData } from '../../data/portfolio'
import { SectionTitle } from '../ui/SectionTitle'

export function ExperienceSection() {
  return (
    <section className="space-y-8">
      <SectionTitle>Experience</SectionTitle>
      {portfolioData.experience.map((item) => (
        <div key={`${item.company}-${item.role}`} className="space-y-3">
          <div>
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
              {item.role}
            </h3>
            <p className="text-sm text-zinc-500">
              {item.company} · {item.period}
            </p>
          </div>
          <ul className="list-disc space-y-2 pl-5 text-zinc-600 dark:text-zinc-400">
            {item.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}