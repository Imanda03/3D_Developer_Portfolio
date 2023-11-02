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
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import note from "./note.png";
import hotel from "./hotel.png";
import library from "./library.png";

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
    title: "Content Creator",
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
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "ANgular",
    icon: "https://static-00.iconduck.com/assets.00/angular-icon-483x512-3apnmqn2.png",
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "DotNet",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQoEpKHgfToDmGYaw5nm5uLgyzR3GZhCkQWAVuyueeb4gRfCQiAhAGAPrVYNp6Qmf6V6M&usqp=CAU",
  },
  {
    name: "post-man",
    icon: "https://static-00.iconduck.com/assets.00/postman-icon-497x512-beb7sy75.png",
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Tech Mauri",
    icon: "https://media.licdn.com/dms/image/C560BAQHZLum5D8dsjw/company-logo_200_200/0/1660549853569/techmauri_logo?e=2147483647&v=beta&t=S9oHkjJUHKO7TtsFsMJjnxBYis4vXJSGZDvxgUfECB4",
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
    title: "MERN stack Developer",
    company_name: "Tech Mauri",
    icon: "https://media.licdn.com/dms/image/C560BAQHZLum5D8dsjw/company-logo_200_200/0/1660549853569/techmauri_logo?e=2147483647&v=beta&t=S9oHkjJUHKO7TtsFsMJjnxBYis4vXJSGZDvxgUfECB4",
    iconBg: "#E6DEDD",
    date: "March 2022 - Feb 2022",
    points: [
      "Developing and maintaining web applications using MERN (Mongodb, Express, React, Node) and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Angular Developer",
    company_name: "Imark",
    icon: "https://www.imarkdigital.com/public/assets/img/imark-logo-primary.png",
    iconBg: "#E6DEDD",
    date: "Sep 2022 - Present",
    points: [
      "Developing and maintaining web applications using Angular and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "IMark",
    icon: "https://www.imarkdigital.com/public/assets/img/imark-logo-primary.png",
    iconBg: "#E6DEDD",
    date: "Sep 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "MacroStay",
    description:
      "Web-based platform that allows users to search, book, and manage Hotel from various providers, providing a convenient and efficient solution for Hotels needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node-express",
        color: "pink-text-gradient",
      },
    ],
    image: hotel,
    source_code_link: "https://github.com/Imanda03/MacroStay",
  },
  {
    name: "Note Zipper",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node-express",
        color: "pink-text-gradient",
      },
    ],
    image: note,
    source_code_link: "https://github.com/Imanda03/Note_Zipper",
  },
  {
    name: "Library Management System",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Sql Server",
        color: "green-text-gradient",
      },
      {
        name: "DotNet",
        color: "pink-text-gradient",
      },
    ],
    image: library,
    source_code_link: "https://github.com/Imanda03/Library_Management_System",
  },
];

export { services, technologies, experiences, testimonials, projects };
