'use client';

import { motion } from "motion/react";
import "./heroStyles.css";
import Link from "next/link";
import Image from "next/image";
import orange from "../public/orange.svg";
import ProjectCard from "./ui/ProjectCard";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Lenis from "lenis";
import Navbar from "./ui/Navbar";
import GistsCard from "./ui/GistsCard";
import {useCustomCursor} from "./utils/useCursor";

import {
  GISTS_DATA,
  SOCIAL_LINKS,
  PROJECTS,
  TECH_STACK,
} from "./constants";
import { useRef, useCallback, useEffect, useMemo } from "react";
import HighlightedLink from "./ui/HighlightedLink";

function PageClient() {
  const theme = "dark"; 
  
  // Use the optimized cursor hook
  const cursorRef = useCustomCursor(".orgLogo");
  
  const headingWords = " Hi I'm Ayush — A Full Stack Engineer from India";
  const org = useRef<HTMLImageElement>(null);
  const projectCon = useRef<HTMLElement>(null);

  const handleScrollArrow = useCallback(() => {
    window.scrollTo({
      top: 700,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const lenis = new Lenis();
    let rafId: number;
    
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    
    rafId = requestAnimationFrame(raf);
    
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const renderSocialIcons = useMemo(
    () =>
      SOCIAL_LINKS.map(({ href, icon, alt }) => (
        <a key={href} target="_blank" rel="noopener noreferrer" href={href}>
          <Image className="w-10 heroSocialLogos" src={icon} alt={alt} width={40} height={40} />
        </a>
      )),
    []
  );

  const renderProjects = PROJECTS.slice(0, 2).map((project) => (
        <ProjectCard key={project.projectId} {...project} />
      ));
      
  
  const renderGists = GISTS_DATA.slice(0, 2).map((gist) => (
        <GistsCard key={gist.gistId}  {...gist} />
      ));
  
      
 

  const renderTechStack = useMemo(
    () =>
      TECH_STACK.map(({ icon, name }) => (
        <div
          key={name}
          className="w-auto border flex justify-center items-center gap-1 hover:bg-orange-200/50 p-2 text-[var(--secondary-text)] border-[var(--border-color)]"
        >
          <Image id="name" unoptimized className="w-8 h-8" src={icon} alt={name} width={32} height={32} />
          {name}
        </div>
      )),
    []
  );

  return (
    <div
      data-theme={theme}
      className="w-full min-h-screen relative flex bg-grid-[#000]/[.030] flex-col items-center pt-40 md:pt-44 pb-16 text-(--text-color) bg-(--bg-color)"
    >
      <div ref={cursorRef} className="custom-cursor"></div>

      <Navbar />

      <motion.span
        initial={{ opacity: 0, top: "-100px" }}
        animate={{ opacity: 1, top: 0 }}
        transition={{ duration: 1 }}
        className="fixed pointer-events-none z-0 top-0 left-0 w-[60%] h-24 bg-(--blob-color) blur-[200px]"
      />

      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{ duration: 1 }}
        className="w-full max-w-5xl flex flex-col justify-center items-center gap-24 md:gap-32 px-6"
      >
        {/* Main Hero Section */}
        <main className="main-hero-section-container text-center items-center justify-center flex flex-col gap-4 md:gap-8">
          <h1 className="hero-heading text-[var(--text-color)] text-[1.8rem] md:text-[2.8rem] inline text-center">
            <TextGenerateEffect className="inline" words={headingWords} />
            <Link href="/orange_rolling">
              <motion.img
                style={{
                  shapeRendering: "geometricPrecision",
                  transformOrigin: "center center",
                  backfaceVisibility: "hidden",
                }}
                initial={{
                  opacity: 0,
                  scale: 0,
                  y: 100,
                  x: 100,
                  filter: "blur(10px)",
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  x: 0,
                  filter: "blur(0px)",
                  rotate: [0, 360],
                }}
                transition={{
                  opacity: { duration: 0.8 },
                  scale: { duration: 0.8 },
                  y: { duration: 0.8 },
                  x: { duration: 0.8 },
                  filter: { duration: 0.8 },
                  rotate: {
                    repeat: Infinity,
                    duration: 30,
                    ease: "linear",
                    repeatType: "loop",
                  },
                }}
                ref={org}
                className="ml-4 inline w-12 md:w-17 orgLogo"
                src={orange.src || orange}
                alt="o"
              />
            </Link>
          </h1>

          <p className="hero-para text-lg md:text-2xl md:max-w-[80%] text-(--secondary-text) text-shadow font-medium">
            Creating UIs that pop with clean design and code with <HighlightedLink name="TypeScript" img="/typescript.svg" /> , <HighlightedLink name="React" img="/react-2.svg" /
            > , <HighlightedLink name="Next.js" img="/nextjs.svg" /> , <HighlightedLink name="Bun.js" img="/bun.svg" /> , and <HighlightedLink name="PostgreSQL" img="/postgresql.svg" /> .
          </p>

          {/* Socials & Resume */}
          <div className="social-container flex mt-6 md:mt-6">
            <div className="networks flex flex-col lg:flex-row-reverse justify-center items-center gap-4">
              <div className="netbox relative bg-[var(--netbox-bg-color)] border-[var(--border-color)] rounded-lg flex gap-4 p-3">
                {renderSocialIcons}
              </div>
              <a
                download
                className="p-4 h-full cursor-not-allowed flex items-center border-[var(--border-color)] bg-[var(--resume-btn-color)] w-full lg:w-auto text-center justify-center hover:bg-[#fff] text-(--text-color) hover:text-[var(--button-hover-text)] rounded transition duration-300 border"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  viewBox="0 0 384 512"
                  className="mr-2"
                  height="18"
                  width="18"
                >
                  <path d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm76.45 211.36l-96.42 95.7c-6.65 6.61-17.39 6.61-24.04 0l-96.42-95.7C73.42 337.29 80.54 320 94.82 320H160v-80c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v80h65.18c14.28 0 21.4 17.29 11.27 27.36z" />
                </svg>
                Resume
              </a>
            </div>
          </div>

          {/* Scroll Button */}
          <button className="scrollDown-btn" onClick={handleScrollArrow}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth=".17"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide scrollDownArrow lucide-move-down size-10 hover:cursor-pointer text-(--text-color)"
            >
              <path d="M8 18L12 22L16 18" />
            </svg>
          </button>
        </main>

        {/* Projects */}
        <section  className="flex flex-col justify-center w-full gap-8 md:gap-8"
          ref={projectCon}
        >
          <h1 className="text-3xl md:text-[2.7rem] font-semibold text-(--text-color)">
            Projects
            <span className="font-semibold text-[var(--accent-color)]">
              .
            </span>
          </h1>
          <div className="break-words grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
            {renderProjects}
          </div>
        </section>

        {/* Slices */}
        <section className="flex flex-col justify-center w-full gap-8 md:gap-8">
          <span className="flex items-end w-full justify-between">
            <h1 className="text-3xl md:text-[2.7rem] font-semibold text-(--text-color)">
              Slices
              <span className="font-semibold text-[var(--accent-color)]">
                .
              </span>
            </h1>
            <Link
              className="mr-2 underline underline-offset-4 hover:text-(--accent-color)"
              href="/slices"
            >
              view all
            </Link>
          </span>
          <div className="break-words grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
            {renderGists}
          </div>
        </section>

        {/* About Me */}
        <section
          id="about"
          className="flex flex-col justify-center w-full gap-8 md:gap-8"
        >
          <h1 className="text-3xl md:text-[2.7rem] font-semibold text-(--text-color)">
            About me
            <span className="font-semibold text-[var(--accent-color)]">
              .
            </span>
          </h1>

          <div className="flex md:flex-row flex-col items-start gap-8 md:gap-0">
            <Image 
              src="/avatar.png"
              alt="me"
              width={200}
              height={200}
              className=" hover: grayscale-100 hover:grayscale-50 rounded-lg border-[var(--border-color)] border object-cover mr-6"
            />

          <p className="hero-para text-[1.15rem] text-[var(--secondary-text)] text-shadow font-medium">
            I&apos;m Ayush, an engineer from India. I&apos;m that kid who never grew out of breaking gadgets just to see how they worked — except now I actually know how to put them back together (most of the time). I ship pixel-perfect UIs to fiddling with Raspberry Pis and Arduinos at 3AM, A nerd who building things that feel alive software, hardware, or that weird place where both shake hands and yeah <Link href="/orange_rolling" className="hover:text-orange-400 hover:font-bold">orange</Link> is my favorite color/fruit.
          </p></div>

          <div>
            <h1 className="text-[1.15rem] text-[var(--secondary-text)] text-shadow font-bold mb-4">
              Education
            </h1>
            <div className="flex flex-col gap-2 hero-para text-[1.15rem] text-[var(--secondary-text)] text-shadow font-medium">
              <span className="flex flex-wrap w-full justify-between">
                <p>Bachelor of Technology in Computer Science</p>( Expected:
                2025 – 2028 )
              </span>
              <span className="flex flex-wrap w-full justify-between">
                <p>Diploma in Computer Science and Engineering</p>( 2022 –
                2025 | CGPA: 8.5/10 )
              </span>
            </div>
          </div>

          <div className="tech-stack-container">
            <h1 className="text-[1.15rem] text-[var(--secondary-text)] text-shadow font-bold mb-4">
              Tech Stack
            </h1>
            <span className="flex gap-4 flex-wrap">{renderTechStack}</span>
          </div>

          <hr className="border-[var(--nav-text-color)]" />

          {/* Footer */}
          <footer className="relative">
            <h1 className="text-[1.15rem] text-[var(--secondary-text)] text-shadow font-bold mb-4">
              Contact
            </h1>
            <div className="flex flex-wrap gap-4 text-center items-center justify-center md:justify-between">
              <div className="w-fit rounded-lg flex gap-4 flex-wrap justify-center items-center text-[var(--secondary-text)]">
                <a
                  className="footerLinks hover:text-(--accent-color)"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/constayush"
                >
                  GitHub
                </a>
                <a
                  className="footerLinks hover:text-(--accent-color)"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/ayush0x1/"
                >
                  LinkedIn
                </a>
                <a
                  className="footerLinks hover:text-(--accent-color)"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.x.com/constayush/"
                >
                  X / twitter
                </a>
                <a
                  className="footerLinks hover:text-(--accent-color)"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/maihoonayush/"
                >
                  Instagram
                </a>
                <a
                  className="hover:cursor-pointer hover:text-(--accent-color)"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:ayushcodes@outlook.com"
                >
                  ayushcodes@outlook.com
                </a>
                <a
                  className="hover:cursor-pointer hover:text-(--accent-color)"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:ayushcodes@outlook.com"
                >
                  Resume
                </a>
              </div>
              <p className="text-[var(--secondary-text)]">
                © 2025 Ayush Srivastava
              </p>
              <Link
                className="text-(--text-color) text-[2rem] [text-shadow:_0_0_2px_orange,_0_0_2px_orange] relative  logoNav"
                href="/terminal"
              >
                आ<span className="accent">1.</span>
              </Link>
            </div>
          </footer>
        </section>
      </motion.div>
    </div>
  );
}

export default PageClient;