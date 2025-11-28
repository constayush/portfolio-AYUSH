import type { Metadata } from "next";
import "./globals.css";


import { Montserrat, Orbitron, Source_Code_Pro, Zen_Dots } from "next/font/google";
import ScrollToTop from "./utils/ScrollToTop";


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-montserrat",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-orbitron",
});

const code = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-code",
});

const zen = Zen_Dots({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-zen",
});

export const metadata: Metadata = {
  title: "Ayush Srivastava Portfolio",
  description:
    "It is a portfolio of Ayush Srivastava, Hey, I'm Ayush, an 19-year-old web developer fueled by curiosity and passionate about building ui interfaces...",
  authors: [{ name: "Ayush Srivastava" }],
  keywords: [
    "Ayush Srivastava",
    "ayush srivastava portfolio",
    "React",
    "javascript",
    "AYUSH",
    "maihoonayush",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Ayush Srivastava Portfolio",
    description: "Ayush Srivastava, A Full-Stack Engineer",
    url: "https://constayush.vercel.app",
    images: "https://constayush.vercel.app/thumbnail.png",
    type: "article",
  },
  verification: {
    google: "ZvV4-8qcmm7ala4RjMTJlyfScxn8SoszBseW9DVbKXY",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/orange.svg" type="image/x-icon" />
      </head>
      <body
        className={` ${montserrat.variable} ${orbitron.variable} ${code.variable} ${zen.variable} antialiased`}
      >
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
