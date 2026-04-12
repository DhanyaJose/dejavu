import { SectionHeading } from "../ui/SectionHeading";
import { ScrollReveal } from "../ui/ScrollReveal";
import { Lightbulb } from "lucide-react";

export function ComingSoon() {
  return (
    <section id="learnings" className="py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <SectionHeading
            title="Learnings from Projects"
            subtitle="Insights and takeaways from two decades of building at scale"
          />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="glass-card p-12 flex flex-col items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-primary-500/10 flex items-center justify-center">
              <Lightbulb size={28} className="text-primary-500" />
            </div>
            <h3 className="text-xl font-semibold gradient-text">Coming Soon</h3>
            <p className="text-gray-500 dark:text-gray-400 max-w-md">
              A collection of hard-won lessons from leading platform migrations,
              building AI systems, and scaling engineering teams — stay tuned.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
