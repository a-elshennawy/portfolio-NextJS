"use client";
import { useEffect } from "react";
import Header from "@/components/Header/Header";
import About from "@/components/About/About";

export default function Home() {
  useEffect(() => {
    // @ts-expect-error - no props needed here
    import("bootstrap/dist/js/bootstrap.bundle.min.js")
      .then(() => console.log("Bootstrap loaded"))
      .catch(console.error);
  }, []);
  return (
    <>
      <Header />
      <About />
    </>
  );
}
