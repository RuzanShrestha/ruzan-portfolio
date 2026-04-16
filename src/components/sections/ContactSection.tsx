import { portfolioData } from '../../data/portfolio'
import { SectionTitle } from '../ui/SectionTitle'

export function ContactSection() {
  return (
    <section className="space-y-4">
      <SectionTitle>Contact</SectionTitle>
      <p className="text-zinc-600 dark:text-zinc-400">
        I am open to graduate software roles, internships, and collaboration opportunities.
      </p>
      <a href={`mailto:${portfolioData.email}`} className="inline-block underline">
        {portfolioData.email}
      </a>
    </section>
  )
}