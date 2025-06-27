import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import styles from "./About.module.scss";
import {
  FaBootstrap,
  FaCss3Alt,
  FaGitAlt,
  FaHandsHelping,
  FaHtml5,
  FaReact,
} from "react-icons/fa";
import { SiJavascript, SiNetlify, SiTypescript } from "react-icons/si";
import { BsFiletypeScss } from "react-icons/bs";
import { IoLogoFirebase, IoLogoVercel } from "react-icons/io5";
import { FaBoltLightning, FaMobileScreen } from "react-icons/fa6";
import { TfiTarget } from "react-icons/tfi";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <>
      <section
        ref={ref}
        id="about"
        className={`${styles.about} container-fluid`}
      >
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5 }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage:
              "radial-gradient(circle at center, rgba(255, 255, 255, 0.15), transparent 60%)",
            zIndex: 1,
          }}
        />

        <div
          className={`${styles.textArea} row justify-content-center align-items-center gap-2 `}
        >
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className={`${styles.glassmorphism} col-lg-4 col-10`}
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
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className={`${styles.glassmorphism} col-lg-5 col-10`}
          >
            <h3 className="py-1">Tech Stack</h3>
            <div className="row w-100 justify-content-center align-items-center gap-1">
              <span className={`${styles.react} col-lg-2 col-3`}>
                React <FaReact />
              </span>
              <span className={`${styles.JavaScript} col-lg-2 col-3`}>
                JavaScript
                <SiJavascript />
              </span>
              <span className={`${styles.TypeScript} col-lg-2 col-3`}>
                TypeScript
                <SiTypescript />
              </span>
              <span className={`${styles.html} col-lg-2 col-3`}>
                HTML
                <FaHtml5 />
              </span>
              <span className={`${styles.css} col-lg-2 col-3`}>
                CSS
                <FaCss3Alt />
              </span>
              <span className={`${styles.bootstrap} col-lg-2 col-3`}>
                Bootstrap
                <FaBootstrap />
              </span>
              <span className={`${styles.scss} col-lg-2 col-3`}>
                SCSS
                <BsFiletypeScss />
              </span>
              <span className={`${styles.git} col-lg-2 col-3`}>
                Git
                <FaGitAlt />
              </span>
              <span className={`${styles.firestore} col-lg-2 col-3`}>
                Firebase
                <IoLogoFirebase />
              </span>
              <span className={`${styles.vercel} col-lg-2 col-3`}>
                Vercel
                <IoLogoVercel />
              </span>
              <span className={`${styles.netlify} col-lg-2 col-3`}>
                Netlify
                <SiNetlify />
              </span>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className={`${styles.glassmorphism} row col-lg-3 m-0 col-10`}
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
            className={`${styles.glassmorphism} row col-lg-3 m-0 col-10`}
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
            className={`${styles.glassmorphism} row col-lg-3 m-0 col-10`}
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
            className={`${styles.glassmorphism} row col-lg-3 m-0 col-10`}
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
