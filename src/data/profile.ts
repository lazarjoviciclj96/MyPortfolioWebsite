// Central content store for the site.
// Sourced from Lazar's LinkedIn profile and resume — update here, not in components.

export const personal = {
  name: "Lazar Jovičić",
  handle: "lazarjoviciclj96",
  role: "Manual & Automation QA Engineer",
  location: "Novi Sad, Vojvodina, Serbia",
  email: "lazarjoviciclj96@gmail.com",
  linkedin: "https://www.linkedin.com/in/lazarjovicic96/",
  github: "https://github.com/lazarjoviciclj96",
  resumeUrl: "/resume.pdf",
  headshot: "/headshot.png",
};

export const hero = {
  eyebrow: "Open to work",
  headline: "Bugs are expensive.",
  headlineAccent: "I make sure you don't pay for them.",
  subheadline:
    "Nearly 5 years preventing costly production incidents through sharp manual testing, Playwright automation, and AI-augmented workflows that cut testing time by ~40% - all while keeping the defect escape rate under 3%.",
  primaryCta: { label: "View projects", href: "#projects" },
  secondaryCta: { label: "Let's talk", href: "#contact" },
  stats: [
    { label: "Years Experience", value: "5+" },
    { label: "Defect Escape Rate", value: "<3%" },
    { label: "Faster Automation", value: "~40%" },
  ],
};

export const about = {
  summary:
    "Manual and Automation QA Engineer passionate about shipping reliable software — combining manual testing, automation, and AI-assisted testing practices to catch bugs early, before they reach end users. I work best in small to medium-sized teams, specialize in SaaS products, and I'm a confident communicator who enjoys mentoring junior testers and bridging the gap between QA, engineering, and stakeholders.",
  experience: [
    {
      role: "QA Manual & Automation Engineer",
      company: "INSSIO Solutions",
      period: "Mar 2025 — Present",
      location: "Remote",
      bullets: [
        "End-to-end manual (ATDD) and Playwright .NET automated testing for a production web platform, with zero critical regression escapes across 3 major releases.",
        "Leveraged AI tools (Claude, GitHub Copilot) to accelerate Playwright script generation, reducing test authoring time by ~40% and freeing capacity for exploratory coverage.",
        "Drive STLC/SDLC test planning and execution in a fast-paced Agile team, delivering sprint-ready test cycles within tight release windows.",
        "Own defect lifecycle in Azure DevOps — from root cause analysis through resolution tracking — maintaining defect escape rate below 3%.",
        "Produce test progress, risk, and release readiness reports for technical and non-technical stakeholders, enabling data-driven go/no-go decisions.",
        "Established test documentation standards, contributing to a 25% reduction in onboarding time for new QA team members.",
      ],
    },
    {
      role: "QA Manual & Automation Engineer",
      company: "VRIZE",
      period: "Dec 2022 — Feb 2025",
      location: "Remote",
      bullets: [
        "Designed, maintained, and executed comprehensive manual and Selenium (Java) automated test suites across enterprise applications, improving defect detection rate by 30%.",
        "Performed thorough end-to-end and regression testing aligned with business requirements and specifications in Agile sprints.",
        "Partnered with developers and product managers to define testing scope, acceptance criteria, and quality objectives from project inception.",
        "Led defect investigation and root cause analysis, contributing to a measurable reduction in recurring production issues.",
        "Tracked and reported all defects in Jira, maintaining 100% traceability between test cases and requirements.",
      ],
    },
    {
      role: "Quality Assurance Tester",
      company: "Growthmill",
      period: "Nov 2021 — Dec 2022",
      location: "Remote",
      bullets: [
        "Authored Gherkin-based test scenarios and test cases from acceptance criteria, establishing a BDD testing foundation for the QA function.",
        "Executed smoke and regression testing across sprint cycles, consistently identifying critical defects before deployment.",
        "Collaborated with developers in Jira for defect documentation, tracking, and resolution across multiple concurrent projects.",
        "Supported cross-project QA coverage, contributing to delivery of 8+ product releases with zero critical production incidents.",
      ],
    },
  ],
  education: [
    {
      degree: "Technician of Mechatronics",
      school: "Polytechnics — School for New Technologies, Belgrade",
      period: "",
    },
  ],
  certifications: [
    {
      name: "ISTQB CT-GenAI — Testing with Generative AI",
      issuer: "SEETB",
      status: "In progress",
    },
    { name: "ISTQB Foundation Level", issuer: "SEETB", status: "Issued Dec 2025" },
    {
      name: "Playwright Automation Testing from Scratch with Framework",
      issuer: "Udemy",
      status: "Issued Jul 2024",
    },
    { name: "Software Testing Masterclass", issuer: "Udemy", status: "Issued Jul 2022" },
    {
      name: "Postman: The Complete Guide — REST API Testing",
      issuer: "Udemy",
      status: "Issued Sep 2022",
    },
    { name: "Selenium WebDriver with Java", issuer: "Udemy", status: "Issued Jan 2023" },
    { name: "SQL for Testers", issuer: "LinkedIn Learning", status: "Issued Nov 2024" },
    { name: "PostgreSQL Essential Training", issuer: "LinkedIn Learning", status: "Issued Oct 2024" },
    { name: "JMeter: Performance and Load Testing", issuer: "LinkedIn Learning", status: "Issued Nov 2023" },
    { name: "Cypress Full Course — End to End Testing Tool for the Modern Web", issuer: "codedamn", status: "Issued May 2022" },
    { name: "Git Going Fast: One Hour Git Crash Course", issuer: "Udemy", status: "Issued May 2023" },
  ],
  skills: {
    "Manual & Process": [
      "Exploratory Testing",
      "STLC / SDLC",
      "Regression Testing",
      "API Testing (Postman, Swagger)",
      "SQL & DB Validation",
      "Agile / Scrum",
    ],
    Automation: [
      "Playwright (.NET/TS/JS)",
      "Selenium WebDriver",
      "TestNG",
      "xUnit / nUnit",
      "JMeter",
      "Cypress",
    ],
    "AI-Augmented Testing": [
      "GitHub Copilot",
      "Claude",
      "ChatGPT",
      "AI Test Generation",
    ],
    Languages: ["Java", "C# (.NET)", "SQL"],
    "Tools & Process": ["Jira", "X-Ray", "Azure DevOps", "Git", "CI/CD"],
  },
};

