import React, { useEffect, useCallback, useMemo ,useRef} from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "../heroStyles.css";
import { Link } from "react-router-dom";
import orange from "../../public/orange.svg";
import ProjectCard from "./ui/projectCard";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Lenis from "lenis";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useTheme } from '../ThemeContext';
import GistsCard from "./ui/GistsCard";
import {GISTS_DATA, SOCIAL_LINKS, PROJECTS, TECH_STACK} from '../constants.js';
import { Helmet } from "react-helmet";
gsap.registerPlugin(ScrollTrigger);


function Hero() {
  const { theme, toggleTheme } = useTheme();
  const cursorRef = useRef(null);
  const headingWords = " Creating UIs that pop with clean design and code";
  const org = useRef();
  const projectCon = useRef();
  const mainHeading = useRef();
  const mainCon = useRef();
  const subHeading = useRef();
  const aboutCon = useRef();
  const miniGame = useRef();
  const textName = useRef();
  const gistscon = useRef();
  
  const navigate = useNavigate();

  // Memoized event handlers
  const handleMouseLeave_orgLogo = useCallback(() => {
    gsap.to(org.current, {
      rotate: "-=360",
    });
  }, []);

  const handleScrollArrow = useCallback(() => {
    window.scrollTo({
      top: 630,
      behavior: "smooth",
    });
  }, []);

  const scrollToAbout = useCallback(() => {
    document.querySelector(".about")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  // Mouse effects
  useEffect(() => {
    const cursor = cursorRef.current;
    const orgLogo = document.querySelector(".orgLogo");

    const handleMouseMove = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };
    const handleMouseEnter = () => cursor.classList.add("show");
    const handleMouseLeave = () => cursor.classList.remove("show");

    document.addEventListener("mousemove", handleMouseMove);
    orgLogo?.addEventListener("mouseenter", handleMouseEnter);
    orgLogo?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      orgLogo?.removeEventListener("mouseenter", handleMouseEnter);
      orgLogo?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    return () => cancelAnimationFrame(raf);
  }, []);

  // GSAP animations
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(org.current, {
      filter: "blur(20px)",
      x: 100,
      scale: 0.1,
      duration: 1,
    }).to(org.current, {
      rotate: 360,
      duration: 80,
      repeat: -1,
      ease: "none",
    });

    gsap.from(mainCon.current, {
      y: 150,
      opacity: 0,
      duration: 0.75,
      stagger: 0.2,
    });

    ScrollTrigger.create({
      trigger: mainCon.current,
      start: "bottom bottom",
      animation: gsap.from(projectCon.current, {
        y: 20,
        ease: "easeIn",
        opacity: 0,
      }),
      scrub: true,
    });
  }, []);

  const renderSocialIcons = useMemo(() => (
    SOCIAL_LINKS.map(({ href, icon, alt }) => (
      <a key={href} target="_blank" rel="noopener noreferrer" href={href}>
        <img className="w-10 heroSocialLogos" src={icon} alt={alt} />
      </a>
    ))
  ), []);

  const renderProjects = useMemo(() => (
    PROJECTS.map((project) => (
      <ProjectCard     
        {...project}
      />
    ))
  ), []);

  const renderGists = useMemo(() => (
    GISTS_DATA.map((gist) => (
      <GistsCard

        {...gist}
      />
    ))
  ), []);

  const renderTechStack = useMemo(() => (
    TECH_STACK.map(({ icon, name }) => (
      <div key={name} className={`w-auto border flex justify-center items-center gap-1 p-2 text-[var(--secondary-text)] border-[var(--border-color)]`}>
        <img className="w-8 h-8" src={icon} alt={name} />
        {name}
      </div>
    ))
  ), []);

  return (<>
  <Helmet>
    <title>Ayush Srivastava's Portfolio</title>
    <meta
      name="description"
      content="Hi, I'm Ayush Srivastava, a web developer and coder. Check out my work, connect with me, and explore my journey!"
    />
    <meta
      name="keywords"
      content="Ayush Srivastava, portfolio, web developer, coder, software engineer, Ayush Srivastava, front-end, back-end, projects, Ayush social links"
    />
    <meta name="author" content="Ayush Srivastava" />
    <meta property="og:title" content="Ayush Srivastava's Portfolio" />
    <meta
      property="og:description"
      content="Hi, I'm Ayush Srivastava, a web developer and coder. Check out my work, connect with me, and explore my journey!"
    />
    <meta property="og:url" content="https://constayush.vercel.app/" />
    <link rel="canonical" href="https://constayush.vercel.app/" />
  </Helmet>
    <div className="hero w-full h-auto bg-grid-[#000]/[.030] relative px-6 bg-[var(--bg-color)]" data-theme={theme}>
      <div ref={cursorRef} className="custom-cursor"></div>

      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main className="flex  justify-center relative w-full min-h-screen pt-[8rem] mb-[1.75rem] md:mb-10 flex-col items-center overflow-x-hidden">
        <div ref={mainCon} className="flex flex-col gap-7 items-center max-w-5xl text-center md:mb-8">
          <div className="flex text-center">
            <div ref={mainHeading} className="text-[2rem] md:text-[2.6rem] lg:text-[2.8rem] font-semibold text-[var(--text-color)]">
              <h1 className="inline text-shadow">
                <TextGenerateEffect className={"inline"} words={headingWords} />
              </h1>
              <Link to="/orange-rollllllllling">
                <img
                  onMouseLeave={handleMouseLeave_orgLogo}
                  ref={org}
                  className="ml-4 inline w-12 md:w-[4.25rem] orgLogo"
                  src={orange}
                  alt="o"
                />
              </Link>
            </div>
          </div>

          <h1 ref={subHeading} className="text-lg md:text-2xl text-[var(--secondary-text)] text-shadow font-medium mb-5">
            — Hi, I'm{" "}
            <a
              onClick={scrollToAbout}
              className="relative inline-block font-semibold cursor-pointer hover:mx-3 transition-all duration-700 text-glow"
              ref={textName}
            >
              Ayush
            </a>
            , a web developer from{" "}
            <span className="font-semibold text-[var(--accent-color)]">India</span>.
          </h1>

          <div className="flex space-x-4">
            <div className="networks  flex flex-col lg:flex-row-reverse  justify-center items-center gap-4">
              <div className="netbox relative bg-[var(--netbox-bg-color)] border-[var(--border-color)] rounded-lg flex gap-4 p-3">
                {renderSocialIcons}
              </div>

              <a
                download=""
                className="p-4 h-full flex items-center  border-[var(--border-color)] bg-[var(--resume-btn-color)] w-full lg:w-auto text-center justify-center hover:bg-[#fff] text-[var(--text-color)] hover:text-[var(--button-hover-text)] rounded transition duration-300 border"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  viewBox="0 0 384 512"
                  className="mr-2"
                  height="18"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm76.45 211.36l-96.42 95.7c-6.65 6.61-17.39 6.61-24.04 0l-96.42-95.7C73.42 337.29 80.54 320 94.82 320H160v-80c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v80h65.18c14.28 0 21.4 17.29 11.27 27.36zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z"></path>
                </svg>
                Resume
              </a>
            </div>
          </div>
        </div>

        <svg
          onClick={handleScrollArrow}
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth=".17"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide scrollDownArrow lucide-move-down size-10 hover:cursor-pointer text-[var(--text-color)]"
        >
          <path d="M8 18L12 22L16 18"></path>
        </svg>
      </main>

      <div id="projects" ref={projectCon} className="flex justify-center w-full h-auto mb-20">
        <div className="w-full max-w-5xl projectss flex flex-col gap-20">
          <h1 className="text-3xl md:text-[2.7rem] font-semibold mb-2 text-[var(--text-color)]">
            Projects<span className="font-semibold text-[var(--accent-color)]">.</span>
          </h1>

          <div className="break-words grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
            {renderProjects}
          </div>
        </div>
      </div>

      <div ref={gistscon} className="flex justify-center w-full h-auto mb-20">
        <div className="w-full max-w-5xl projectss flex flex-col gap-20">

          <span className="flex justify-between items-end">
          <h1 className="text-3xl md:text-[2.7rem] font-semibold mb-2 text-[var(--text-color)]">
          Slices<span className="font-semibold text-[var(--accent-color)]">.</span>
          </h1><Link to="/gists"><span className="font-semibold text-[var(--accent-color)] opacity- underline mr-3">view all</span></Link></span>

          <div className="break-words grid grid-cols-1 md:grid-cols-2 gap-6  place-items-center">
            {renderGists}
          </div>
        </div>
      </div>

      <div ref={aboutCon} className="about flex justify-center w-full h-auto pb-8">
        <div className="w-full max-w-5xl projectss flex flex-col gap-8">
          <h1 className="text-3xl md:text-[2.7rem] font-semibold text-[var(--text-color)]">
            About me<span className="font-semibold text-[var(--accent-color)]">.</span>
          </h1>
          <p className="text-[1.15rem] text-[var(--secondary-text)] font-medium">
            Hi! I'm <span className="font-semibold">Ayush Srivastava</span>, a{" "}
            <span className="font-semibold">19-year-old</span> web developer
            from <span className="font-semibold">India</span>. Currently a
            second-year <span className="font-semibold">Computer Science</span>{" "}
            student, I work with{" "}
            <span className="font-semibold">
              TypeScript, React, and Next.js
            </span>
            , building clean and efficient web applications. Beyond the IDE, I
            enjoy <span className="font-semibold">chess</span> and{" "}
            <span className="font-semibold">Valorant</span>.
          </p>

          <h1 className="font-semibold text-xl text-[var(--text-color)]">My Tech Stack</h1>

          <div className="flex gap-5 flex-wrap">
            {renderTechStack}
          </div>

          <hr className="border-[var(--nav-text-color)]"></hr>

          <h1 className="font-semibold text-xl text-[var(--text-color)]">Contact</h1>

          <div className="flex flex-wrap gap-4 text-center items-center justify-center md:justify-between">
            <div className="w-fit rounded-lg flex gap-4 flex-wrap justify-center items-center text-[var(--secondary-text)]">
              <a className="footerLinks hover:text-[var(--accent-color)]" target="_blank" rel="noopener noreferrer" href="https://github.com/constayush">
                GitHub
              </a>
              <a className="footerLinks hover:text-[var(--accent-color)]" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ayush0x1/">
                LinkedIn
              </a>
              <a className="footerLinks hover:text-[var(--accent-color)]" target="_blank" rel="noopener noreferrer" href="https://www.x.com/constayush/">
                X / twitter
              </a>
              <a className="footerLinks hover:text-[var(--accent-color)]" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/maihoonayush/">
                Instagram
              </a>
              <a className="hover:cursor-pointer hover:text-[var(--accent-color)]" target="_blank" rel="noopener noreferrer" href="mailto:ayushcodes@outlook.com">
                ayushcodes@outlook.com
              </a>
              <a className="hover:cursor-pointer hover:text-[var(--accent-color)]" target="_blank" rel="noopener noreferrer" href="mailto:ayushcodes@outlook.com">
               Resume
              </a>
             
            </div>

            <p className="text-[var(--secondary-text)]">© 2025 Ayush Srivastava</p>
         <Link
                  className="text-[var(--text-color)] text-[2rem] hover:tracking-[1rem] logoNav"
                  to="/terminal"
                >
                  आ<span className="accent">1.</span>
                </Link>
          </div>
        </div>
      </div>
    </div></>
  );
}

export default Hero;