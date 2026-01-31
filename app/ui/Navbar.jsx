"use client";

import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, useScroll, useTransform } from "motion/react";

function Navbar() {
  const nav = useRef(null);
  const { scrollYProgress } = useScroll();
  const pathname = usePathname();
  const router = useRouter();
const spring = {
  type: "spring",
  stiffness: 400,
  damping: 30,
};
  // REAL theme state
  const [theme, setTheme] = useState("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
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

  // Handle navigation with hash
  const handleHashNavigation = (e, hash) => {
    e.preventDefault();

    // If we're on the home page, just scroll to the section
    if (pathname === "/") {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If we're on a different page, navigate to home first, then scroll
      router.push(`/${hash}`);
    }
  };

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

        <ul className="hidden md:flex gap-2 text-center items-center font-semibold justify-center">
          <li className="text-[var(--text-color)] text-[.95rem] md:text-[1.1rem] navLinks">
            <a href="#about" onClick={(e) => handleHashNavigation(e, "#about")}>
              About
            </a>
          </li>
          <li className="text-[var(--text-color)] text-[.95rem] md:text-[1.1rem] navLinks">
            <Link href="/projects">Projects</Link>{" "}
          </li>
          <li className="text-[var(--text-color)] text-[.95rem] md:text-[1.1rem] navLinks">
            <a
              href="#slices"
              onClick={(e) => handleHashNavigation(e, "#slices")}
            >
              Slices
            </a>
          </li>
          <li>
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
          </li>
        </ul>

<button
  onClick={handleMenuToggle}
  className="relative md:hidden w-8 h-8 flex items-center justify-center z-[1000000]"
>
  <motion.span
    className="absolute h-[2px] w-6 bg-[var(--text-color)]"
    animate={menuOpen ? { rotate: 45 } : { rotate: 0, y: -6 }}
    transition={spring}
  />

  <motion.span
    className="absolute h-[2px] w-6 bg-[var(--text-color)]"
    animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
    transition={spring}
  />

  <motion.span
    className="absolute h-[2px] w-6 bg-[var(--text-color)]"
    animate={menuOpen ? { rotate: -45 } : { rotate: 0, y: 6 }}
    transition={spring}
  />
</button>

{menuOpen && createPortal(
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="fixed inset-0 backdrop-blur-3xl bg-[#ffffff14] z-[999999]"
    onClick={handleMenuToggle}
  >


        <ul className="flex flex-col w-full h-full gap-2 text-center items-center font-semibold justify-center">
          <li className="text-[var(--text-color)] text-[1.5rem] underline underline-offset-2 md:text-[1.1rem] navLinks">
            <a href="#about" onClick={(e) => handleHashNavigation(e, "#about")}>
              About
            </a>
          </li>
          <li className="text-[var(--text-color)] text-[1.5rem] underline underline-offset-2 md:text-[1.1rem] navLinks">
            <Link href="/projects">Projects</Link>{" "}
          </li>
          <li className="text-[var(--text-color)] text-[1.5rem] underline underline-offset-2 md:text-[1.1rem] navLinks">
            <a
              href="#slices"
              onClick={(e) => handleHashNavigation(e, "#slices")}
            >
              Slices
            </a>
          </li>
          <li>
            <motion.button
              aria-label="theme-button"
              onClick={toggleTheme}
              whileHover={{ scale: 1.2}}
              whileTap={{ scale: 1.5}}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="theme-toggle border p-2 rounded-xl scale-[.8] text-[1rem] md:text-[1.5rem]"
            >
              {theme === "dark" ? "light ☀️" : "dark 🌙"}
            </motion.button>
          </li>
        </ul>

  </motion.div>,
  document.body
)}

      </nav>
    </div>
  );
}

export default Navbar;
