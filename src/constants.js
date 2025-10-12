import github from "../public/github.svg";
import linkedin from "../public/linked-in.svg";
import insta from "../public/instagram.svg";
import mail from "../public/mail.svg";
import xIcon from "../public/x.svg";
import TypescriptIcon from "../public/typescript.svg";
import ReactIcon from "../public/react-2.svg";
import JavascriptIcon from "../public/javascript.svg";
import NextjsIcon from "../public/nextjs.svg";
import projectImg1 from "../public/project-img1.png";
import projectImg2 from "../public/project-img2.png";
import ExpressjsIcon from "../public/express.svg";
import NodejsIcon from "../public/nodejs.svg";
import MongoDBIcon from "../public/mongodb.svg";

export const slices_code = {

  1: `
    import React, { useRef } from "react";
    import { useTheme } from "../ThemeContext"; //using custom theme context hook
    
    function Navbar() {
      const { theme, toggleTheme } = useTheme();
      const nav = useRef();
    
      window.onscroll = () => { //on scroll will shrink the dock, and stay at the top of the page
        if (window.scrollY > 80) {
          nav?.current?.classList.add("nav-active");
        } else {
          nav?.current?.classList.remove("nav-active");
        }
      };
    
      return (
        <div className="w-full flex justify-center items-center  ">
          <nav
            ref={nav}
            className="flex px-6 w-full lg:w-[64rem] sm:gap-9 gap-3 pt-[5rem] z-[99] fixed top-0 items-center justify-between "
          >
            <div
              className="text-[var(--text-color)] text-[2rem] hover:tracking-[1rem]"
             
            >
              Your LOGO
            </div>
            <ul className="flex gap-3 text-center items-center font-semibold justify-center">
               
              
              <li className="text-[var(--nav-text-color)] text-[1.1rem]  navLinks">
               #1
              </li>     
    
              <li className="text-[var(--nav-text-color)]  text-[1.1rem]  navLinks">
              #2
              </li>
           
    
              <button aria-label="theme-button" onClick={toggleTheme} className="theme-toggle text-[1.5rem] rounded-full  text-shadow-lg hover:rotate-180 hover:scale-150 transition duration-500">
                {theme === "dark" ? "☀️" : "🌙"}
              </button>{" "}
            </ul>
          </nav>
        </div>
      );
    }
    
    export default Navbar;
    
    `,
  2: `import { useEffect } from 'react';
    
    const useSwipe = (onSwipeLeft, onSwipeRight, threshold = 50) => {
      useEffect(() => {
        let touchStartX = 0;
        let touchEndX = 0;
    
        const handleTouchStart = (e) => {
          touchStartX = e.changedTouches[0].screenX;
        };
    
        const handleTouchEnd = (e) => {
          touchEndX = e.changedTouches[0].screenX;
          handleSwipe();
        };
    
        const handleSwipe = () => {
          const distance = touchEndX - touchStartX;
          if (distance > threshold) onSwipeRight?.(); // Right swipe
          if (distance < -threshold) onSwipeLeft?.(); // Left swipe
        };
    
        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchend', handleTouchEnd);
    
        return () => {
          window.removeEventListener('touchstart', handleTouchStart);
          window.removeEventListener('touchend', handleTouchEnd);
        };
      }, [onSwipeLeft, onSwipeRight, threshold]);
    };
    export default useSwipe;`,
  3: `import clsx from "clsx";
  
  export default function TextShine({text="ayush" , className}) {
    return (
      <>
        <style>
      {"
            @keyframes text-shine {
              0% { background-position: -150% 0; }
              100% { background-position: 150% 0; }
            }
            .text-shine {
              animation: text-shine 4s linear infinite;
            }
              "
            }
        
        </style>
        <span
          className={clsx(
           "bg-[linear-gradient(125deg,#FE8808_20%,#ffffff_40%,#FE8808_60%)] bg-[length:300%_100%] bg-clip-text text-transparent text-shine",
            className
          )}
        >
          {text}
        </span>
      </>
    );
  }
  `

}

