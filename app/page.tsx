"use client";
import { useEffect } from "react";
import { motion } from "motion/react";
import styles from "./Home.module.scss";
import {
  FaBootstrap,
  FaCloudflare,
  FaCss3Alt,
  FaDiscord,
  FaGit,
  FaGithub,
  FaHtml5,
  FaLinkedin,
  FaReact,
  FaWhatsapp,
} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { SiClerk, SiJavascript, SiNetlify } from "react-icons/si";
import { BsFiletypeScss } from "react-icons/bs";
import { IoLogoFirebase, IoLogoVercel } from "react-icons/io5";

export default function Home() {
  useEffect(() => {
    // @ts-expect-error - no props needed here
    import("bootstrap/dist/js/bootstrap.bundle.min.js")
      .then(() => console.log("Bootstrap loaded"))
      .catch(console.error);
  }, []);
  return (
    <>
      <section className={`${styles.Home} container-fluid`}>
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
            Ahmed ElShennawy. React nerd. Pixel perfectionist.
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

          <motion.h5
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 2.5 }}
            className="m-0 mt-2"
          >
            My Stack
          </motion.h5>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, delay: 3 }}
            className={styles.techStack}
          >
            <span className={styles.react}>
              <FaReact />
            </span>
            <span className={styles.JavaScript}>
              <SiJavascript />
            </span>
            <span className={styles.html}>
              <FaHtml5 />
            </span>
            <span className={styles.css}>
              <FaCss3Alt />
            </span>
            <span className={styles.bootstrap}>
              <FaBootstrap />
            </span>
            <span className={styles.scss}>
              <BsFiletypeScss />
            </span>
            <span className={styles.git}>
              <FaGit />
            </span>
            <span className={styles.itHub}>
              <FaGithub />
            </span>
            <span className={styles.firebase}>
              <IoLogoFirebase />
            </span>
            <span className={styles.clerk}>
              <SiClerk />
            </span>
            <span className={styles.cloudflare}>
              <FaCloudflare />
            </span>
            <span className={styles.vercel}>
              <IoLogoVercel />
            </span>
            <span className={styles.netlify}>
              <SiNetlify />
            </span>
          </motion.div>
        </div>
      </section>
    </>
  );
}
