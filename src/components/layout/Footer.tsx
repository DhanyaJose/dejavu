import { personalInfo } from "../../data/content";
import { ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-gray-200/50 dark:border-gray-800/50">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} {personalInfo.name}
        </p>
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-primary-500 transition-colors"
          aria-label="LinkedIn"
        >
          LinkedIn <ExternalLink size={14} />
        </a>
      </div>
    </footer>
  );
}
