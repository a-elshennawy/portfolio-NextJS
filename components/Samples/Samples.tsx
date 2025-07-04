import Image from "next/image";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import styles from "./Samples.module.scss";
import { FaBootstrap, FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoFirebase, IoLogoVercel } from "react-icons/io5";
import { SiJavascript, SiNetlify } from "react-icons/si";

const Samples = () => {
  const { ref } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  return (
    <>
      <section ref={ref} id="work" className={`${styles.work}`}>
        <div className="row justify-content-center align-items-center m-0 gap-2 ">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="col-10 py-3"
          >
            - Full Web Apps -
          </motion.h3>

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="row justify-content-center align-items-center col-lg-3 col-10 glassmorphism projectCard"
          >
            <div
              className="img col-12"
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "16/9",
              }}
            >
              <Image
                src="/images/watchesShop.webp"
                alt="project preview"
                fill
                loading="lazy"
                style={{ objectFit: "cover", borderRadius: "12px" }}
              />
            </div>
            <div className="content row justify-content-center align-items-center gap-1 col-12">
              <h5 className="col-12 py-2">
                El-Sokarya <br />
                Fullstack Oriented Front-End WebApp for a Watches Shop
              </h5>
              <span className="col-3">
                React
                <FaReact />
              </span>
              <span className="col-3">
                JavaScript
                <SiJavascript />
              </span>
              <span className="col-3">
                Firebase
                <IoLogoFirebase />
              </span>
              <span className="col-3">
                CSS
                <FaCss3Alt />
              </span>
              <span className="col-3">
                Bootstrap
                <FaBootstrap />
              </span>
              <div className="col-12 py-1">
                <button className="toWebApp">
                  <a href="https://elsokarya.net/" target="_blank">
                    live perview
                  </a>
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="row justify-content-center align-items-center col-lg-3 col-10 glassmorphism projectCard"
          >
            <div
              className="img col-12"
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "16/9",
              }}
            >
              <Image
                src="/images/coffeeShop.webp"
                alt="project preview"
                fill
                loading="lazy"
                style={{ objectFit: "cover", borderRadius: "12px" }}
              />
            </div>
            <div className="content row justify-content-center align-items-center gap-1 col-12">
              <h5 className="col-12 py-2">
                React Project for a resturant / Cafe
              </h5>
              <span className="col-3">
                React <FaReact />
              </span>
              <span className="col-3">
                JavaScript <SiJavascript />
              </span>
              <span className="col-3">
                Bootstrap <FaBootstrap />
              </span>
              <span className="col-3">
                Netlify <SiNetlify />
              </span>
              <div className="col-12 py-1">
                <button className="toWebApp">
                  <a href="https://butter-react.netlify.app/" target="_blank">
                    live perview (Demo)
                  </a>
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="row justify-content-center align-items-center col-lg-3 col-10 glassmorphism projectCard"
          >
            <div
              className="img col-12"
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "16/9",
              }}
            >
              <Image
                src="/images/dayapp.webp"
                alt="project preview"
                fill
                loading="lazy"
                style={{ objectFit: "cover", borderRadius: "12px" }}
              />
            </div>
            <div className="content row justify-content-center align-items-center gap-1 col-12">
              <h5 className="col-12 py-2">
                Islamic App <br />
                (Date / Weather / Prayers / Quran / Azkar)
              </h5>
              <span className="col-3">
                HTML <FaHtml5 />
              </span>
              <span className="col-3">
                JavaScript <SiJavascript />
              </span>
              <span className="col-3">
                Bootstrap <FaBootstrap />
              </span>
              <span className="col-3">
                Netlify <SiNetlify />
              </span>
              <div className="col-12 py-1">
                <button className="toWebApp">
                  <a href="https://dailyguide.netlify.app/" target="_blank">
                    live perview
                  </a>
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="row justify-content-center align-items-center col-lg-3 col-10 glassmorphism projectCard"
          >
            <div
              className="img col-12"
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "16/9",
              }}
            >
              <Image
                src="/images/sshop.webp"
                alt="project preview"
                fill
                loading="lazy"
                style={{ objectFit: "cover", borderRadius: "12px" }}
              />
            </div>
            <div className="content row justify-content-center align-items-center gap-1 col-12">
              <h5 className="col-12 py-2">
                sshop <br />
                an E-Commerce Template
              </h5>
              <span className="col-3">
                HTML <FaHtml5 />
              </span>
              <span className="col-3">
                JavaScript <SiJavascript />
              </span>
              <span className="col-3">
                Bootstrap <FaBootstrap />
              </span>
              <span className="col-3">
                Netlify <SiNetlify />
              </span>
              <div className="col-12 py-1">
                <button className="toWebApp">
                  <a href="https://e-sshop.netlify.app/" target="_blank">
                    live perview (Demo)
                  </a>
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="row justify-content-center align-items-center col-lg-3 col-10 glassmorphism projectCard"
          >
            <div
              className="img col-12"
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "16/9",
              }}
            >
              <Image
                src="/images/gym.webp"
                alt="project preview"
                fill
                loading="lazy"
                style={{ objectFit: "cover", borderRadius: "12px" }}
              />
            </div>
            <div className="content row justify-content-center align-items-center gap-1 col-12">
              <h5 className="col-12 py-2">
                Gladiator Gym <br />
                Basic template for Commercial Gym
              </h5>
              <span className="col-3">
                HTML <FaHtml5 />
              </span>
              <span className="col-3">
                CSS
                <FaCss3Alt />
              </span>
              <span className="col-3">
                Bootstrap <FaBootstrap />
              </span>
              <span className="col-3">
                Vercel <IoLogoVercel />
              </span>
              <div className="col-12 py-1">
                <button className="toWebApp">
                  <a
                    href="https://gladiator-gym-psi.vercel.app/"
                    target="_blank"
                  >
                    live perview (Demo)
                  </a>
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="row justify-content-center align-items-center col-lg-3 col-10 glassmorphism projectCard"
          >
            <div
              className="img col-12"
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "16/9",
              }}
            >
              <Image
                src="/images/fitguid.webp"
                alt="project preview"
                fill
                loading="lazy"
                style={{ objectFit: "cover", borderRadius: "12px" }}
              />
            </div>
            <div className="content row justify-content-center align-items-center gap-1 col-12">
              <h5 className="col-12 py-2">
                FitGuide <br />
                Rescue Mission for a Graduation Project
              </h5>
              <span className="col-3">
                Raact <FaReact />
              </span>
              <span className="col-3">
                JavaScript <SiJavascript />
              </span>
              <span className="col-3">
                CSS
                <FaCss3Alt />
              </span>
              <span className="col-3">
                Bootstrap <FaBootstrap />
              </span>
              <span className="col-3">
                Netlify <SiNetlify />
              </span>
              <div className="col-12 py-1">
                <button className="toWebApp">
                  <a href="https://fitguide-test.netlify.app/" target="_blank">
                    live perview (Demo)
                  </a>
                </button>
              </div>
            </div>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="col-10 py-3"
          >
            - Landing Pages / Signle Page Apps -
          </motion.h3>

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="row justify-content-center align-items-center col-lg-3 col-10 glassmorphism projectCard"
          >
            <div
              className="img col-12"
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "16/9",
              }}
            >
              <Image
                src="/images/sa3dola.webp"
                alt="project preview"
                fill
                loading="lazy"
                style={{ objectFit: "cover", borderRadius: "12px" }}
              />
            </div>
            <div className="content row justify-content-center align-items-center gap-1 col-12">
              <h5 className="col-12 py-2">
                Sa3dola <br />
                Mini Blog for the Egyptian Stramer
              </h5>
              <span className="col-3">
                React <FaReact />
              </span>
              <span className="col-3">
                JavaScript <SiJavascript />
              </span>
              <span className="col-3">
                CSS
                <FaCss3Alt />
              </span>
              <span className="col-3">
                Bootstrap <FaBootstrap />
              </span>
              <span className="col-3">
                Netlify <SiNetlify />
              </span>
              <div className="col-12 py-1">
                <button className="toWebApp">
                  <a href="https://sa3dola.netlify.app/" target="_blank">
                    live perview
                  </a>
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="row justify-content-center align-items-center col-lg-3 col-10 glassmorphism projectCard"
          >
            <div
              className="img col-12"
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "16/9",
              }}
            >
              <Image
                src="/images/gladiator.webp"
                alt="project preview"
                fill
                loading="lazy"
                style={{ objectFit: "cover", borderRadius: "12px" }}
              />
            </div>
            <div className="content row justify-content-center align-items-center gap-1 col-12">
              <h5 className="col-12 py-2">
                Gladiator Gym
                <br />
                Marketing page for a Commercial Gym
              </h5>
              <span className="col-3">
                React <FaReact />
              </span>
              <span className="col-3">
                JavaScript <SiJavascript />
              </span>
              <span className="col-3">
                CSS
                <FaCss3Alt />
              </span>
              <span className="col-3">
                Bootstrap <FaBootstrap />
              </span>
              <span className="col-3">
                Netlify <SiNetlify />
              </span>
              <div className="col-12 py-1">
                <button className="toWebApp">
                  <a href="https://gladiator-gym.netlify.app/" target="_blank">
                    live perview
                  </a>
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="row justify-content-center align-items-center col-lg-3 col-10 glassmorphism projectCard"
          >
            <div
              className="img col-12"
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "16/9",
              }}
            >
              <Image
                src="/images/hurst.webp"
                alt="project preview"
                fill
                loading="lazy"
                style={{ objectFit: "cover", borderRadius: "12px" }}
              />
            </div>
            <div className="content row justify-content-center align-items-center gap-1 col-12">
              <h5 className="col-12 py-2">
                Husrt <br />
                Basic Landing Page for a Furniture Shop
              </h5>
              <span className="col-3">
                HTML <FaHtml5 />
              </span>
              <span className="col-3">
                CSS
                <FaCss3Alt />
              </span>
              <span className="col-3">
                Bootstrap <FaBootstrap />
              </span>
              <span className="col-3">
                Netlify <SiNetlify />
              </span>
              <div className="col-12 py-1">
                <button className="toWebApp">
                  <a href="https://hurstf.netlify.app/" target="_blank">
                    live perview
                  </a>
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="row justify-content-center align-items-center col-lg-3 col-10 glassmorphism projectCard"
          >
            <div
              className="img col-12"
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "16/9",
              }}
            >
              <Image
                src="/images/fixera.webp"
                alt="project preview"
                fill
                loading="lazy"
                style={{ objectFit: "cover", borderRadius: "12px" }}
              />
            </div>
            <div className="content row justify-content-center align-items-center gap-1 col-12">
              <h5 className="col-12 py-2">
                Fixera <br />
                Landing Page for Tech-Store
              </h5>
              <span className="col-3">
                HTML <FaHtml5 />
              </span>
              <span className="col-3">
                CSS
                <FaCss3Alt />
              </span>
              <span className="col-3">
                Bootstrap <FaBootstrap />
              </span>
              <span className="col-3">
                Netlify <SiNetlify />
              </span>
              <div className="col-12 py-1">
                <button className="toWebApp">
                  <a href="https://fixera.netlify.app/" target="_blank">
                    live perview
                  </a>
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="row justify-content-center align-items-center col-lg-3 col-10 glassmorphism projectCard"
          >
            <div
              className="img col-12"
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "16/9",
              }}
            >
              <Image
                src="/images/confer.webp"
                alt="project preview"
                fill
                loading="lazy"
                style={{ objectFit: "cover", borderRadius: "12px" }}
              />
            </div>
            <div className="content row justify-content-center align-items-center gap-1 col-12">
              <h5 className="col-12 py-2">
                Confer <br />
                Landing Page for a Conferences Page
              </h5>
              <span className="col-3">
                HTML <FaHtml5 />
              </span>
              <span className="col-3">
                CSS
                <FaCss3Alt />
              </span>
              <span className="col-3">
                Bootstrap <FaBootstrap />
              </span>
              <span className="col-3">
                Netlify <SiNetlify />
              </span>
              <div className="col-12 py-1">
                <button className="toWebApp">
                  <a href="https://confertest.netlify.app/" target="_blank">
                    live perview
                  </a>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Samples;
