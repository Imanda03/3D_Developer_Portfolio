import kidncodeLogo from "../assets/company/kidncode.webp";
import techmauriLogo from "../assets/company/techmauri.webp";
import wolfmatrixLogo from "../assets/company/wolfmatrix.png";

import kidncodeShot from "../assets/shots/kidncode.webp";
import lodbodShot from "../assets/shots/lodbod.webp";
import concertoShot from "../assets/shots/concerto.webp";
import hotelShot from "../assets/shots/hotel.webp";
import noteShot from "../assets/shots/note.webp";
import libraryShot from "../assets/shots/library.webp";
import brickgameShot from "../assets/shots/brickgame.webp";
import neonrunnerShot from "../assets/shots/neonrunner.webp";
import snakeShot from "../assets/shots/snake.webp";

export const CAREER_START = new Date(2022, 2, 1);
export const yearsOfExperience = () =>
  Math.floor((Date.now() - CAREER_START.getTime()) / (365.25 * 24 * 3600 * 1000));

export const socials = {
  github: "https://github.com/imanda03",
  linkedin: "https://www.linkedin.com/in/anish-sharma-41455423b/",
  whatsapp: "https://wa.me/9779803708637",
  facebook: "https://www.facebook.com/imanda03/",
  instagram: "https://www.instagram.com/ag_aneesh/",
};

export const navLinks = [
  { id: "work", title: "Work" },
  { id: "about", title: "About" },
  { id: "experience", title: "Experience" },
  { id: "skills", title: "Skills" },
  { id: "playground", title: "Playground" },
  { id: "contact", title: "Contact" },
];

export const services = [
  {
    title: "Web apps",
    icon: "globe",
    description: "React and Next.js front-ends — fast, accessible and carefully built.",
    accent: "#22d3ee",
  },
  {
    title: "Mobile apps",
    icon: "smartphone",
    description: "Cross-platform iOS and Android apps with React Native, shipped to real users.",
    accent: "#8b5cf6",
  },
  {
    title: "Backend & APIs",
    icon: "server",
    description: "Node, NestJS and Express services on SQL, MongoDB and Supabase.",
    accent: "#f472b6",
  },
  {
    title: "DevOps & delivery",
    icon: "rocket",
    description: "CI/CD pipelines, deployments and the infrastructure behind them.",
    accent: "#fbbf24",
  },
];

