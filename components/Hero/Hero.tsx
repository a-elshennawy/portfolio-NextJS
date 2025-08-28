import { motion } from "motion/react";
import styles from "./Hero.module.scss";
import { FaDiscord, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";

const Hero = () => {
  return (
    <>
      <section id="contact" className={`${styles.hero} container-fluid`}>
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
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            Function meets finesse.
          </motion.h1>

          <motion.h6
            style={{ overflow: "hidden", whiteSpace: "nowrap" }}
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <i>
              Ahmed ElShennawy. React nerd. Pixel perfectionist.
              <br />
              <q>Full-Stack Oriented Front-end Dev.</q>
            </i>
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
            <div className={`${styles.socialItem} ${styles.instagram} col-2`}>
              <a
                className={`${styles.a}`}
                target="_blank"
                href="https://www.instagram.com/shennawy.z"
              >
                <FaInstagram />
              </a>
            </div>
            <div className={`${styles.socialItem} ${styles.discord} col-2`}>
              <a
                className={`${styles.a}`}
                target="_blank"
                href="https://discordapp.com/users/1184992200686309486s"
              >
                <FaDiscord />
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
