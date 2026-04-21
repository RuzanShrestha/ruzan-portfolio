import { useActiveSection } from '../../hooks/useActiveSection'
import { navItems } from '../../data/navigation'

export const SectionNav = () => {
  const activeSection = useActiveSection(navItems.map((item) => item.id))

  return (
    <nav aria-label="Page sections" className="sticky top-0 z-50 bg-black/80 backdrop-blur w-full max-w-xl">
      <ul className="flex items-center justify-between">
        {navItems.map((item) => {
          const isActive = activeSection === item.id

          return (
            <li key={item.id}>
              <a
                href={item.href}
                className={`text-sm transition ${
                  isActive
                    ? 'font-semibold text-zinc-900 dark:text-white'
                    : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
                }`}
              >
                {item.label}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
