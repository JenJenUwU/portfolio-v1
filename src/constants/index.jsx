import {
  backend,
  batchnorm,
  creator,
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  jobit,
  mobile,
  mongodb,
  nodejs,
  reactjs,
  redux,
  skywatch,
  tailwind,
  threejs,
  tripguide,
  typescript,
  web,
} from "../assets";

import { FaEnvelope, FaGithub, FaInfoCircle, FaLinkedin } from "react-icons/fa";

export const navLinks = [
  {
    id: "about",
    title: "About",
    icon: <FaInfoCircle size={30} />,
  },
  { id: "contact", title: "Contact", icon: <FaEnvelope size={30} /> },
  {
    id: "github",
    title: "Github",
    url: "https://github.com/JenJenUwU",
    icon: <FaGithub size={30} />,
  },
  {
    id: "linkedin",
    title: "Linkedin",
    url: "https://www.linkedin.com/in/jay-lin-65599824b/",
    icon: <FaLinkedin size={30} />,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer Summer Intern",
    company_name: "SkyWatch Inc.",
    icon: skywatch,
    iconBg: "#213053",
    date: "June 2023 - August 2023",
    points: [
      "Developing on screen display for public view monitors using C and the LVGL library.",
      "Collaborating and communicating with a team including product managers, and other developers to learn project communication in the tech industry.",
      "Properly documenting code and organize code for easier future adjustments.",
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
    name: "Speech Timeline Recognition",
    description:
      "I used machine learning methods to automatically annotate the timing of each Chinese word in naturalistic speech. This was further used in a human neuroimaging database project sponsored by the UofT, NYCU, and Quanta Computer Inc. ",
    tags: [
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
      {
        name: "ffmpeg",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/JenJenUwU/speech-timeline-recognizer",
  },
  {
    name: "Batch Normalization Research",
    description:
      "I used the method suggested by the paper on the effectiveness of batch normalization (Santurkar et al., NIPS 2018) to reproduce the results of the paper.",
    tags: [
      {
        name: "Python",
        color: "pink-text-gradient",
      },
      {
        name: "PyTorch",
        color: "blue-text-gradient",
      },
    ],
    image: batchnorm,
    source_code_link: "https://github.com/JenJenUwU/batch-norm",
  },
  {
    name: "ESP32-Cam Integrated with LCD Screen",
    description:
      "I created a portable camera that wires to a LCD screen where a user could connect to the camera via WiFi and view the camera feed while sending text message to the LCD screen.",
    tags: [
      {
        name: "C",
        color: "pink-text-gradient",
      },
      {
        name: "Arduino",
        color: "blue-text-gradient",
      },
      {
        name: "Hardware",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/JenJenUwU/esp32-Camera",
  },
];

export { services, technologies, experiences, testimonials, projects };
