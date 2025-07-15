"use client";
import styles from "./NavBar.module.scss";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const NavBar = () => {
  const currentPath = usePathname();

  const navItems = [
    { path: "/", text: "Contacts" },
    { path: "/About", text: "About" },
    { path: "/Projects", text: "Projects" },
  ];
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
          {navItems.map((navItem) => (
            <div
              key={navItem.path}
              className={`col-4 ${styles.navItem} ${
                currentPath === navItem.path ? `${styles.selected}` : ""
              }`}
            >
              <Link href={navItem.path}>{navItem.text}</Link>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default NavBar;
