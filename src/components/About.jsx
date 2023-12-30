import { motion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { FaFilePdf } from "react-icons/fa";
import StarWrapper from "../hoc/SectionWrapper.jsx";
import profileImage from "../assets/profile.png";

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
          src={profileImage}
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
        I'm a grade 12 high school student who is interested in both software
        and hardware developing. I specialize in programming language and
        frameworks of Python, Javascript, Java and C. I am looking forward to
        learn more about myself and computer related topics through experience
        and opportunities in the future!
      </motion.p>
    </>
  );
};

const AboutSection = StarWrapper(About, "about");
export default AboutSection;