export const projects = [
  {
    title: "Zero-Escape Regression Program",
    company: "INSSIO Solutions",
    description:
      "End-to-end manual (ATDD) and Playwright .NET automation for a production web platform. Used AI-assisted script generation to cut authoring time by ~40%, with zero critical regression escapes across 3 major releases.",
    tags: ["Playwright", ".NET", "Azure DevOps", "AI-assisted"],
    metric: "0 critical escapes / 3 releases",
  },
  {
    title: "Enterprise Automation Overhaul",
    company: "VRIZE",
    description:
      "Designed and maintained manual and Selenium (Java) automated test suites across enterprise applications, partnering with devs and PMs on acceptance criteria from project inception.",
    tags: ["Selenium", "Java", "Jira"],
    metric: "+30% defect detection rate",
  },
  {
    title: "BDD Testing Foundation",
    company: "Growthmill",
    description:
      "Authored Gherkin-based test scenarios and cases from acceptance criteria, establishing a BDD testing foundation and running smoke/regression cycles across multiple concurrent projects.",
    tags: ["Gherkin", "BDD", "Jira"],
    metric: "8+ releases, zero critical incidents",
  },
];

export const referrals = [
  {
    quote:
      "Lazar has a rare eye for edge cases — he consistently caught issues in QA that would have been costly in production.",
    name: "Colleague Name",
    title: "Engineering Manager",
  },
  {
    quote:
      "Reliable, detail-oriented, and great at communicating exactly what's broken and why. A strong addition to any QA team.",
    name: "Colleague Name",
    title: "Senior Developer",
  },
];

export const contact = {
  heading: "Let's build something reliable.",
  subheading:
    "Open to QA roles, contract testing work, or just talking shop about test strategy. Reach out any time.",
};
