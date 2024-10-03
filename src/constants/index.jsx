import { batchnorm, speech, skywatch, espcam, github, slides } from "../assets";

import { FaEnvelope, FaGithub, FaInfoCircle, FaLinkedin } from "react-icons/fa";

export const navLinks = [
  {
    hash: "about",
    title: "About",
    icon: <FaInfoCircle size={30} />,
  },
  { hash: "contact", title: "Contact", icon: <FaEnvelope size={30} /> },
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

const experiences = [
  {
    title: "Software Engineer Summer Intern",
    company_name: "SkyWatch Inc.",
    icon: skywatch,
    iconBg: "#213053",
    date: "June 2023 - August 2023",
    points: [
      "Developed an on-screen display for public view monitors using C and the LVGL library.",
      "Learned tech industry projected communication standards via collaboration and communication with the team.",
      "Learned standard documentation process for clear communication.",
    ],
  },
  {
    title: "Electrical Engineer Summer Intern",
    company_name: "TIMWAVE Ltd.",
    iconBg: "#213053",
    date: "July 2024 - August 2024",
    points: [
      "Developed an analog radar module from scratch through Arduino and KiCad.",
      "Learned and implemented the theory of Frequency Modulated Continuous Wave radar and Doppler radar.",
    ],
  },
];

const testimonials = [
  {
    reference:
      "Jay was able to come up with distinctive solutions when encountering daunting challenges. Jay also demonstrated his communication ability by expressing those ideas to others.",
    name: "Dr. Wen-Jui Kuo",
    designation: "Professor at NYCU",
    image:
      "https://ins.nycu.edu.tw/wp-content/uploads/2021/11/%E9%83%AD%E6%96%87%E7%91%9E-Wen-Jui-Kuo-180x180.jpg",
    email: "wjkuo@ym.edu.tw",
    link: "https://ins.nycu.edu.tw/index.php/en/institute-of-neuroscience-nycu/faculty/wenjui-kuo/",
  },
  {
    reference:
      "Jay is a brilliant young individual with a strong interest in computer science. I found Jay is unique, not in his technical skill but in his enthusiasm and action toward his dream at such a young age.",
    name: "Jp Yang",
    designation: "CEO of SkyWatch Inc.",
    image:
      "https://media.licdn.com/dms/image/v2/C4D03AQHOlhGtKip9AQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517573537053?e=1733356800&v=beta&t=057t5UatzQUAHz1ky0-tnZULcRvRcrPOYK9-vD77VxE",
    email: "jp.yang@skywatch24.com",
    link: "https://www.linkedin.com/in/jpyang-27aa9529/",
  },
  {
    reference:
      "Jay mastered the complex theory of deep learning and the practical skills of building and training neural networks, typically covered in advanced university courses.",
    name: "Stephen Zhang",
    designation: "Graduate from UofT",
    image:
      "https://i.pinimg.com/564x/b8/9f/27/b89f270e2aee0577efc5e604f08132d1.jpg",
    email: "stephenn.zhang@mail.utoronto.ca",
    link: "https://www.linkedin.com/in/stephen-zhang-9052a9156/",
  },
];

const projects = [
  {
    name: "Speech Timeline Recognition",
    description:
      "Automatically annotate the timing of each Chinese word in naturalistic speech, used in a human neuroimaging database project sponsored by the UofT, NYCU and Quanta Computer Inc.",
    tags: [
      /*
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
      {
        name: "ffmpeg",
        color: "blue-text-gradient",
      },
      */
    ],
    image: speech,
    links: [
      {
        url: "https://github.com/JenJenUwU/speech-timeline-recognizer",
        icon: github,
      },
    ],
  },
  {
    name: "Batch Normalization Research",
    description:
      "I researched the hypothesis that batch normalization's normalizing process does not correlate with improved accuracy, as stated by (Santurkar et al., NIPS 2018).",
    tags: [
      /*
      {
        name: "Python",
        color: "pink-text-gradient",
      },
      {
        name: "PyTorch",
        color: "blue-text-gradient",
      },
      */
    ],
    image: batchnorm,
    links: [
      {
        url: "https://docs.google.com/presentation/d/1XEVcSGmIluUepcGGvRJsghMlTBKJAYssaav62kCBzUo/edit?usp=sharing",
        icon: slides,
      },
      {
        url: "https://github.com/JenJenUwU/batch-norm",
        icon: github,
      },
    ],
  },
  {
    name: "ESP32-Cam Integrated with LCD Screen",
    description:
      "I created a portable camera that wires to an LCD screen where a user could connect to the camera via WiFi and view the camera feed while sending text messages to the LCD screen.",
    tags: [
      /*
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
      */
    ],
    image: espcam,
    links: [
      {
        url: "https://github.com/JenJenUwU/esp32-Camera",
        icon: github,
      },
    ],
  },
];

export { experiences, testimonials, projects };
