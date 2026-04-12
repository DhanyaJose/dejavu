export const personalInfo = {
  name: "Dhanya Elizabath Jose",
  title: "Engineering Manager",
  location: "London, UK",
  linkedin: "https://linkedin.com/in/dej369",
  typewriterRoles: [
    "Engineering Manager",
    "Engineer at Heart",
    "Technical Program Manager",
    "Continuous Learner",
    "Platform Architect",
    "AI Systems Builder",
  ],
  summaryIntro:
    'With two decades of experience at <strong>Meta</strong> & <strong>Egencia</strong> (an Amex GBT Company), I focus on building teams that deliver:',
  summaryPoints: [
    { label: "Scale", text: "Managed 20+ engineers across complex, cross-functional projects." },
    { label: "Efficiency", text: 'Architected platform deprecations resulting in <strong>£12M annual cost savings</strong>.' },
    { label: "Vision", text: 'Designed "North Star" microservices while mentoring the next generation of leadership.' },
    { label: "Reliability", text: "Systems built for billions of transactions without sacrificing velocity/topline metrics." },
  ],
};

export interface Experience {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    company: "Meta",
    role: "Technical Program Manager",
    period: "May 2022 – Present",
    highlights: [
      "Focus was on T in the TPM.",
      "Leading 7-workstream migration of Instagram & Threads notification systems across 20+ engineers from 4 teams, handling billions of daily transactions",
      "Built Multi-Agent GenAI system (RAG/LLM) that automated 55% of support tickets, saving ~150 engineering hours/year",
      "Orchestrated a legacy product deprecation (1M users), yielding £12M+ in annual AWS cost savings",
      "Directed EU DSA regulatory compliance for Meta Content Library, halting regulatory investigations",
      "Architected data foundation strategy achieving 100% data integrity and 70% increase in device ID coverage",
    ],
  },
  {
    company: "EPAM",
    role: "Technical Project Manager",
    period: "Dec 2021 – Mar 2022",
    highlights: [
      "Scaled cross-functional engineering team from 80 to 125 engineers in 4 months",
      "Transformed onboarding and technical engagement programs while maintaining delivery velocity",
    ],
  },
  {
    company: "Egencia (via IBS Software)",
    role: "Senior Engineering Manager",
    period: "2015 – 2021",
    highlights: [
      "Led 3 Rail teams with 25+ engineers, managers, and architects — grew org from 12 to 25+",
      "Designed market-agnostic Rail booking framework unifying three brands (Egencia, Expedia, Traveldoo)",
      "Spearheaded legacy-to-microservices migration, improving deployment frequency by 30%",
      "Integrated Silverrail, Amadeus, Trainline, and Deutsche Bahn APIs into unified platform",
    ],
  },
  {
    company: "Cognizant",
    role: "Technical Lead",
    period: "2010 – 2014",
    highlights: [
      "Directed execution for global multi-carrier e-commerce platform",
      "Led proof-of-concept programs driving technology adoption",
    ],
  },
  {
    company: "IBS Software",
    role: "Solution Architect / Team Leader",
    period: "2005 – 2014",
    highlights: [
      "Architected car-supply GDS integrations across Amadeus, Sabre, and Travelport",
      "Owned full SDLC delivery for airline reservation and seating products across international markets",
    ],
  },
];

