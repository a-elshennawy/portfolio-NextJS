import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ahmed ElShennawy",
  description:
    "a self-driven front-end developer with a strong eye for detail and a love for clean, responsive interfaces. I blend creative intuition with technical discipline to turn ideas into smooth, performant user experiences.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
