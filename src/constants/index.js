
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  // framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  // firstTestimonial,
  // secondTestimonial,
  // thirdTestimonial,
} from '../assets'


// Import Tekisky separately
// import cori from "../assets/company/cori.png";
// import post from "../assets/company/post.jpeg";
// import null from "../assets/company/null.jpg";
// import null from "../assets/company/null.jpg";


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
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ui UX Designer",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "gsap",
    icon: gsap,
  },
  // {
  //   name: "framer",
  //   icon: framer,
  // },

 
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
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
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "Intern – Full Stack Development",
    company_name: "Null Class",
    // icon: null,
    // iconBg: "#383E56",
    date: "November 2024 – December 2024",
    points: [
      "Worked on web applications using MERN stack technologie",
"Collaborated on developing scalable solutions for real-world use cases" ,  ],
  },
  {
    title: "Intern – Full Stack Development",
    company_name: "Postulate",
    // icon: post,
    // iconBg: "#383E56",
    date: "July 2024 – August 2024",
    points: [
       "Contributed to live full stack projects and client deliverables.",
      "Developed a chatbot using Angular and implemented backend APIs.",
     ],
  },{
    title: "Intern – IoT & Robotics",
    company_name: "Corizo",
    // icon: cori,
    // iconBg: "#383E56",
    date: "May 2024 – June 2024",
    points: [
       "Completed internship focused on IoT and Robotics concepts and implementation.",
      "Worked on sensor integration, device communication, and automation techniques."  ],
  },
];

const testimonials = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Huzaif proved me wrong.",
  //   name: "MD Mustaqeem",
  //   designation: "Ecommerce",
  //   company: "QuickMart",
  //   image: firstTestimonial,
  // },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Huzaif does.",
  //   name: "Abdul Raheman",
  //   designation: "Ecommerce Business",
  //   company: "justbuyz",
  //   image: secondTestimonial,
  // },
  // {
  //   testimonial:
  //     "After Huzaif optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "James Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: thirdTestimonial,
  // },
];

const projects = [
  {
    name: "YouTube Clone (MERN Stack)",
    description:
      "Developed a full-stack video streaming platform replicating core features of YouTube using MongoDB, Express.js, React.js, and Node.js.",
 tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
 
    ],
    image: project2,
    source_code_link: "https://youtube-clone1706.netlify.app/",
  },
//   {
//     name: "Exam Seating Arrangement Software",
//     description:
//        " Created a web-based seating arrangement system using VB.NET, aimed at automating the process of allocating students to exam halls efficiently.",
//  tags: [
//       {
//         name: "VB.NET",
//         color: "blue-text-gradient",
//       },
//       {
//         name: " Desktop & Web Application",
//         color: "green-text-gradient",
//       },
//       // {
//       //   name: "Gsap",
//       //   color: "pink-text-gradient",
//       // },
//     ],
//     image: gearXpert,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Fingerprint Attendance",
//     description:
//       "Designed a biometric attendance system using fingerprint sensors integrated with a web interface built on PHP, HTML, and CSS.",
//    tags: [
//       {
//         name: "Sensors",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "PHP",
//         color: "white-text-gradient",
//       },
//       {
//         name: "HTML",
//         color: "green-text-gradient",
//       },
//       {
//         name: "CSS",
//         color: "green-text-gradient",
//       },
//     ],
//     image: project3,
//     source_code_link: "https://github.com/",
//   },
//    {
//     name: " Water Management System",
//     description:
//       "Designed a biometric attendance system using fingerprint sensors integrated with a web interface built on PHP, HTML, and CSS.",
//    tags: [
//       {
//         name: "Microcontroller",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "PHP",
//         color: "white-text-gradient",
//       },
//       {
//         name: "HTML",
//         color: "green-text-gradient",
//       },
//       {
//         name: "CSS",
//         color: "green-text-gradient",
//       },
//     ],
//     image: project2,
//     source_code_link: "https://github.com/",
//   },
//    {
//     name: "Bus Tracking for College",
//     description:
//       " A Flutter-based mobile app to track real-time bus locations for college students",
//         tags: [
//       {
//         name: "Sensors",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "PHP",
//         color: "white-text-gradient",
//       },
//       {
//         name: "HTML",
//         color: "green-text-gradient",
//       },
//       {
//         name: "CSS",
//         color: "green-text-gradient",
//       },
//     ],
//     image: project3,
//     source_code_link: "https://github.com/",
//   },
];

export { services, technologies, experiences, testimonials, projects };
