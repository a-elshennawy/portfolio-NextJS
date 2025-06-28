import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { IoLogoVercel } from "react-icons/io5";

const UpBtn = () => {
  const [isvisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 600) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <AnimatePresence>
      {isvisible && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="upBtn"
          onClick={handleScrollUp}
        >
          <IoLogoVercel />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default UpBtn;
