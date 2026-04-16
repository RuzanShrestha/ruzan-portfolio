type SkillBadgeProps = {
  label: string
}

export function SkillBadge({ label }: SkillBadgeProps) {
  return (
    <span className="rounded-full border border-zinc-300 px-3 py-1 text-sm text-zinc-700 dark:border-zinc-700 dark:text-zinc-300">
      {label}
    </span>
  )
}