import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About me.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={"mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"}
      >
        I'm a grade 12 high school student who is interested in both software
        and hardware developing. I expertise in programming language and
        frameworks of Python, Javascript, Java and C. I am looking forward to
        learn more about myself and computer related topics through experience
        and opportunities in the future!
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
