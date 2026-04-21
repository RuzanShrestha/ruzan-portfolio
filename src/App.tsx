import { Sidebar } from './components/layout/Sidebar'
import { ContactSection } from './components/sections/ContactSection'
import { ExperienceSection } from './components/sections/ExperienceSection'
import { HeroSection } from './components/sections/HeroSection'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { SkillsSection } from './components/sections/SkillsSection'
import { SectionNav } from './components/navigation/SectionNav'
import * as Icons from "lucide-react";
console.log(Icons);

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-white">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-[380px_1fr]">
        <Sidebar />



        <div className="min-w-0">
          <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur">
            <div className="px-6 py-4 lg:px-12 xl:px-20">
              <SectionNav />
            </div>
          </header>
          <main className="space-y-20 p-6 lg:p-12 xl:p-20">
            <section id='hero'>
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
    </div>
  )
}