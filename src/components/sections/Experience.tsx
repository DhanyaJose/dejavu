import { experiences } from "../../data/content";
import { SectionHeading } from "../ui/SectionHeading";
import { ScrollReveal } from "../ui/ScrollReveal";
import { TimelineItem } from "../ui/TimelineItem";

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <SectionHeading
            title="Experience"
            subtitle="Two decades of engineering leadership across Social Media, Travel, and Logistics"
          />
        </ScrollReveal>

        <div className="mt-8">
          {experiences.map((exp, i) => (
            <TimelineItem key={exp.company + exp.period} experience={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
