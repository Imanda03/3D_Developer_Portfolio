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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  angular,
  dotnet,
  postman,
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
    title: "MERN Stack Developer",
    company_name: "Tech Mauri",
    icon: "https://media.licdn.com/dms/image/C560BAQHZLum5D8dsjw/company-logo_200_200/0/1660549853569/techmauri_logo?e=2147483647&v=beta&t=S9oHkjJUHKO7TtsFsMJjnxBYis4vXJSGZDvxgUfECB4",
    iconBg: "#E6DEDD",
    date: "March 2022 - Feb 2022",
    points: [
      // "As a intern",
      "Developing and maintaining web applications using MERN (Mongodb, Express, React, Node) and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "MERN Stack Developer",
    company_name: "Wolfmatrix",
    icon: "https://img.shgstatic.com/clutch-static-prod/image/scale/50x50/s3fs-public/logos/capture_20.png",
    iconBg: "#E6DEDD",
    date: "Sep 2022 - Present",
    points: [
      "Developing and maintaining web applications using the MERN stack (MongoDB, Express.js, React, Node.js) and NestJS.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Integrating APIs and optimizing performance for scalable and efficient applications.",
    ],
  },
  {
    title: "React-Native Developer",
    company_name: "Wolfmatrix",
    icon: "https://img.shgstatic.com/clutch-static-prod/image/scale/50x50/s3fs-public/logos/capture_20.png",
    iconBg: "#E6DEDD",
    date: "Sep 2022 - Present",
    points: [
      "Developing and maintaining mobile applications using React Native and related technologies.",
      "Collaborating with cross-functional teams, including designers, product managers, and other developers, to deliver high-quality mobile solutions.",
      "Implementing responsive UI/UX designs and ensuring compatibility across both iOS and Android platforms.",
      "Participating in code reviews and providing constructive feedback to improve code quality and team collaboration.",
      "Optimizing application performance and ensuring seamless user experiences.",
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
