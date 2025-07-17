"use client";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import styles from "./About.module.scss";
import {
  FaBootstrap,
  FaCloudflare,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHandsHelping,
  FaHtml5,
  FaReact,
} from "react-icons/fa";
import { SiClerk, SiJavascript, SiNetlify } from "react-icons/si";
import { BsFiletypeScss } from "react-icons/bs";
import { IoLogoFirebase, IoLogoVercel } from "react-icons/io5";
import { FaBoltLightning, FaMobileScreen } from "react-icons/fa6";
import { TfiTarget } from "react-icons/tfi";

const About = () => {
  const { ref } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <>
      <section
        ref={ref}
        id="about"
        className={`${styles.about} container-fluid relative`}
      >
        <div
          className={`${styles.textArea} row justify-content-center align-items-center gap-2 `}
        >
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="col-lg-4 col-10 glassmorphism"
          >
            <h5>
              I&apos;m Ahmed ElShennawy
              <br /> a self-driven front-end developer with a strong eye for
              detail and a love for clean, responsive interfaces. I blend
              creative intuition with technical discipline to turn ideas into
              smooth, performant user experiences.
            </h5>
            <p>
              I treat every UI like it&apos;s a final boss fight — nothing
              sloppy survives.
            </p>
          </motion.div>

          <motion.h3
            className={`${styles.textBtwn}`}
            initial={{ opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            My Approach
          </motion.h3>

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="row col-lg-3 m-0 col-10 glassmorphism"
          >
            <h4 className="co-12">
              <FaBoltLightning /> Fast & Focused
            </h4>
            <p className="co-12">
              I move quickly without cutting corners — delivering clean builds
              fast, then refining with precision.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="row col-lg-3 m-0 col-10 glassmorphism"
          >
            <h4 className="co-12">
              <TfiTarget /> Pixel Precision
            </h4>
            <p className="co-12">
              Every component I craft is intentional — I obsess over alignment,
              spacing, and visual clarity.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="row col-lg-3 m-0 col-10 glassmorphism"
          >
            <h4 className="co-12">
              <FaMobileScreen /> Mobile-First Always
            </h4>
            <p className="co-12">
              From the smallest screens up, I design interfaces that feel
              smooth, natural, and touch-friendly.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="row col-lg-3 m-0 col-10 glassmorphism"
          >
            <h4 className="co-12">
              <FaHandsHelping /> Clarity Wins
            </h4>
            <p className="co-12">
              Whether in code or communication, I keep things clear — no
              guesswork, no messy logic.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
