"use client";
import { useEffect } from "react";
import Header from "@/components/Header/Header";

export default function Home() {
  useEffect(() => {
    // @ts-ignore
    import("bootstrap/dist/js/bootstrap.bundle.min.js")
      .then(() => console.log("Bootstrap loaded"))
      .catch(console.error);
  }, []);
  return (
    <>
      <Header />
    </>
  );
}
