import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../ThemeContext";
import { motion, useScroll, useTransform } from "framer-motion";
function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const nav = useRef();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });


    // Scale border width/height from center
  const borderTopBottom = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  window.onscroll = () => {
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
        className="flex px-6 w-full  lg:w-[64rem] sm:gap-9 gap-3 pt-[5rem]   navbar-short z-[99] fixed top-0  items-center justify-between  "
      >



      <motion.div
        style={{ width: borderTopBottom }}
        className="absolute bottom-0 left-1/2 h-[2px] bg-[var(--border-color)]  -translate-x-1/2 origin-center"
      />
     
        <Link
          className="text-[var(--text-color)]   text-[2rem] hover:tracking-[1rem] logoNav"
          to="/"
        >
          आ<span className="accent">1.</span>
        </Link>
        <ul className="flex gap-3 text-center items-center font-semibold justify-center">
           
          
          <li className="text-[var(--text-color)] text-[1.1rem]  navLinks">
            <Link to="/">Home</Link>
          </li>     

          <li className="text-[var(--text-color)]  text-[1.1rem]  navLinks">
          <Link to="/slices">Slices</Link>
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
