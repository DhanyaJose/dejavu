import { education, awards } from "../../data/content";
import { SectionHeading } from "../ui/SectionHeading";
import { ScrollReveal } from "../ui/ScrollReveal";
import { GraduationCap, Award } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <SectionHeading title="Education & Recognition" />
        </ScrollReveal>

        <div className="space-y-6 mb-12">
          {education.map((edu, i) => (
            <ScrollReveal key={edu.degree} delay={i * 100}>
              <div className="glass-card p-6 flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center">
                  <GraduationCap size={20} className="text-primary-500" />
                </div>
                <div>
                  <h3 className="font-semibold">{edu.degree}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {edu.institution} · {edu.period}
                  </p>
                  {edu.detail && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {edu.detail}
                    </p>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <h3 className="text-lg font-semibold mb-4 text-center">Awards & Speaking</h3>
          <div className="space-y-3">
            {awards.map((award) => (
              <div
                key={award}
                className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400"
              >
                <Award size={16} className="text-accent-500 shrink-0" />
                <span>{award}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
