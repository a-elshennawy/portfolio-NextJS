import NavBar from "@/components/NavBar/NavBar";
import ScrollBar from "@/components/ScrollBar/ScrollBar";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ahmed ElShennawy",
  description:
    "Frontend Developer with a strong foundation in HTML, CSS, JavaScript, and React. Experienced in building responsive web applications and continuously learning new technologies. Strong problem-solving skills, team collaboration experience, and adaptability. Transitioned into tech with a passion for creating user-friendly, visually appealing web experiences.",
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
      <body>
        <NavBar />
        {children}
        <ScrollBar />
      </body>
    </html>
  );
}
