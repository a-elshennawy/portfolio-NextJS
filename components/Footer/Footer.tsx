"use client";
import styles from "./Footer.module.scss";
import { motion } from "motion/react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

export const Footer = () => {
  return (
    <>
      <section className={`${styles.footer} text-center`}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="row justify-content-center align-items-center gap-3 m-0"
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
          <div className="col-12">
            <h6 className="text-white m-0 p-0">
              <small>© 2025 Ahmed ElShennawy. All Rights Reserved.</small>
            </h6>
          </div>
        </motion.div>
      </section>
    </>
  );
};
