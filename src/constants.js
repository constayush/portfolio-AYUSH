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

export const GISTS_DATA = [{
    gistName: "Navbar Dock",
    gistDescription: "Dock styled navbar which shrinks on scroll, stays at the top of the page",
    gistId: 1,
    gistTags: ["React", "Tailwind"],
    gistCode: `
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
    
    `
    ,
    gistCss:`.nav-active {
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
    gistDeps:"",
    gistLanguage: "javascript",
},
{
    gistName: "Card with Shine Effect",
    gistDescription: "Card with shine effect on hover using tailwind",
    gistId: 2,
    gistTags: ["React", "Tailwind"],
    gistCode: "console.log('comming soon')",
    gistLanguage: "javascript",
},
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
    projectDescriptionShort: "Slices UI is my personal component library — a fresh collection of UI elements I cut, styled, and served.",
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