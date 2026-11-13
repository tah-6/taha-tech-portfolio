// Single source of site content. Every page renders from this file.
// All wording comes from PORTFOLIO_SPEC.md §1–§6.
// Search for "TODO(Taha)" to find every item that is still open.

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

export type NavItem = { label: string; href: string };

export type Experience = {
  id: string;
  role: string;
  company: string;
  /** Short descriptor shown next to the company name. */
  companyNote?: string;
  /** Date range, shown in monospace. */
  date: string;
  /** Extra detail next to the date, e.g. contract length. */
  note?: string;
  location?: string;
  bullets: string[];
  /** Tools or skills named in the bullets, shown as chips on the card back. */
  chips?: string[];
};

export type ProjectCategory = "embedded" | "software";

export type ProjectImage = { src: string; alt: string };

export type Project = {
  slug: string;
  title: string;
  /** Short descriptor after the title. */
  tagline?: string;
  /** Date range, shown in monospace. */
  date?: string;
  /** Kind of project, e.g. "Course project". */
  context?: string;
  category: ProjectCategory;
  featured?: boolean;
  inProgress?: boolean;
  stack: string[];
  bullets: string[];
  github?: string;
  live?: string;
  /** Measured results. Only real numbers go here. */
  results?: string[];
  /** Files under /public/projects/<slug>/. */
  images?: ProjectImage[];
  /** Kept in the data but not shown anywhere on the site. */
  hidden?: boolean;
};

export type Education = {
  school: string;
  degree: string;
  date: string;
  location: string;
  coursework: string[];
};

export type Certification = { name: string; url?: string };

export type SkillGroup = { label: string; items: string[] };

/* ------------------------------------------------------------------ */
/* §1 Positioning                                                      */
/* ------------------------------------------------------------------ */

export const profile = {
  name: "Syed Taha Irfan",
  headline:
    "Computer Engineering student building embedded firmware and hardware test systems.",
  subline:
    "B.Eng Computer Engineering (Co-op) at the University of Guelph. Interested in embedded/firmware, hardware validation and test.",
  availability: "Open to co-op roles: Winter 2027 & Summer 2027",
  location: "Milton, ON",
  email: "irfans@uoguelph.ca",
  /** TODO(Taha): export the PDF from Overleaf to /public/Taha_Irfan_Resume.pdf. */
  resumePath: "/Taha_Irfan_Resume.pdf",
} as const;

export const links = {
  github: "https://github.com/tah-6",
  linkedin: "https://www.linkedin.com/in/taha-irfan-57547525a/",
  email: `mailto:${profile.email}`,
} as const;

export const nav: NavItem[] = [
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Resume", href: "/resume" },
];

/** Contact section sentence (§8). */
export const contactBlurb =
  "Looking for Winter/Summer 2027 co-op roles in embedded, firmware and validation. The fastest way to reach me is email.";

/* ------------------------------------------------------------------ */
/* §2 Experience (reverse chronological)                               */
/* ------------------------------------------------------------------ */

export const experience: Experience[] = [
  {
    id: "sunglass-hut",
    role: "Sales Associate",
    company: "Sunglass Hut",
    date: "May 2026 – August 2026",
    note: "4-month contract · In-store",
    location: "Halton Hills, ON",
    // TODO(Taha): §11 needs exactly 3 bullets per card; the spec has 2 here.
    bullets: [
      "Ran in-store demos of Meta smart glasses and polarized lens technology. Explained features and Gen 1 vs Gen 2 differences that customers didn't know about.",
      "Turned technical product explanations into sales: ~$10k in total sales, ~$3k of that from Meta smart glasses.",
    ],
  },
  {
    id: "moves",
    role: "QA / Testing Intern",
    company: "Moves",
    companyNote: "early-stage startup, ~4 people",
    date: "May 2026 – August 2026",
    location: "Remote",
    bullets: [
      "Tested and helped design the company's social platform as part of a 4-person team.",
      "Edited Instagram Reels for the company in Premiere Pro.",
      "Ran manual test cases on the platform and reported the bugs to the lead developer. Bugs included notifications sent at the wrong time or not at all, chat rooms not appearing, no location found for chat rooms, and message filtering not working, which let anyone create rooms on a platform meant for trusted promoters.",
    ],
    chips: ["Premiere Pro"],
  },
  {
    id: "steve-madden",
    role: "Stock Associate",
    company: "Steve Madden",
    date: "May 2023 – Present",
    location: "Halton Hills, ON",
    bullets: [
      "The store manager traced a weekly purse sales drop (~$9,000 → ~$4,000) to customers and staff not being able to find purses. Reorganized the purse inventory and labelled every location with the correct product codes so associates could find any purse quickly.",
      "When the in-store printer stopped working, I was the one who troubleshot and fixed the printing problems.",
      "Sales figures for the following period were not reported back to me, but it was clear that customers and staff could now find purses easily.",
    ],
  },
  {
    id: "guelph-engineering-society",
    role: "Chair & Membership Development Coordinator",
    company: "Guelph Engineering Society",
    date: "Winter 2025",
    location: "Guelph, ON",
    bullets: [
      "Chaired society meetings. Brought many viewpoints from across engineering disciplines together into one direction and made it digestible for a large group.",
      "Coordinated student-engagement initiatives and multidisciplinary team meetings.",
      "Developed strategies to increase membership participation and involvement.",
    ],
  },
];

