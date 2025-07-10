"use client";
import { useEffect } from "react";
import Header from "@/components/Header/Header";
import About from "@/components/About/About";
import Samples from "@/components/Samples/Samples";
import CommBar from "@/components/CommBar/CommBar";
import UpBtn from "@/components/UpBtn";
import ScrollBar from "@/components/ScrollBar/ScrollBar";

export default function Home() {
  useEffect(() => {
    // @ts-expect-error - no props needed here
    import("bootstrap/dist/js/bootstrap.bundle.min.js")
      .then(() => console.log("Bootstrap loaded"))
      .catch(console.error);
  }, []);
  return (
    <>
      <ScrollBar />
      <CommBar />
      <Header />
      <About />
      <Samples />
      <UpBtn />
    </>
  );
}
