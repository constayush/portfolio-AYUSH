import { useEffect, useCallback, useMemo, useRef } from "react";
import {motion} from "framer-motion";
import styles from "../heroStyles.css";
import { Link } from "react-router-dom";
import orange from "../../public/orange.svg";
import ProjectCard from "./ui/projectCard";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Lenis from "lenis";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../ThemeContext";
import GistsCard from "./ui/GistsCard";
import {
  GISTS_DATA,
  SOCIAL_LINKS,
  PROJECTS,
  TECH_STACK,
} from "../constants.js";
import { Helmet } from "react-helmet";


function Hero() {
  const { theme, toggleTheme } = useTheme();
  const cursorRef = useRef(null);
  const headingWords = " Creating UIs that pop with clean design and code";
  const org = useRef();
  const projectCon = useRef();
  const textName = useRef();

  const navigate = useNavigate();

  // Memoized event handlers


  const handleScrollArrow = useCallback(() => {
    window.scrollTo({
      top: 630,
      behavior: "smooth",
    });
  }, []);

  const scrollToAbout = useCallback(() => {
    document.querySelector("#about")?.scrollIntoView({
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
    const handleMouseEnter = () => cursor?.classList.add("show");
    const handleMouseLeave = () => cursor?.classList.remove("show");

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
    return () => lenis.destroy();
  }, []);

  const renderSocialIcons = useMemo(
    () =>
      SOCIAL_LINKS.map(({ href, icon, alt }) => (
        <a key={href} target="_blank" rel="noopener noreferrer" href={href}>
          <img className="w-10 heroSocialLogos" src={icon} alt={alt} />
        </a>
      )),
    []
  );

  const renderProjects = useMemo(
    () => PROJECTS.map((project) => <ProjectCard {...project} />),
    []
  );

  const renderGists = useMemo(
    () => GISTS_DATA.map((gist) => <GistsCard gist={gist} {...gist} />),
    []
  );

  const renderTechStack = useMemo(
    () =>
      TECH_STACK.map(({ icon, name }) => (
        <div
          key={name}
          className={`w-auto border grow flex justify-center items-center gap-1 p-2 text-[var(--secondary-text)] border-[var(--border-color)]`}
        >
          <img className="w-8 h-8 " src={icon} alt={name} />
          {name}
        </div>
      )),
    []
  );

  return (
    <>
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

      <div data-theme={theme} className="w-full min-h-screen flex bg-grid-[#000]/[.030] flex-col items-center pt-64 pb-16 text-[var(--text-color)] bg-[var(--bg-color)]">
        <div ref={cursorRef} className="custom-cursor"></div>
          <Navbar />

        <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}  
        transition={{ duration: 1 }}
        className="w-full max-w-5xl flex flex-col justify-center items-center  gap-24 md:gap-48 px-4">
          <main className="main-hero-section-container text-center items-center justify-center flex flex-col gap-4 md:gap-8">
            <h1 className="hero-heading text-[2.8rem] inline text-center">
              <TextGenerateEffect className={"inline"} words={headingWords} />
              <Link to="/orange-rollllllllling">
                <motion.img
                initial={{ opacity: 0, scale: 0,y: 100 ,x: 100, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, y: 0 , x: 0, filter: "blur(0px)" , rotate: 360 }}
                transition={{ duration: 1 }}
                 
                  ref={org}
                  className="ml-4 inline w-12 md:w-[4.25rem] orgLogo"
                  src={orange}
                  alt="o"
                />
              </Link>
            </h1>

            <p className="hero-para text-lg md:text-2xl text-[var(--secondary-text)] text-shadow font-medium">
              — Hi, I'm{" "}
              <a
                onClick={scrollToAbout}
                className="relative inline-block font-semibold cursor-pointer hover:mx-3 transition-all duration-700 text-glow"
                ref={textName}
              >
                Ayush
              </a>
              , a UI Engineer from {" "}
              <span className="font-semibold text-[var(--accent-color)]">
                India
              </span>
              .
            </p>

            <div className="social-container flex">
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
                className="lucide scrollDownArrow lucide-move-down size-10 hover:cursor-pointer text-[var(--text-color)]"
              >
                <path d="M8 18L12 22L16 18"></path>
              </svg>
            </button>
          </main>

          <section
            ref={projectCon}
            className="flex flex-col justify-center w-full gap-8 md:gap-16"
          >
            <h1 className="text-3xl md:text-[2.7rem] font-semibold text-[var(--text-color)]">
              Projects
              <span className="font-semibold text-[var(--accent-color)]">
                .
              </span>
            </h1>

            <div className="break-words grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
              {renderProjects}
            </div>
          </section>

          <section
            id="about"
            className="flex flex-col justify-center w-full gap-8 md:gap-10"
          >
            <h1 className="text-3xl md:text-[2.7rem] font-semibold text-[var(--text-color)]">
              About me
              <span className="font-semibold text-[var(--accent-color)]">
                .
              </span>
            </h1>

            <p className="hero-para text-[1.15rem] text-[var(--secondary-text)] text-shadow font-medium">
              Hi! I'm <b>Ayush Srivastava</b>, a 19-year-old web developer from
              India. Currently a second-year Computer Science student, I work
              with TypeScript, React, and Next.js, building clean and efficient
              web applications. Beyond the IDE, I enjoy chess and Valorant.
            </p>

            <div>
              <h1 className="text-[1.15rem] ] text-[var(--secondary-text)] text-shadow font-bold mb-4">
                Education
              </h1>
              <p className="flex flex-col gap-2  hero-para text-[1.15rem] text-[var(--secondary-text)] text-shadow font-medium">
                <span className="flex flex-wrap w-full justify-between">
                  <p>Bachelor of Technology in Computer Science</p>( Expected:
                  2025 – 2028 )
                </span>

                <span className="flex flex-wrap w-full justify-between">
                  <p> Diploma in Computer Science and Engineering</p>( 2022 – 2025 |
                  CGPA: 8.5/10 )
                </span>
              </p>
            </div>

            <div className="tech-stack-container">
              <h1 className="text-[1.15rem] ] text-[var(--secondary-text)] text-shadow font-bold mb-4">
                Tech Stack
              </h1>

              <span className="flex gap-4 flex-wrap">{renderTechStack}</span>
            </div>

            <hr className="border-[var(--nav-text-color)]"></hr>
            <footer>
              <h1 className="text-[1.15rem] ] text-[var(--secondary-text)] text-shadow font-bold mb-4">
                Contact
              </h1>

              <div className="flex flex-wrap gap-4 text-center items-center justify-center md:justify-between">
                <div className="w-fit rounded-lg flex gap-4 flex-wrap justify-center items-center text-[var(--secondary-text)]">
                  <a
                    className="footerLinks hover:text-[var(--accent-color)]"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/constayush"
                  >
                    GitHub
                  </a>
                  <a
                    className="footerLinks hover:text-[var(--accent-color)]"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/ayush0x1/"
                  >
                    LinkedIn
                  </a>
                  <a
                    className="footerLinks hover:text-[var(--accent-color)]"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.x.com/constayush/"
                  >
                    X / twitter
                  </a>
                  <a
                    className="footerLinks hover:text-[var(--accent-color)]"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/maihoonayush/"
                  >
                    Instagram
                  </a>
                  <a
                    className="hover:cursor-pointer hover:text-[var(--accent-color)]"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="mailto:ayushcodes@outlook.com"
                  >
                    ayushcodes@outlook.com
                  </a>
                  <a
                    className="hover:cursor-pointer hover:text-[var(--accent-color)]"
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
                  className="text-[var(--text-color)] text-[2rem] hover:tracking-[1rem] logoNav"
                  to="/terminal"
                >
                  आ<span className="accent">1.</span>
                </Link>
              </div>
            </footer>
          </section>
        </motion.div>
      </div>
    </>
  );
}

export default Hero;
