import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  reactNative,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  kidcode,
  techmauri,
  threejs,
  angular,
  dotnet,
  postman,
} from "../assets";
import note from "./note.png";
import hotel from "./hotel.png";
import library from "./library.png";
import barber from "./barber.svg";
import teacherstudents from "./teacherstudents.svg";
import onlinestore from "./onlinestore.svg";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Knowledge on DevOps",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "React Native",
    icon: reactNative,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "DotNet",
    icon: dotnet,
  },
  {
    name: "post-man",
    icon: postman,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Tech Mauri",
    icon: techmauri,
    iconBg: "#E6DEDD",
    date: "March 2022 - September 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "MERN Stack & React Native Developer",
    company_name: "Wolfmatrix Pvt. Ltd",
    icon: "https://img.shgstatic.com/clutch-static-prod/image/scale/50x50/s3fs-public/logos/capture_20.png",
    iconBg: "#E6DEDD",
    date: "Sep 2022 - November 2025",
    points: [
      "Developed and maintained full-stack web and mobile applications using the MERN stack (MongoDB, Express.js, React, Node.js), NestJS, and React Native.",
      "Built and shipped products including Concerto Analytics (business intelligence) and Lodbod (shipment management).",
      "Collaborated with design and product teams to implement user-centric solutions across web and mobile platforms.",
      "Implemented responsive UI/UX and ensured cross-browser and cross-platform (iOS/Android) compatibility.",
      "Optimized application performance and implemented scalable architectures.",
      "Participated in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full-Stack Developer & Platform Lead",
    company_name: "KidnCode (Ed-Tech Platform)",
    icon: kidcode,
    iconBg: "#FFD700",
    date: "December 2025 - Present",
    points: [
      "Leading development of KidnCode LMS, BigDog e-commerce, enrollment systems, scheduling, and payment integrations.",
      "Handling platform management alongside hands-on engineering — coordinating priorities, releases, and cross-team delivery.",
      "Managing DevOps workflows including deployments, CI/CD pipelines, and infrastructure maintenance.",
      "Building and maintaining React, React Native, Node, SQL, and Supabase-based systems.",
      "Enhancing performance, security, and automation across the platform.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Anish proved me wrong.",
    name: "Abhishek Jha",
    designation: "CEO",
    company: "ManoJava",
    image:
      "https://scontent.fbwa1-1.fna.fbcdn.net/v/t39.30808-1/471398908_3844779129124706_9176613244402221591_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=105&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeFzCGvc1DpKXc7lGlJWYr_IvJ--XaHvJoy8n75doe8mjP0OxVwe7RlXWBcR1igBsUql4xxC3GXIhdC9a7TKTNR3&_nc_ohc=nFzxRaW-LvgQ7kNvgH2LV0v&_nc_oc=AdgrFQtthIypiLNaZmMSSb74nnWwTKXZpbnzETHJ2TmSrOXVzkgW7p7UxtNcMVi5Ap84AWXxbx1CKiIy0nFFFpfN&_nc_zt=24&_nc_ht=scontent.fbwa1-1.fna&_nc_gid=AzHsmOWUC9PbDf8WIkTbNc1&oh=00_AYBmgcmI_c6RvcISADmGKhi1yaHonWtpL5ZYPH9ly6ogBQ&oe=678DB07F",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Amrit Khanel",
    designation: "Senior Developer",
    company: "Wolfmatrix",
    image:
      "https://scontent.fbwa1-1.fna.fbcdn.net/v/t39.30808-6/471422935_10164754580949942_2873941775927356119_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG2yYenNN_Sy1vHG_-9Dt3YV6ThNlcZgx1XpOE2VxmDHf7J_tjDfHcj0GCSb1T2zI4CToKWn5b_2m-T2pKwSPX5&_nc_ohc=kYnZEJFl2IUQ7kNvgFYQ2sv&_nc_oc=AdgtSO9LN3DxvccRiWL4kAMn3F9K5X_ivvWJE8I6p3czE0mB64UqdHlIK60OTFwXnAtZTKB4gLxus0EgMkrHihEa&_nc_zt=23&_nc_ht=scontent.fbwa1-1.fna&_nc_gid=AthaZuH4zNL4JMp9h3aYsS1&oh=00_AYAr9HqQGYBdt5m-tjx1iiPE5TZoTkPO_iybBBCb-VLocg&oe=678DA080",
  },
  {
    testimonial:
      "After Anish joined our project, our app's performance and user experience improved significantly. Their expertise in React Native made a huge impact!",
    name: "Tech Mauri",
    designation: "CEO",
    company: "TechMauri",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQHIMpnLaD8AgQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1714218011041?e=1742428800&v=beta&t=HXTG6qaKeNmQmn80S3Ig7JhxauaC5fqCR_H_giFVexk",
  },
];

const projects = [
  {
    name: "KidnCode LMS",
    description:
      "A comprehensive multinational LMS for managing online classes, student enrollments, course materials, and progress tracking. Includes role-based dashboards, automated notifications, seamless class scheduling, and payment integrations via Stripe on a Next.js and Supabase stack.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "node", color: "green-text-gradient" },
      { name: "next", color: "pink-text-gradient" },
      { name: "supabase", color: "blue-text-gradient" },
      { name: "stripe", color: "green-text-gradient" },
      { name: "sql", color: "pink-text-gradient" },
    ],
    cover: { from: "#FFD700", to: "#915eff", emoji: "🎓" },
    live_link: "https://kidncode.com",
  },
  {
    name: "Lodbod",
    description:
      "A robust logistics and shipment management solution enabling real-time shipment tracking, warehouse management, delivery status updates, and mobile app support for delivery personnel.",
    tags: [
      { name: "nestjs", color: "blue-text-gradient" },
      { name: "react", color: "green-text-gradient" },
      { name: "react-native", color: "pink-text-gradient" },
      { name: "sql", color: "blue-text-gradient" },
    ],
    cover: { from: "#00d4ff", to: "#6a3fcf", emoji: "🚚" },
    live_link: "https://lodbod.com/",
  },
  {
    name: "Concerto Analytics",
    description:
      "Smarter business intelligence platform for modeling, visualizing, simulating, and optimizing business opportunities — built while at Wolfmatrix. Powers value driver trees, scenario planning, and data-driven decision-making for enterprise teams.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "analytics", color: "green-text-gradient" },
      { name: "business-intelligence", color: "pink-text-gradient" },
    ],
    cover: { from: "#38ef7d", to: "#11998e", emoji: "📊" },
    live_link: "https://concertoanalytics.com/",
  },
  {
    name: "BigDog E-Commerce",
    description:
      "A US-based e-commerce platform with product catalog, cart management, and order workflows — delivered across a React Native mobile app and a Next.js web storefront backed by Supabase.",
    tags: [
      { name: "react-native", color: "blue-text-gradient" },
      { name: "next", color: "green-text-gradient" },
      { name: "supabase", color: "pink-text-gradient" },
    ],
    cover: { from: "#f7971e", to: "#ffd200", emoji: "🛒" },
  },
  {
    name: "MacroStay",
    description:
      "Web-based platform that allows users to search, book, and manage Hotel from various providers, providing a convenient and efficient solution for Hotels needs.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "node-express", color: "pink-text-gradient" },
    ],
    image: hotel,
    source_code_link: "https://github.com/Imanda03/MacroStay",
  },
  {
    name: "Note Zipper",
    description:
      "Advanced note-taking application built with the MERN stack and Redux, featuring user authentication, markdown support, intelligent search, tag-based organization, and seamless cloud sync across devices.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "node-express", color: "pink-text-gradient" },
    ],
    image: note,
    source_code_link: "https://github.com/Imanda03/Note_Zipper",
  },
  {
    name: "Library Management System",
    description:
      "A library management system for cataloging books, managing member records, and tracking borrowing and returns, with a role-based administrative dashboard for librarians.",
    tags: [
      { name: "Angular", color: "blue-text-gradient" },
      { name: "Sql Server", color: "green-text-gradient" },
      { name: "DotNet", color: "pink-text-gradient" },
    ],
    image: library,
    source_code_link: "https://github.com/Imanda03/Library_Management_System",
  },
  {
    name: "Barber-MERN",
    description:
      "Full-stack barber shop booking platform with multi-role auth for customers, barbers, and shop owners, real-time appointment scheduling, service and review management, and Merge Sort / Binary Search algorithms powering fast slot search and shop ranking.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "node-express", color: "pink-text-gradient" },
    ],
    image: barber,
    source_code_link: "https://github.com/Imanda03/Barber-MERN",
  },
  {
    name: "TeacherAndStudents",
    description:
      "React, TypeScript, and Tailwind-powered LMS frontend with separate teacher and student portals, interactive dashboards, and built-in documentation viewers on every page.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "typescript", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: teacherstudents,
    source_code_link: "https://github.com/Imanda03/TeacherAndStudents",
  },
  {
    name: "Online-store",
    description:
      "A full-featured e-commerce platform with product browsing and filtering, shopping cart management, and order handling — React web app, React Native mobile app, and a Node.js/Express backend with Sequelize ORM and SQL.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "react-native", color: "green-text-gradient" },
      { name: "node-express", color: "pink-text-gradient" },
      { name: "sequelize", color: "blue-text-gradient" },
    ],
    image: onlinestore,
    source_code_link: "https://github.com/Imanda03/Online-store",
  },
];

export { services, technologies, experiences, testimonials, projects };
