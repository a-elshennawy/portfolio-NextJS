import { motion } from "motion/react";
import styles from "./Hero.module.scss";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

const Hero = () => {
  return (
    <>
      <section id="contact" className={`${styles.hero}`}>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "radial-gradient(circle at top center, rgba(240, 240, 255, 0.15), transparent 70%)",
            zIndex: 1,
          }}
        />

        <div className={styles.textArea}>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            Function Meets Finesse.
          </motion.h1>

          <motion.h6
            style={{ overflow: "hidden", whiteSpace: "nowrap" }}
            initial={{ width: 0 }}
            animate={{ width: "fit-content" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            &quot;Ahmed ElShennawy. Pixel perfectionist.&quot;
          </motion.h6>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 2 }}
            className={`${styles.socials} row`}
          >
            <div className={`${styles.socialItem} ${styles.whatsapp} col-2`}>
              <a target="_blank" href="https://wa.me/201033926177">
                <FaWhatsapp />
              </a>
            </div>
            <div className={`${styles.socialItem} ${styles.linkedin} col-2`}>
              <a
                className={`${styles.a}`}
                target="_blank"
                href="https://www.linkedin.com/in/shennawyz"
              >
                <FaLinkedin />
              </a>
            </div>
            <div className={`${styles.socialItem} ${styles.github} col-2`}>
              <a
                className={`${styles.a}`}
                target="_blank"
                href="https://github.com/a-elshennawy"
              >
                <FaGithub />
              </a>
            </div>
            <div className={`${styles.socialItem} ${styles.gmail} col-2`}>
              <a
                className={`${styles.a}`}
                href="mailto:ahmedshennawy997@gmail.com"
                onClick={(e) => {
                  window.open(
                    "https://mail.google.com/mail/?view=cm&to=ahmedshennawy997@gmail.com",
                    "_blank"
                  );
                  e.preventDefault();
                }}
              >
                <MdOutlineAlternateEmail />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
