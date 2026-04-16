import { portfolioData } from '../../data/portfolio'
import { SectionTitle } from '../ui/SectionTitle'
import { SkillBadge } from '../ui/SkillBadge'

export function SkillsSection() {
  return (
    <section className="space-y-8">
      <SectionTitle>Skills</SectionTitle>
      <div className="flex flex-wrap gap-3">
        {portfolioData.skills.map((skill) => (
          <SkillBadge key={skill} label={skill} />
        ))}
      </div>
    </section>
  )
}