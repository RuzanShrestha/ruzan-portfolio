import { Sidebar } from './components/layout/Sidebar'
import { ContactSection } from './components/sections/ContactSection'
import { ExperienceSection } from './components/sections/ExperienceSection'
import { HeroSection } from './components/sections/HeroSection'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { SkillsSection } from './components/sections/SkillsSection'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-white">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-[380px_1fr]">
        <Sidebar />

        <main className="space-y-20 p-6 lg:p-12 xl:p-20">
          <section id='about'>
            <HeroSection />
          </section>

          <section id="experience">
            <ExperienceSection />
          </section>

          <section id="projects">
            <ProjectsSection />
          </section>

          <section id="skills">
            <SkillsSection />
          </section>

          <section id="contact">
            <ContactSection />
          </section>
        </main>
      </div>
    </div>
  )
}