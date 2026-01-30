"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";

function Navbar() {
  const nav = useRef(null);
  const { scrollYProgress } = useScroll();

  // REAL theme state
  const [theme, setTheme] = useState("dark");

  // Load theme on mount
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setTheme(saved);
  }, []);

  // Apply theme to DOM + persist
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  };

  // Scroll logic (unchanged)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        nav.current?.classList.add("nav-active");
      } else {
        nav.current?.classList.remove("nav-active");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const borderTopBottom = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="w-full flex justify-center items-center">
      <nav
        ref={nav}
        className="flex px-6 md:px-6 w-full lg:w-[64rem] sm:gap-9 gap-3 pt-[2rem] navbar-short z-[90000000009] fixed top-0 items-center justify-between"
      >
        <motion.div
          style={{ width: borderTopBottom }}
          className="absolute bottom-0 left-1/2 h-[2px] bg-[var(--border-color)] -translate-x-1/2 origin-center"
        />

        <Link
          className="text-[var(--text-color)] text-[1.35rem] md:text-[2rem] hover:tracking-[1rem] logoNav"
          href="/terminal"
        >
          आ<span className="accent">1.</span>
        </Link>

        <ul className="flex gap-2 text-center items-center font-semibold justify-center">
          <li className="text-[var(--text-color)] text-[.95rem] md:text-[1.1rem] navLinks">
            <Link href="#about">About</Link>
          </li>
          {/* <li className="text-[var(--text-color)] text-[.95rem] md:text-[1.1rem] navLinks">
            <Link href="/projects">Projects</Link>{" "}
          </li>
          <li className="text-[var(--text-color)] text-[.95rem] md:text-[1.1rem] navLinks">
            <Link href="#about">Slices</Link>
          </li> */}
          <motion.button
            aria-label="theme-button"
            onClick={toggleTheme}
            whileHover={{ scale: 1.2, rotate: 90 }}
            whileTap={{ scale: 1.5, rotate: 90 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="theme-toggle text-[1rem] md:text-[1.5rem]"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </motion.button>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
