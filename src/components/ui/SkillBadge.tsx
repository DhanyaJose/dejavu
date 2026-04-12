interface SkillBadgeProps {
  skill: string;
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <span className="px-3 py-1.5 text-sm font-medium rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400 border border-primary-500/20 transition-colors hover:bg-primary-500/20">
      {skill}
    </span>
  );
}
