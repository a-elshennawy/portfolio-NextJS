"use client";
import About from "@/components/About/About";
import { Footer } from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import NavBar from "@/components/NavBar/NavBar";
import Projects from "@/components/Projects/Projects";
import ScrollBar from "@/components/ScrollBar/ScrollBar";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // @ts-expect-error - no props needed here
    import("bootstrap/dist/js/bootstrap.bundle.min.js")
      .then(() => console.log("Bootstrap loaded"))
      .catch(console.error);
  }, []);
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Footer />
      <ScrollBar />
    </>
  );
}
