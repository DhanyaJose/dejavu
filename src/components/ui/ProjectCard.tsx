import type { Project } from "../../data/content";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="glass-card p-6 hover:scale-[1.02] transition-transform duration-300">
      <div className="mb-4">
        <div className="text-3xl font-bold gradient-text">{project.metric}</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {project.metricLabel}
        </div>
      </div>
      <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-xs rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
