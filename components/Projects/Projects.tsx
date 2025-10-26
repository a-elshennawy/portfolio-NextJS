"use client";
import Image from "next/image";
import styles from "./Projects.module.scss";
import {
  FaBootstrap,
  FaCloudflare,
  FaCss3Alt,
  FaHtml5,
  FaReact,
} from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import {
  SiJavascript,
  SiNetlify,
  SiNextdotjs,
  SiSupabase,
  SiTypescript,
} from "react-icons/si";
import Swiper from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useEffect } from "react";
import { GiBearFace } from "react-icons/gi";

const Projects = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      modules: [Autoplay],
      slidesPerView: 1.5,
      spaceBetween: 20,
      centeredSlides: false,
      speed: 5000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      },
      loop: true,
      grabCursor: true,
      freeMode: {
        enabled: true,
        momentum: false,
      },
      effect: "slide",
      breakpoints: {
        768: {
          slidesPerView: 2.5,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3.5,
          spaceBetween: 24,
        },
      },
      on: {
        touchEnd: function () {
          swiper.autoplay.start();
        },
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <>
      <section id="projects" className={`${styles.work}`}>
        <div className="m-0 swiper">
          <div className="swiper-wrapper align-items-center">
            <div
              className={`row justify-content-center align-items-center glassmorphism ${styles.projectCard} swiper-slide`}
            >
              <div
                className="col-12"
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
              <div
                className={`${styles.content} row justify-content-center align-items-center gap-1 col-12`}
              >
                <h5 className="col-12 py-2 m-0">
                  El-Sokarya <br />
                  Fullstack Oriented Front-End WebApp for a Watches Shop
                </h5>
                <div className="col-12">
                  <span className="next">
                    <SiNextdotjs />
                  </span>
                  <span className="TypeScript">
                    <SiTypescript />
                  </span>
                  <span className="zustand">
                    <GiBearFace />
                  </span>
                  <span className="css">
                    <FaCss3Alt />
                  </span>
                  <span className="bootstrap">
                    <FaBootstrap />
                  </span>
                </div>

                <div className="col-12 py-1">
                  <button className={`${styles.toWebApp}`}>
                    <a href="https://elsokarya.net/" target="_blank">
                      live preview
                    </a>
                  </button>
                </div>
              </div>
            </div>

            <div
              className={`row justify-content-center align-items-center glassmorphism ${styles.projectCard} swiper-slide`}
            >
              <div
                className="col-12"
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "16/9",
                }}
              >
                <Image
                  src="/images/theCafe.webp"
                  alt="project preview"
                  fill
                  loading="lazy"
                  style={{ objectFit: "cover", borderRadius: "12px" }}
                />
              </div>
              <div
                className={`${styles.content} row justify-content-center align-items-center gap-1 col-12`}
              >
                <h5 className="col-12 py-2 m-0">
                  The Cafe
                  <br />
                  Fully Functional Cafe / Resturaunt Managment System & Customer
                  Service
                </h5>
                <div className="col-12">
                  <span className="react">
                    <FaReact />
                  </span>
                  <span className="JavaScript">
                    <SiJavascript />
                  </span>
                  <span className="SupaBase">
                    <SiSupabase />
                  </span>
                  <span className="css">
                    <FaCss3Alt />
                  </span>
                  <span className="bootstrap">
                    <FaBootstrap />
                  </span>
                </div>

                <div className="col-12 py-1">
                  <button className={`${styles.toWebApp}`}>
                    <a href="https://the-cafe.pages.dev/" target="_blank">
                      live preview
                    </a>
                  </button>
                </div>
              </div>
            </div>

            <div
              className={`row justify-content-center align-items-center glassmorphism ${styles.projectCard} swiper-slide`}
            >
              <div
                className="col-12"
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "16/9",
                }}
              >
                <Image
                  src="/images/eventCards.webp"
                  alt="project preview"
                  fill
                  loading="lazy"
                  style={{ objectFit: "cover", borderRadius: "12px" }}
                />
              </div>
              <div
                className={`${styles.content} row justify-content-center align-items-center gap-1 col-12`}
              >
                <h5 className="col-12 py-2 m-0">
                  Event Cards Generator
                  <br />
                  Customized Events Cards generator with full control to
                  download as PDF / PNG
                </h5>
                <div className="col-12">
                  <span className="react">
                    <FaReact />
                  </span>
                  <span className="JavaScript">
                    <SiJavascript />
                  </span>
                  <span className="css">
                    <FaCss3Alt />
                  </span>
                  <span className="bootstrap">
                    <FaBootstrap />
                  </span>
                  <span className="cloudflare">
                    <FaCloudflare />
                  </span>
                </div>

                <div className="col-12 py-1">
                  <button className={`${styles.toWebApp}`}>
                    <a href="https://event-cards.pages.dev/" target="_blank">
                      live preview
                    </a>
                  </button>
                </div>
              </div>
            </div>

            <div
              className={`row justify-content-center align-items-center glassmorphism ${styles.projectCard} swiper-slide`}
            >
              <div
                className="col-12"
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "16/9",
                }}
              >
                <Image
                  src="/images/openLab.webp"
                  alt="project preview"
                  fill
                  loading="lazy"
                  style={{ objectFit: "cover", borderRadius: "12px" }}
                />
              </div>
              <div
                className={`${styles.content} row justify-content-center align-items-center gap-1 col-12`}
              >
                <h5 className="col-12 py-2 m-0">
                  Open Lab
                  <br />
                  Open Source basic system for analytical laboratories
                </h5>
                <div className="col-12">
                  <span className="react">
                    <FaReact />
                  </span>
                  <span className="JavaScript">
                    <SiJavascript />
                  </span>
                  <span className="css">
                    <FaCss3Alt />
                  </span>
                  <span className="bootstrap">
                    <FaBootstrap />
                  </span>
                  <span className="cloudflare">
                    <FaCloudflare />
                  </span>
                </div>

                <div className="col-12 py-1">
                  <button className={`${styles.toWebApp}`}>
                    <a
                      href="https://open-source-lab.pages.dev/"
                      target="_blank"
                    >
                      live preview
                    </a>
                  </button>
                </div>
              </div>
            </div>

            <div
              className={`row justify-content-center align-items-center glassmorphism ${styles.projectCard} swiper-slide`}
            >
              <div
                className="col-12"
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "16/9",
                }}
              >
                <Image
                  src="/images/socially.webp"
                  alt="project preview"
                  fill
                  loading="lazy"
                  style={{ objectFit: "cover", borderRadius: "12px" }}
                />
              </div>
              <div
                className={`${styles.content} row justify-content-center align-items-center gap-1 col-12`}
              >
                <h5 className="col-12 py-2 m-0">
                  Socially <br />
                  an anonymous social app <br />
                  (Full-Stack Oriented)
                </h5>
                <div className="col-12">
                  <span className="react">
                    <FaReact />
                  </span>
                  <span className="firebase">
                    <IoLogoFirebase />
                  </span>
                  <span className="css">
                    <FaCss3Alt />
                  </span>
                  <span className="bootstrap">
                    <FaBootstrap />
                  </span>
                  <span className="cloudflare">
                    <FaCloudflare />
                  </span>
                </div>
                <div className="col-12 py-1">
                  <button className={`${styles.toWebApp}`}>
                    <a href="https://socially.pages.dev/" target="_blank">
                      live preview
                    </a>
                  </button>
                </div>
              </div>
            </div>

            <div
              className={`row justify-content-center align-items-center glassmorphism ${styles.projectCard} swiper-slide`}
            >
              <div
                className="col-12"
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "16/9",
                }}
              >
                <Image
                  src="/images/clarityTasks.webp"
                  alt="project preview"
                  fill
                  loading="lazy"
                  style={{ objectFit: "cover", borderRadius: "12px" }}
                />
              </div>
              <div
                className={`${styles.content} row justify-content-center align-items-center gap-1 col-12`}
              >
                <h5 className="col-12 py-2 m-0">
                  Clarity tasks <br />
                  task manager / login / tasks done <br />
                  (Full-Stack Oriented)
                </h5>
                <div className="col-12">
                  <span className="react">
                    <FaReact />
                  </span>
                  <span className="firebase">
                    <IoLogoFirebase />
                  </span>
                  <span className="css">
                    <FaCss3Alt />
                  </span>
                  <span className="bootstrap">
                    <FaBootstrap />
                  </span>
                  <span className="cloudflare">
                    <FaCloudflare />
                  </span>
                </div>
                <div className="col-12 py-1">
                  <button className={`${styles.toWebApp}`}>
                    <a href="https://clarity-tasks.pages.dev/" target="_blank">
                      live preview
                    </a>
                  </button>
                </div>
              </div>
            </div>

            <div
              className={`row justify-content-center align-items-center glassmorphism ${styles.projectCard} swiper-slide`}
            >
              <div
                className="col-12"
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "16/9",
                }}
              >
                <Image
                  src="/images/spendingTracker.webp"
                  alt="project preview"
                  fill
                  loading="lazy"
                  style={{ objectFit: "cover", borderRadius: "12px" }}
                />
              </div>
              <div
                className={`${styles.content} row justify-content-center align-items-center gap-1 col-12`}
              >
                <h5 className="col-12 py-2 m-0">
                  Spending Tracker <br />
                  User friendly spends tracker
                  <br />
                  (Full-Stack Oriented)
                </h5>
                <div className="col-12">
                  <span className="react">
                    <FaReact />
                  </span>
                  <span className="JavaScript">
                    <SiJavascript />
                  </span>
                  <span className="bootstrap">
                    <FaBootstrap />
                  </span>
                  <span className="firebase">
                    <IoLogoFirebase />
                  </span>
                  <span className="cloudflare">
                    <FaCloudflare />
                  </span>
                </div>
                <div className="col-12 py-1">
                  <button className={`${styles.toWebApp}`}>
                    <a href="https://spends-tracker.pages.dev/" target="_blank">
                      live preview
                    </a>
                  </button>
                </div>
              </div>
            </div>

            <div
              className={`row justify-content-center align-items-center glassmorphism ${styles.projectCard} swiper-slide`}
            >
              <div
                className="col-12"
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
              <div
                className={`${styles.content} row justify-content-center align-items-center gap-1 col-12`}
              >
                <h5 className="col-12 py-2 m-0">
                  React Project for a resturant / Cafe
                </h5>
                <div className="col-12">
                  <span className="react">
                    <FaReact />
                  </span>
                  <span className="JavaScript">
                    <SiJavascript />
                  </span>
                  <span className="bootstrap">
                    <FaBootstrap />
                  </span>
                  <span className="netlify">
                    <SiNetlify />
                  </span>
                </div>

                <div className="col-12 py-1">
                  <button className={`${styles.toWebApp}`}>
                    <a href="https://butter-react.netlify.app/" target="_blank">
                      live preview (Demo)
                    </a>
                  </button>
                </div>
              </div>
            </div>

            <div
              className={`row justify-content-center align-items-center glassmorphism ${styles.projectCard} swiper-slide`}
            >
              <div
                className="col-12"
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "16/9",
                }}
              >
                <Image
                  src="/images/muslimDay.webp"
                  alt="project preview"
                  fill
                  loading="lazy"
                  style={{ objectFit: "cover", borderRadius: "12px" }}
                />
              </div>
              <div
                className={`${styles.content} row justify-content-center align-items-center gap-1 col-12`}
              >
                <h5 className="col-12 py-2 m-0">
                  Muslim Day <br />
                  (Date / Prayers Times / Quran)
                </h5>
                <div className="col-12">
                  <span className="react">
                    <FaReact />
                  </span>
                  <span className="JavaScript">
                    <SiJavascript />
                  </span>
                  <span className="css">
                    <FaCss3Alt />
                  </span>
                  <span className="bootstrap">
                    <FaBootstrap />
                  </span>
                  <span className="cloudflare">
                    <FaCloudflare />
                  </span>
                </div>

                <div className="col-12 py-1">
                  <button className={`${styles.toWebApp}`}>
                    <a href="https://muslim-day.pages.dev/" target="_blank">
                      live preview
                    </a>
                  </button>
                </div>
              </div>
            </div>

            <div
              className={`row justify-content-center align-items-center glassmorphism ${styles.projectCard} swiper-slide`}
            >
              <div
                className="col-12"
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "16/9",
                }}
              >
                <Image
                  src="/images/fixyland.webp"
                  alt="project preview"
                  fill
                  loading="lazy"
                  style={{ objectFit: "cover", borderRadius: "12px" }}
                />
              </div>
              <div
                className={`${styles.content} row justify-content-center align-items-center gap-1 col-12`}
              >
                <h5 className="col-12 py-2 m-0">
                  Fixyland <br />
                  an Hotel Reservation Template
                </h5>
                <div className="col-12">
                  <span className="react">
                    <FaReact />
                  </span>
                  <span className="bootstrap">
                    <FaBootstrap />
                  </span>
                  <span className="netlify">
                    <SiNetlify />
                  </span>
                </div>
                <div className="col-12 py-1">
                  <button className={`${styles.toWebApp}`}>
                    <a href="https://fixyland.pages.dev/" target="_blank">
                      live preview (Demo)
                    </a>
                  </button>
                </div>
              </div>
            </div>

            <div
              className={`row justify-content-center align-items-center glassmorphism ${styles.projectCard} swiper-slide`}
            >
              <div
                className="col-12"
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
              <div
                className={`${styles.content} row justify-content-center align-items-center gap-1 col-12`}
              >
                <h5 className="col-12 py-2 m-0">
                  FitGuide <br />
                  Rescue Mission for a Graduation Project
                </h5>
                <div className="col-12">
                  <span className="react">
                    <FaReact />
                  </span>
                  <span className="JavaScript">
                    <SiJavascript />
                  </span>
                  <span className="css">
                    <FaCss3Alt />
                  </span>
                  <span className="bootstrap">
                    <FaBootstrap />
                  </span>
                  <span className="netlify">
                    <SiNetlify />
                  </span>
                </div>

                <div className="col-12 py-1">
                  <button className={`${styles.toWebApp}`}>
                    <a
                      href="https://fitguide-test.netlify.app/"
                      target="_blank"
                    >
                      live preview (Demo)
                    </a>
                  </button>
                </div>
              </div>
            </div>

            <div
              className={`row justify-content-center align-items-center glassmorphism ${styles.projectCard} swiper-slide`}
            >
              <div
                className="col-12"
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
              <div
                className={`${styles.content} row justify-content-center align-items-center gap-1 col-12`}
              >
                <h5 className="col-12 py-2 m-0">
                  Gladiator Gym
                  <br />
                  Marketing page for a Commercial Gym
                </h5>
                <div className="col-12">
                  <span className="react">
                    <FaReact />
                  </span>
                  <span className="JavaScript">
                    <SiJavascript />
                  </span>
                  <span className="css">
                    <FaCss3Alt />
                  </span>
                  <span className="bootstrap">
                    <FaBootstrap />
                  </span>
                  <span className="netlify">
                    <SiNetlify />
                  </span>
                </div>
                <div className="col-12 py-1">
                  <button className={`${styles.toWebApp}`}>
                    <a
                      href="https://gladiator-gym.netlify.app/"
                      target="_blank"
                    >
                      live preview
                    </a>
                  </button>
                </div>
              </div>
            </div>

            <div
              className={`row justify-content-center align-items-center glassmorphism ${styles.projectCard} swiper-slide`}
            >
              <div
                className="col-12"
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
              <div
                className={`${styles.content} row justify-content-center align-items-center gap-1 col-12`}
              >
                <h5 className="col-12 py-2 m-0">
                  Husrt <br />
                  Basic Landing Page for a Furniture Shop
                </h5>
                <div className="col-12">
                  <span className="html">
                    <FaHtml5 />
                  </span>
                  <span className="css">
                    <FaCss3Alt />
                  </span>
                  <span className="bootstrap">
                    <FaBootstrap />
                  </span>
                  <span className="netlify">
                    <SiNetlify />
                  </span>
                </div>
                <div className="col-12 py-1">
                  <button className={`${styles.toWebApp}`}>
                    <a href="https://hurstf.netlify.app/" target="_blank">
                      live preview
                    </a>
                  </button>
                </div>
              </div>
            </div>

            <div
              className={`row justify-content-center align-items-center glassmorphism ${styles.projectCard} swiper-slide`}
            >
              <div
                className="col-12"
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
              <div
                className={`${styles.content} row justify-content-center align-items-center gap-1 col-12`}
              >
                <h5 className="col-12 py-2 m-0">
                  Fixera <br />
                  Landing Page for Tech-Store
                </h5>
                <div className="col-12">
                  <span className="html">
                    <FaHtml5 />
                  </span>
                  <span className="css">
                    <FaCss3Alt />
                  </span>
                  <span className="bootstrap">
                    <FaBootstrap />
                  </span>
                  <span className="netlify">
                    <SiNetlify />
                  </span>
                </div>
                <div className="col-12 py-1">
                  <button className={`${styles.toWebApp}`}>
                    <a href="https://fixera.netlify.app/" target="_blank">
                      live preview
                    </a>
                  </button>
                </div>
              </div>
            </div>

            <div
              className={`row justify-content-center align-items-center glassmorphism ${styles.projectCard} swiper-slide`}
            >
              <div
                className="col-12"
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
              <div
                className={`${styles.content} row justify-content-center align-items-center gap-1 col-12`}
              >
                <h5 className="col-12 py-2 m-0">
                  Confer <br />
                  Landing Page for a Conferences Page
                </h5>
                <div className="col-12">
                  <span className="html">
                    <FaHtml5 />
                  </span>
                  <span className="css">
                    <FaCss3Alt />
                  </span>
                  <span className="bootstrap">
                    <FaBootstrap />
                  </span>
                  <span className="netlify">
                    <SiNetlify />
                  </span>
                </div>
                <div className="col-12 py-1">
                  <button className={`${styles.toWebApp}`}>
                    <a href="https://confertest.netlify.app/" target="_blank">
                      live preview
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