export const GISTS_DATA = [

  {

    gistName: "Navbar Dock",
    gistShortDescription: "Dock styled navbar which shrinks on scroll",
    gistDescription: "Dock styled navbar which shrinks on scroll, stays at the top of the page, toggle between css classes to shrink and expand",
    gistId: 1,
    gistTags: ["React", "Tailwind"],
    gistCode: slices_code[1],
    gistCss: `.nav-active {
  box-shadow: var(--box-shadow);
  text-decoration: none;
  backdrop-filter: blur(15px);
  padding: 1.25rem;
  margin: 1.25rem;
  width: fit-content;
  height: fit-content;
  background-color: var(--nav-bg-color);
  border-radius: 8px;
  transform: scale(.9);
}`,
    gistDeps: "",
    gistUsage: ` `,
    gistLanguage: "javascript",
  },
  {
    gistName: "useSwipe hook",
    gistShortDescription: "hook for detecting swipe gestures",
    gistDescription: `hook for detecting swipe gestures, hook accepts onSwipeLeft, onSwipeRight callbacks and threshold as arguments.
   Threshold defaults to 50, onSwipeLeft and onSwipeRight you can pass a callback function to handle what happen when swipe is detected`,
    gistId: 2,
    gistTags: ["React", "Javascript"],
    gistCode: slices_code[2],
    gistLanguage: "javascript",
    gistUsage: `
    useSwipe(
      () => setIsSidebarVisible(false), // swipe left to close
      () => setIsSidebarVisible(true), // swipe right to open
      100 // threshold for swipe detection
    );
    `
  },
//   {
//     gistName: "TextShine Component",
//     gistShortDescription: "Shiny gradient text animation with Tailwind, no Tailwind config changes required",
//     gistDescription: `A reusable React component that renders text with a gradient "shine" animation using Tailwind CSS.
// This version injects the required keyframes and animation styles directly in the component via a <style> tag,
// so no tailwind.config.js modifications are needed. Accepts a 'text' prop and optional 'className' prop.`,
//     gistId: 3,
//     gistTags: ["React", "Tailwind", "UI Component", "No Config"],
//     gistCode: slices_code[3],
//     gistLanguage: "javascript",
//     gistUsage: `
// // Example usage
// <TextShine text="Shiny Sclices Text ✨" className="text-4xl font-bold" />
// // Works instantly without editing tailwind.config.js
// `
//   }


]

export const SOCIAL_LINKS = [
  { href: "https://github.com/constayush", icon: github, alt: "GitHub" },
  { href: "https://www.linkedin.com/in/ayush0x1/", icon: linkedin, alt: "LinkedIn" },
  { href: "https://www.instagram.com/maihoonayush/", icon: insta, alt: "Instagram" },
  { href: "https://www.x.com/constayush/", icon: xIcon, alt: "X" },
  { href: "mailto:ayushcodes@outlook.com", icon: mail, alt: "Mail" }
];

export const PROJECTS = [
  {
    projectName: "Slices UI",
    projectDescriptionShort: "Slices — a fresh collection of UI elements and reusable code snippets I cut, styled, and served.",
    projectDescriptionLong: "Inspired by libraries like Hero UI and Aceternity UI, Slices UI is a curated set of sleek, reusable components designed for fast, modern web dev. Built with love, Tailwind, and way too much coffee.",
    projectImg: projectImg1,
    projectCode: "https://github.com/constayush/portfolio-AYUSH/blob/master/src/components/Slices.jsx",
    projectLive: "https://constayush.vercel.app/slices",
    projectId: 1,
  }
  ,
  {
    projectName: "Boxit",
    projectDescriptionShort: "Box'It is a boxing app that helps users learn, practice, and improve, offering valuable resources for all skill levels.",
    projectDescriptionLong: "Box'It is a comprehensive boxing app designed for everyone—from beginners to experienced fighters. It features interactive tutorials, guided training sessions, and personalized workout plans to help users sharpen their skills and track their progress.",
    projectImg: projectImg2,
    projectCode: "https://github.com/constayush/Boxit",
    projectLive: "https://boxit-two.vercel.app/",
    projectId: 2,
  },
];

export const TECH_STACK = [
  { icon: JavascriptIcon, name: "JavaScript" },
  { icon: TypescriptIcon, name: "TypeScript" },
  { icon: ReactIcon, name: "React" },
  { icon: NextjsIcon, name: "Next.js" },
  { icon: NodejsIcon, name: "Node.js" },
  { icon: ExpressjsIcon, name: "Express.js" },
  { icon: MongoDBIcon, name: "MongoDB" },
];

