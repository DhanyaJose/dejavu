import { personalInfo, stats } from "../../data/content";
import { TypewriterText } from "../ui/TypewriterText";
import { DotGridBackground } from "../ui/DotGridBackground";
import { scrollToSection } from "../../lib/utils";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12"
    >
      <DotGridBackground />

      {/* Hero orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-4 mb-2">
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 shrink-0 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 p-[3px]">
            <img
              src="/Photo.png"
              alt="Dhanya"
              className="w-full h-full rounded-full object-cover object-top"
            />
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-left">
            Hello, I am <span className="gradient-text">Dhanya.</span>
            <br />
            <span className="text-xs font-normal text-gray-400 dark:text-gray-500">(She/Her/Hers)</span>
          </h1>
        </div>

        <div className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-8 h-10">
          <TypewriterText strings={personalInfo.typewriterRoles} />
        </div>

        {/* About — summary + stats */}
        <div className="text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto mb-8 text-left">
          <p
            className="mb-4"
            dangerouslySetInnerHTML={{ __html: personalInfo.summaryIntro }}
          />
          <ul className="space-y-3 list-disc list-inside">
            {personalInfo.summaryPoints.map((point) => (
              <li key={point.label}>
                <strong className="text-gray-800 dark:text-gray-200">{point.label}:</strong>{" "}
                <span dangerouslySetInnerHTML={{ __html: point.text }} />
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10 max-w-3xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="glass-card p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-4 justify-center mt-10">
          <button
            onClick={() => scrollToSection("projects")}
            className="px-6 py-3 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-medium transition-colors"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium transition-colors"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}
