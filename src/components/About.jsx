import { motion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { FaFilePdf } from "react-icons/fa";
import StarWrapper from "../hoc/SectionWrapper.jsx";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About me.</h2>
      </motion.div>
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-8"
        style={{ display: "flex", alignItems: "center" }}
      >
        <motion.img
          variants={fadeIn("", "", 0.1, 1)}
          src={"/Developer-Portfolio/profile.png"}
          style={{ borderRadius: "50%" }}
          className="w-40 h-40 wave-border"
        />
        <motion.a
          href="#resume"
          className="inline-block px-5 py-3 bg-tertiary  rounded-full justify-center ml-8"
          whileHover={{ scale: 1.2 }}
        >
          <FaFilePdf className="inline-block mr-2 text-xl" />
          View CV
        </motion.a>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={"mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"}
      >
        I am a Grade 12 high school student with a keen interest in software and
        hardware development. I have expertise in programming languages and
        frameworks such as Python, Javascript, Java, and C. I am enthusiastic
        about exploring the fields of quantum computing and computer science in
        my future studies!
      </motion.p>
    </>
  );
};

const AboutSection = StarWrapper(About, "about");
export default AboutSection;
