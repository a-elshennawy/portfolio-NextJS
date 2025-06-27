import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import style from "./CommBar.module.scss";
const CommBar = () => {
  const [showbar, setShowBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowBar(true);
      } else {
        setShowBar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {showbar && (
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
            key="commbar"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className={`${style.commBar} row justify-content-center align-items-center gap-1`}
          >
            <div className={`${style.socilaNavItem} col-3`}>
              <a target="_blank" href="https://wa.me/201033926177">
                <FaWhatsapp />
              </a>
            </div>
            <div className={`${style.socilaNavItem} col-3`}>
              <a target="_blank" href="https://www.instagram.com/shennawy.z">
                <FaInstagram />
              </a>
            </div>
            <div className={`${style.socilaNavItem} col-3`}>
              <a target="_blank" href="https://www.linkedin.com/in/shennawyz">
                <FaLinkedin />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CommBar;
