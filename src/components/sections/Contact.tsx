import { personalInfo } from "../../data/content";
import { SectionHeading } from "../ui/SectionHeading";
import { ScrollReveal } from "../ui/ScrollReveal";
import { ExternalLink } from "lucide-react";

const contactLinks = [
  {
    icon: ExternalLink,
    label: "LinkedIn",
    href: personalInfo.linkedin,
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <SectionHeading
            title="Get in Touch"
            subtitle="Interested in collaborating or have a question? Let's connect."
          />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              const Component = link.href ? "a" : "div";
              return (
                <Component
                  key={link.label}
                  {...(link.href
                    ? {
                        href: link.href,
                        target: "_blank",
                        rel: "noopener noreferrer",
                      }
                    : {})}
                  className="glass-card p-4 flex items-center gap-3 hover:scale-[1.02] transition-transform flex-1"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-primary-500" />
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300 text-left">
                    {link.label}
                  </span>
                </Component>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
