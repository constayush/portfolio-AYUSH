"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { GISTS_DATA } from "../../constants.js";
import { useTheme } from "../../ThemeContext.jsx";
import slicesIcon from "../../../public/slices.svg";
import { Link, Outlet, useLocation } from "react-router-dom";
import { ArrowDown, Menu , X} from "lucide-react";
import { slices_data } from "../slices/constant.js";

function Slices() {
  const { theme, toggleTheme } = useTheme();
  const logo = useRef();
  const location = useLocation();
  const initial_gist = location.state ? location.state : GISTS_DATA[0];
  const [selectedGist, setSelectedGist] = useState(initial_gist);
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const sidebar_data = slices_data;
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      data-theme={theme}
      className="SLICES relative bg-[var(--bg-slice-color)] w-full min-h-screen flex flex-col md:flex-row px-8 pt-10 md:pt-8"
    >
      <Helmet></Helmet>
      <motion.span
        initial={{ y: -800, x: -800 }}
        animate={{ y: 0, x: 0 }}
        transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
        className="absolute top-0 left-0 bg-[#9b9a9a] w-[40%] h-[10%] blur-[200px] -z-10"
      ></motion.span>
      <motion.span
        initial={{ y: -800, x: -800 }}
        animate={{ y: 0, x: 0 }}
        transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
        className="absolute top-0 right-0 bg-[#ff9d00] w-[60%] h-[10%] blur-[200px] -z-10"
      ></motion.span>
      <div className="relative flex flex-1 w-full min-h-screen mt-[7rem]">
        {/* Navbar */}

        <nav className="fixed bg-[var(--bg-slice-color)] w-full top-0 left-0 px-4 sm:px-8 py-4 sm:py-8 z-[99] justify-between flex border-b border-1 border-[#323232]">
          <motion.div
            initial={{ opacity: 0, scale: 3, letterSpacing: 10 }}
            animate={{ opacity: 1, scale: 1, letterSpacing: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="flex items-center gap-1 transition-all duration-700"
          >
            <img
              src={
                slicesIcon ||
                "/placeholder.svg?height=48&width=48&query=slices logo"
              }
              className="w-8 sm:w-12"
              alt="Slices logo"
            />
            <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mb-2 text-[var(--text-color)]">
              Slices<span className="text-[var(--accent-color)]">.</span>
            </h1>
          </motion.div>
<p className="animate-pulse text-[red]">**Under Maintenance**</p>
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
              className="md:hidden text-[var(--slices-primary-text)] p-2"
              aria-label="Toggle mobile menu"
            >
              {isMobileSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            <Link
              to={"/"}
              className="text-[var(--slices-primary-text)] font-semibold text-xs sm:text-sm navLinks"
            >
              Portfolio
            </Link>

            <motion.button
              aria-label="theme-button"
              onClick={toggleTheme}
              whileHover={{ scale: 1.5, rotate: 90 }}
              whileTap={{ scale: 1.5, rotate: 90 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="theme-toggle text-sm sm:text-base md:text-xl rounded-full text-shadow-lg"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </motion.button>
          </div>
        </nav>

        {/* Sidebar / Aside */}
 
        <aside className="sticky top-36 max-h-[calc(100vh-10rem)] w-full md:w-64 text-white rounded-lg overflow-y-auto ">
          <ul className="space-y-6">
            {sidebar_data.map((section, index) => {
              const isOpen = isExpanded === index; // check if this section is open
              return (
                <li className="overflow-x-hidden" key={index}>
                  {/* Section title button */}
                  <button
                    onClick={
                      () => setIsExpanded(isOpen ? null : index) // toggle open/close
                    }
                    className="flex items-center justify-between w-full text-md font-semibold text-[var(--slices-primary-text)]"
                  >
                    {section.title}
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowDown className="mx-4 text-[var(--slices-secondary-text)]" size={18} />
                    </motion.span>
                  </button>

                  {/* Components list */}
                  <motion.ul
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden space-y-2 pl-4 mt-2"
                  >
                    {section.components?.map((component, i) => (
                      <motion.li
                        key={i}
                        initial={{ x: -10, opacity: 0 }}
                        animate={{
                          x: isOpen ? 0 : -10,
                          opacity: isOpen ? 1 : 0,
                        }}
                        transition={{ delay: i * 0.05 }}
                        className="text-[var(--slices-secondary-text)]"
                      >
                        <Link to={`/slices/${component.toLowerCase()}`}>
                          {component}
                        </Link>
                      </motion.li>
                    ))}
                  </motion.ul>
                </li>
              );
            })}
          </ul>
        </aside>

        {/* Main content */}

        <motion.main className="flex-1 dark:bg-gray-900 px-8  rounded-lg ">
          <Outlet />
        </motion.main>
      </div>
    </motion.div>
  );
}

export default Slices;
