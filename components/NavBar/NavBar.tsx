"use client";
import styles from "./NavBar.module.scss";
import { motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["contact", "about", "projects"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 111,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className={`${styles.FloatingNavContainer} row`}
        >
          <div
            className={`col-4 ${styles.navItem} ${
              activeSection === "contact" ? styles.selected : ""
            }`}
          >
            <Link href={"#contact"}>Contact</Link>
          </div>
          <div
            className={`col-4 ${styles.navItem} ${
              activeSection === "about" ? styles.selected : ""
            }`}
          >
            <Link href={"#about"}>About</Link>
          </div>
          <div
            className={`col-4 ${styles.navItem} ${
              activeSection === "projects" ? styles.selected : ""
            }`}
          >
            <Link href={"#projects"}>Projects</Link>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default NavBar;
