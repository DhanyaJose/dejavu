import type { Experience } from "../../data/content";
import { ScrollReveal } from "./ScrollReveal";

interface TimelineItemProps {
  experience: Experience;
  index: number;
}

export function TimelineItem({ experience, index }: TimelineItemProps) {
  return (
    <ScrollReveal delay={index * 100}>
      <div className="relative pl-8 pb-10 border-l-2 border-gray-200 dark:border-gray-800 last:border-l-0 last:pb-0">
        {/* Timeline dot */}
        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-500 border-2 border-white dark:border-gray-950" />

        <div className="glass-card p-5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
            <h3 className="text-lg font-semibold">{experience.company}</h3>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {experience.period}
            </span>
          </div>
          <p className="text-primary-600 dark:text-primary-400 font-medium text-sm mb-3">
            {experience.role}
          </p>
          <ul className="space-y-2">
            {experience.highlights.map((highlight, i) => (
              <li
                key={i}
                className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex gap-2"
              >
                <span className="text-primary-500 mt-1 shrink-0">▸</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ScrollReveal>
  );
}