export interface Project {
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: "Instagram & Threads Notification Migration",
    description:
      "Leading a multi-year, 7-workstream migration of notification systems. Managing 20+ engineers across 4 teams to modernize platforms handling billions of daily transactions.",
    metric: "0.5 MW",
    metricLabel: "Projected compute savings by H1 2027",
    tags: ["Distributed Systems", "Migration", "Scale"],
  },
  {
    title: "AI Multi-Agent Support System",
    description:
      "Built a RAG/LLM-powered multi-agent system that automated support ticket resolution, significantly improving platform NPS and engineering productivity.",
    metric: "55%",
    metricLabel: "Tickets automated",
    tags: ["GenAI", "RAG", "LLM", "Automation"],
  },
  {
    title: "CrowdTangle Deprecation",
    description:
      "Orchestrated full deprecation lifecycle of CrowdTangle (1M users), including 6-month data deletion initiative and cost-effective backup pipelines with 100% legal compliance.",
    metric: "£12M+",
    metricLabel: "Annual AWS savings",
    tags: ["Cloud FinOps", "Deprecation", "Compliance"],
  },
  {
    title: "EU DSA Regulatory Compliance",
    description:
      "Directed technical execution of Meta Content Library UI & API for the European Commission. Deployed rapid-response displays that halted active regulatory investigations.",
    metric: "100%",
    metricLabel: "Regulatory compliance achieved",
    tags: ["Regulatory", "EU DSA", "API Design"],
  },
  {
    title: "Rail Platform Unification",
    description:
      "Designed a market-agnostic booking framework that unified three brands and integrated four major rail API providers into a single platform.",
    metric: "3",
    metricLabel: "Brands unified on one platform",
    tags: ["Platform", "Microservices", "API Integration"],
  },
  {
    title: "Voice of Customer Framework",
    description:
      "Built and operationalized an engineering-led VoC framework across all internal customer teams, reducing roadmap misalignment and improving feature-request turnaround.",
    metric: "55%",
    metricLabel: "Faster feature-request turnaround",
    tags: ["Process", "Stakeholder Alignment", "Governance"],
  },
];

export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Architecture & Systems",
    skills: [
      "Distributed Systems",
      "Microservices (SOA)",
      "High-Availability Architecture",
      "Platform Migration",
      "API Design",
      "AWS",
      "Cloud FinOps",
      "Performance Tuning",
      "Observability",
    ],
  },
  {
    name: "Data & AI",
    skills: [
      "LLMs",
      "RAG",
      "AI-assisted Engineering",
      "Data Analytics",
      "Business Intelligence",
      "Data Modeling",
    ],
  },
  {
    name: "Leadership & Operations",
    skills: [
      "Org Management (25+ engineers)",
      "Stakeholder Alignment",
      "Hiring & Performance Frameworks",
      "Mentoring ICs & Managers",
      "Roadmap Execution",
      "Capacity Planning",
      "Vendor Management",
    ],
  },
  {
    name: "Governance & Domain",
    skills: [
      "Agile (Scrum/Kanban)",
      "GDPR/DSA/FTC",
      "TravelTech & GDS",
      "Big Tech",
      "E-commerce",
      "Logistics",
      "Waterfall Methodologies",
      "SDLC",
      "Incident Management",
      "TDD/BDD",
    ],
  },
  {
    name: "Tools & Technologies",
    skills: [
      "Java",
      "Spring",
      "Apache Camel",
      "Python",
      "R (Basic)",
      "REST/SOAP",
      "Kafka",
      "RabbitMQ",
      "Docker",
      "Kubernetes",
      "SQL",
      "MongoDB",
      "PostgreSQL",
      "Hive",
      "MySQL",
      "Git",
      "Maven",
      "JIRA",
      "Confluence",
      "Tableau",
      "MS Office Suite",
    ],
  },
  {
    name: "Soft Skills",
    skills: [
      "Interpersonal & Communication",
      "Thought Leadership",
      "Team Player",
      "Problem Solving",
      "Attention to Detail",
      "Organizational Skills",
      "Poised Under Pressure",
    ],
  },
];

export interface Education {
  degree: string;
  institution: string;
  period: string;
  detail?: string;
}

export const education: Education[] = [
  {
    degree: "Executive PG Diploma in Data Science",
    institution: "IIIT-Bangalore & UpGrad",
    period: "2021 – 2022",
    detail: "Specialization in Business Intelligence & Data Analytics — CGPA: 3.65/4",
  },
  {
    degree: "B.Tech, Electronics & Communications Engineering",
    institution: "MA College of Engineering",
    period: "2001 – 2005",
  },
];

export const awards = [
  "Certificate of Excellence — IBS Software (2006, 2017)",
  "Customer Champ — IBS Software (2018)",
  'Speaker, "Inner Sourcing Strategies" — Expedia Tech Talk 2019',
];

export const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "25+", label: "Engineers Led" },
  { value: "Billions", label: "Daily Transactions" },
  { value: "£12M+", label: "Cost Savings" },
  { value: "0 -> 1", label: "Product Launch" },
];

export const navLinks = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "learnings", label: "Learnings" },
  { id: "contact", label: "Contact" },
];