// Newest first.
export const experiences = [
  {
    title: "Full-Stack Developer & Platform Lead",
    company: "KidnCode",
    companyNote: "Ed-tech platform",
    logo: kidncodeLogo,
    logoBg: "#ffffff",
    date: "Dec 2025 — Present",
    current: true,
    points: [
      "Lead development of the KidnCode LMS, BigDog e-commerce, enrollment, scheduling and Stripe payment systems.",
      "Balance platform management with hands-on engineering — setting priorities, planning releases and coordinating cross-team delivery.",
      "Own DevOps end to end: deployments, CI/CD pipelines and infrastructure maintenance.",
      "Improve performance, security and automation across a React, Next.js, React Native, Node, SQL and Supabase stack.",
    ],
    stack: ["React", "Next.js", "React Native", "Node.js", "Supabase", "SQL", "Stripe"],
  },
  {
    title: "MERN Stack & React Native Developer",
    company: "Wolfmatrix Pvt. Ltd",
    logo: wolfmatrixLogo,
    logoBg: "#ffffff",
    date: "Sep 2022 — Nov 2025",
    points: [
      "Built and maintained full-stack web and mobile apps with MongoDB, Express, React, Node, NestJS and React Native.",
      "Shipped Concerto Analytics (business intelligence) and Lodbod (logistics & shipment management).",
      "Partnered with design and product to deliver responsive, cross-platform experiences on web, iOS and Android.",
      "Optimised application performance, contributed to scalable architecture decisions and reviewed teammates' code.",
    ],
    stack: ["React", "React Native", "NestJS", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "React.js Developer",
    company: "Tech Mauri",
    logo: techmauriLogo,
    logoBg: "#E6DEDD",
    date: "Mar 2022 — Sep 2022",
    points: [
      "Developed and maintained React.js web applications.",
      "Turned design hand-offs into responsive, cross-browser interfaces.",
      "Worked alongside designers, product managers and developers, and took part in code reviews.",
    ],
    stack: ["React", "JavaScript", "CSS"],
  },
];

// Add real quotes here (e.g. from LinkedIn recommendations) and the section appears automatically:
// { quote: "…", name: "Full Name", role: "Title, Company", avatar: importedImage }
export const testimonials = [];

export const projects = [
  {
    name: "KidnCode LMS",
    kind: "professional",
    org: "KidnCode",
    description:
      "A multinational LMS for online classes: enrollments, course materials, progress tracking, role-based dashboards, automated notifications, class scheduling and Stripe payments.",
    tags: ["Next.js", "React", "Node.js", "Supabase", "Stripe", "SQL"],
    image: kidncodeShot,
    live: "https://kidncode.com",
  },
  {
    name: "Lodbod",
    kind: "professional",
    org: "Wolfmatrix",
    description:
      "Truck booking and logistics for Nepal — real-time shipment tracking, warehouse management, delivery status updates and a mobile app for drivers.",
    tags: ["NestJS", "React", "React Native", "SQL"],
    image: lodbodShot,
    live: "https://lodbod.com/",
  },
  {
    name: "Concerto Analytics",
    kind: "professional",
    org: "Wolfmatrix",
    description:
      "Business intelligence for modelling, visualising, simulating and optimising opportunities — value driver trees, scenario planning and data-driven decisions for enterprise teams.",
    tags: ["React"],
    image: concertoShot,
    live: "https://concertoanalytics.com/",
  },
  {
    name: "BigDog E-Commerce",
    kind: "professional",
    org: "KidnCode",
    description:
      "A US-based store with product catalogue, cart and order workflows — delivered as a React Native app and a Next.js storefront on Supabase.",
    tags: ["React Native", "Next.js", "Supabase"],
  },
  {
    name: "MacroStay",
    kind: "personal",
    description:
      "Search, book and manage hotel stays from multiple providers in one place.",
    tags: ["React", "MongoDB", "Express"],
    image: hotelShot,
    code: "https://github.com/Imanda03/MacroStay",
  },
  {
    name: "Note Zipper",
    kind: "personal",
    description:
      "MERN + Redux note-taking with auth, markdown, search, tag-based organisation and cloud sync.",
    tags: ["React", "Redux", "MongoDB", "Express"],
    image: noteShot,
    code: "https://github.com/Imanda03/Note_Zipper",
  },
  {
    name: "Barber-MERN",
    kind: "personal",
    description:
      "Barber booking with multi-role auth, real-time scheduling, reviews, and Merge Sort / Binary Search powering slot search and shop ranking.",
    tags: ["React", "MongoDB", "Express"],
    code: "https://github.com/Imanda03/Barber-MERN",
  },
  {
    name: "Online Store",
    kind: "personal",
    description:
      "E-commerce across a React web app and React Native mobile app, backed by Node/Express with Sequelize and SQL.",
    tags: ["React", "React Native", "Express", "Sequelize"],
    code: "https://github.com/Imanda03/Online-store",
  },
  {
    name: "Teacher & Students",
    kind: "personal",
    description:
      "LMS front-end with separate teacher and student portals, interactive dashboards and built-in docs on every page.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    code: "https://github.com/Imanda03/TeacherAndStudents",
  },
  {
    name: "Library Management",
    kind: "personal",
    description:
      "Catalogue books, manage members and track borrowing with a role-based admin dashboard for librarians.",
    tags: ["Angular", ".NET", "SQL"],
    image: libraryShot,
    code: "https://github.com/Imanda03/Library_Management_System",
  },
];

export const games = [
  {
    name: "Neon Runner",
    tagline: "3D endless runner",
    description: "Race through neon-lit worlds, dodge, jump and collect orbs. Scored with a Tone.js synth soundtrack.",
    controls: "← → move · Space jump",
    url: "https://neonrunner.anish-sharma.com.np/",
    image: neonrunnerShot,
    accent: "#8be9ff",
  },
  {
    name: "Neon Breakout",
    tagline: "30-level brick breaker",
    description: "Classic paddle-and-ball action with power-ups, multi-hit bricks and thirty hand-tuned levels.",
    controls: "Mouse to steer",
    url: "https://brickgame.anish-sharma.com.np",
    image: brickgameShot,
    accent: "#ff6b2c",
  },
  {
    name: "Neo Snake",
    tagline: "Cyberpunk snake",
    description: "Snake, reimagined in neon — quick play, level select and high scores that keep you coming back.",
    controls: "WASD / arrows",
    url: "https://snake.anish-sharma.com.np",
    image: snakeShot,
    accent: "#a9b8ff",
  },
];
