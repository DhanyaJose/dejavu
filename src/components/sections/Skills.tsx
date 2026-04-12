import { skillCategories } from "../../data/content";
import { SectionHeading } from "../ui/SectionHeading";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SkillBadge } from "../ui/SkillBadge";

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <SectionHeading title="Skills & Expertise" />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, i) => (
            <ScrollReveal key={category.name} delay={i * 100}>
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-4">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <SkillBadge key={skill} skill={skill} />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
