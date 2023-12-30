import { batchnorm, speech, skywatch, espcam } from "../assets";

import {
  FaEnvelope,
  FaGithub,
  FaInfoCircle,
  FaLinkedin,
  FaFilePdf,
} from "react-icons/fa";

export const navLinks = [
  {
    id: "about",
    title: "About",
    icon: <FaInfoCircle size={30} />,
  },
  { id: "contact", title: "Contact", icon: <FaEnvelope size={30} /> },
  {
    id: "resume",
    title: "Resume",
    url: "/Developer-Portfolio/resume",
    icon: <FaFilePdf size={30} />,
  },
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
      "Developing on screen display for public view monitors using C and the LVGL library.",
      "Collaborating and communicating with a team including product managers, and other developers to learn project communication in the tech industry.",
      "Properly documenting code and organize code for easier future adjustments.",
    ],
  },
];

const testimonials = [
  {
    reference: "",
    name: "Wen-Jui Kuo",
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
      "https://media.licdn.com/dms/image/C4D03AQHOlhGtKip9AQ/profile-displayphoto-shrink_800_800/0/1517573537053?e=1709164800&v=beta&t=oMPXMuGEg1U0LIo47pIoN3L-9M74wlDEucDNepeELjE",
    email: "jp.yang@skywatch24.com",
    link: "https://www.linkedin.com/in/jpyang-27aa9529/",
  },
  {
    reference:
      "Jay mastered both the complex theory of deep learning and the practical skills of building and training neural networks, typically covered in advanced university courses.",
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
    image: speech,
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
    image: espcam,
    source_code_link: "https://github.com/JenJenUwU/esp32-Camera",
  },
];

export { experiences, testimonials, projects };