/** Shown small in an "Also" line below the experience deck, not as a card. */
export const alsoNote = {
  label: "YouTube channel (Winter 2026)",
  text: "Ran a short-form automation channel, editing in CapCut. One Short reached ~10k views.",
} as const;

/* ------------------------------------------------------------------ */
/* §3 Projects (embedded/hardware first, then software)                */
/* ------------------------------------------------------------------ */

export const projects: Project[] = [
  {
    slug: "hil-testbench",
    title: "HIL-Testbench",
    tagline: "Hardware-in-the-loop test bench",
    date: "May 2026 – Sep 2026",
    category: "embedded",
    featured: true,
    stack: [
      "STM32 Nucleo-F446RE",
      "C (firmware)",
      "Python + pyserial",
      "UART",
      "Excel",
    ],
    bullets: [
      "C firmware on an STM32 Nucleo-F446RE communicates over UART with a Python (pyserial) host that drives and logs tests.",
      "Test results are exported and charted in Excel.",
      "The bench runs one test case: response validation.",
    ],
    results: [
      "Measured on-chip GPIO toggle latency at 642 ns, identical across 1,000 trials and again across 10,000 trials, with interrupts disabled during the measurement window.",
      "With interrupts enabled, 6 of 10,000 trials (0.06%) ran long, up to about 1392 ns. The outliers were spaced one CPU cycle apart, consistent with the 1 ms SysTick interrupt firing mid-measurement.",
      "Measured UART round-trip latency at 115200 baud: mean 3816 µs (min 3079 µs, max 4879 µs). Most of the delay is byte transmit time, not MCU processing.",
      "Confirmed the transmit-time explanation by comparing PING and TOGGLE replies: measured a 2672 µs average difference (439 µs std. dev.) against roughly 2 ms predicted from about 86.8 µs per byte.",
      "Pass threshold set at 700–800 ns, above the 642 ns worst case measured.",
    ],
    github: "https://github.com/tah-6/HIL-Testbench",
  },
  {
    slug: "16-bit-single-cycle-cpu",
    title: "16-bit Single-Cycle CPU",
    date: "Jan 2026 – Apr 2026",
    context: "Course project",
    category: "embedded",
    featured: true,
    stack: ["VHDL", "Vivado", "testbench simulation"],
    bullets: [
      "Designed a 16-bit single-cycle CPU in VHDL.",
      "Wrote a VHDL testbench in Vivado that checked each instruction to confirm it worked as intended.",
      "Implements 8 instructions: BNE, SUB, ADD, LW, SW, OR, AND, ADDI.",
    ],
  },
  {
    slug: "wearable-haptic-navigation",
    title: "Wearable Haptic Navigation System",
    date: "May 2025 – Aug 2025",
    context: "Independent project",
    category: "embedded",
    featured: true,
    stack: [
      "Microcontroller firmware (C++)",
      "Bluetooth",
      "motor driver circuit",
      "KiCad (2-layer PCB)",
      "soldering",
    ],
    bullets: [
      "Wearable that guides the user with vibration patterns instead of a phone screen.",
      "Designed the architecture: smartphone GPS/compass data sent over Bluetooth to the wearable.",
      "Wrote firmware that turns direction data into haptic patterns. Designed the motor driver circuit for vibration control.",
      "Hand-soldered and integrated the components into a working prototype. Designed a 2-layer PCB in KiCad (Gerbers ready, not yet fabricated).",
    ],
  },
  {
    slug: "temperature-sensing-pcb",
    title: "Temperature-Sensing PCB",
    date: "Fall 2026",
    context: "Personal project",
    category: "embedded",
    inProgress: true,
    stack: ["KiCad", "STM32", "I2C temperature sensor"],
    bullets: [
      "Designing a custom PCB around an STM32 that reads an I2C temperature sensor.",
    ],
  },
  {
    slug: "automatic-plant-watering-system",
    title: "Automatic Plant Watering System",
    date: "Sep 2023 – Jan 2024",
    context: "Academic project",
    category: "embedded",
    stack: ["Bare-metal embedded firmware", "sensors"],
    bullets: [
      "Autonomous system that monitors soil/environment and controls watering without manual input.",
      "Bare-metal firmware built around a finite state machine, with real-time sensor sampling and control logic.",
      "Added fault detection and error handling so the system recovers safely.",
    ],
  },
  {
    slug: "beets",
    title: "beets",
    tagline: "Large-Scale Software Architecture team project (ENGG*4450)",
    date: "Fall 2026",
    context: "Team of students (Group 07)",
    category: "software",
    stack: ["Python (beets open-source codebase)", "Git/GitHub", "Jira", "UML"],
    bullets: [
      "Working on change requests to the beets open-source music library manager.",
      "Set up the team's Jira board (Scrum/Kanban workflow) and produced the use case diagram. Contributed to the UML class diagram of the codebase.",
      "The team's two bug fixes have been merged and tested.",
    ],
  },
  {
    slug: "courselink",
    title: "CourseLink",
    date: "Jan 2025 – Apr 2025",
    category: "software",
    stack: ["Java", "JavaFX"],
    bullets: [
      "Hand-coded a role-based desktop app in Java and JavaFX with Admin, Faculty and Student dashboards.",
      "Implemented login, session management and role-based access so each role sees only its own features.",
      "Loaded records from CSV files, organizing the logic across dedicated classes with object-oriented design.",
    ],
  },
  {
    slug: "internship-job-tracker",
    title: "Internship & Job Tracker",
    context: "Web app",
    category: "software",
    stack: ["Next.js (React)", "TypeScript", "Tailwind CSS", "Vercel"],
    bullets: [
      "Client-side app to organize and track co-op/internship applications: add, edit, filter, and export/import entries (CSV/JSON).",
      "Designed and built it from scratch, including the component architecture, localStorage persistence, import/export utilities, responsive dark-mode UI, and Vercel deployment.",
    ],
    live: "https://uofg-job-tracker.vercel.app",
    github: "https://github.com/tah-6/uofg-job-tracker",
  },
  {
    slug: "treecleaner",
    title: "TreeCleaner",
    context: "Web app",
    category: "software",
    stack: ["Next.js (React)", "Tailwind CSS", "Vercel"],
    bullets: [
      "Subscription manager that tracks recurring payments and alerts users before free trials convert.",
      // TODO(Taha): add more features only if they really work.
    ],
    live: "https://saasprojecttreecleaner.vercel.app",
  },
];

