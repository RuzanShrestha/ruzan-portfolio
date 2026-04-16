type SectionTitleProps = {
  children: React.ReactNode
}

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
      {children}
    </h2>
  )
}