/** Projects shown on the site, in display order. */
export const visibleProjects = projects.filter((project) => !project.hidden);

/** The three large cards on the home page. */
export const featuredProjects = visibleProjects.filter(
  (project) => project.featured,
);

export const projectCategories: { id: ProjectCategory; label: string }[] = [
  { id: "embedded", label: "Embedded & Hardware" },
  { id: "software", label: "Software" },
];

/* ------------------------------------------------------------------ */
/* §4 Education                                                        */
/* ------------------------------------------------------------------ */

export const education: Education = {
  school: "University of Guelph",
  degree: "B.Eng Computer Engineering (Co-op)",
  // TODO(Taha): graduation month (April or May 2029).
  date: "Sep 2024 – Expected 2029",
  location: "Guelph, ON",
  coursework: [
    "Computer Organization & Architecture",
    "Electric Circuits",
    "Data Structures & Algorithms",
    "Discrete Math",
    "Large-Scale Software Architecture",
    "Optimization for Engineers",
  ],
};

/* ------------------------------------------------------------------ */
/* §5 Certifications                                                   */
/* ------------------------------------------------------------------ */

export const certifications: Certification[] = [
  {
    name: "SOLIDWORKS CSWA (Certified SOLIDWORKS Associate)",
    url: "https://www.credly.com/earner/earned/badge/c1bf5cf4-7d66-4547-bee3-f53a3b169bcf",
  },
  {
    name: "Cisco IT Essentials (Cisco Networking Academy)",
    url: "https://www.credly.com/badges/4e4cdd46-14bc-4587-b745-7ac6fc2c51ae/linked_in_profile",
  },
];

/* ------------------------------------------------------------------ */
/* §6 Skills (grouped, no progress bars or percentages)                */
/* ------------------------------------------------------------------ */

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: ["C", "Python", "Java", "VHDL", "TypeScript", "MATLAB", "SQL (basic)"],
  },
  {
    label: "Embedded & hardware",
    items: [
      "STM32 (Nucleo-F446RE)",
      "UART",
      "I2C",
      "bare-metal firmware",
      "finite state machines",
      "VHDL testbenches",
      "KiCad PCB design",
      "soldering",
      "PC building and hardware troubleshooting",
      "SOLIDWORKS",
    ],
  },
  {
    label: "Lab tools",
    items: ["Oscilloscope", "multimeter", "logic analyzer", "Xilinx ISE"],
  },
  {
    label: "Software & workflow",
    items: [
      "Git/GitHub",
      "Linux",
      "Makefiles",
      "Next.js/React",
      "Tailwind CSS",
      "Vercel",
      "Jira",
      "Scrum/Kanban",
      "Microsoft 365 (Excel, PowerPoint, SharePoint)",
    ],
  },
  { label: "Media", items: ["Premiere Pro", "CapCut"] },
];
