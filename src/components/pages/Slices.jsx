"use client";

import { useRef, useState, useEffect } from "react";
import Navbar from "../ui/Navbar.jsx";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { GISTS_DATA } from "../../constants.js";
import { useTheme } from "../../ThemeContext.jsx";
import { CodeBlock } from "../ui/CodeBlock.jsx";
import slicesIcon from "../../../public/slices.svg";
import { Link, useLocation } from "react-router-dom";
import { ArrowDownCircle } from "lucide-react";
import useSwipe from "../../../utils/useSwipe.js";
import { LiveProvider, LiveEditor, LivePreview, LiveError } from "react-live";
import * as UI from "../slices_components/index.js";
import clsx from "clsx";
import React from "react";
import { title } from "process";

function Slices() {
  const { theme, toggleTheme } = useTheme();
  const logo = useRef();
  const location = useLocation();
  const initial_gist = location.state ? location.state : GISTS_DATA[0];
  const [selectedGist, setSelectedGist] = useState(initial_gist);
  const [isExpanded, setIsExpanded] = useState(false);

  const sidebar_data = [
    {
      title: "Getting Started",
      components: ["Introduction", "Gallery"],
    },
    {
      title: "Layouts",
      components: ["Header", "Footer", "Sidebar", "Grid", "Stack", "Container"],
    },
    {
      title: "Utilities",
      components: [
        "useSwipe.ts",
        "useDebounce.ts",
        "useClickOutside.ts",
        "useDarkMode.ts",
        "ScrollToTop.jsx",
      ],
    },
    {
      title: "Buttons",
      components: [
        "PrimaryButton",
        "SecondaryButton",
        "OutlineButton",
        "IconButton",
        "FloatingActionButton",
      ],
    },
    {
      title: "Inputs & Forms",
      components: [
        "TextInput",
        "PasswordInput",
        "Textarea",
        "Select",
        "Checkbox",
        "Radio",
        "FormValidation",
      ],
    },
    {
      title: "Navigation & Menus",
      components: [
        "Navbar",
        "SidebarMenu",
        "Tabs",
        "Dropdown",
        "Breadcrumb",
        "Pagination",
        "Stepper",
      ],
    },
    {
      title: "Cards & Data Display",
      components: [
        "InfoCard",
        "ProfileCard",
        "ImageCard",
        "Table",
        "List",
        "Badge",
        "Tooltip",
        "Popover",
        "Modal",
      ],
    },
    {
      title: "Feedback & Status",
      components: [
        "Alert",
        "Toast",
        "Notification",
        "ProgressBar",
        "Loader",
        "Skeleton",
        "Accordion",
        "Collapsible",
      ],
    },
    {
      title: "Media & Interactive",
      components: [
        "ImageGallery",
        "VideoPlayer",
        "Carousel",
        "Swiper",
        "AnimatedComponent",
      ],
    },
    {
      title: "Charts & Advanced",
      components: [
        "LineChart",
        "BarChart",
        "PieChart",
        "DragAndDrop",
        "ResizablePanel",
        "CodeSnippet",
        "InteractivePlayground",
      ],
    },
  ];

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

        <nav className="fixed bg-[var(--bg-slice-color)] w-full top-0 left-0 p-8 z-[99] justify-between flex  border-b border-1 border-[#323232]">
          {" "}
          <motion.div
            initial={{ opacity: 0, scale: 3, letterSpacing: 10 }}
            animate={{ opacity: 1, scale: 1, letterSpacing: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="flex items-center gap-1 transition-all duration-700"
          >
            <img src={slicesIcon} className="w-[3rem]" />
            <h1 className="text-2xl md:text-4xl font-bold mb-2 text-[var(--text-color)]">
              Slices<span className="text-[var(--accent-color)]">.</span>
            </h1>
          </motion.div>
          {/* <p className="mb-6 text-[var(--secondary-text)]">
              — components & utils I cut, styled, and served
            </p> */}
          <div className="flex items-center gap-4">
            <Link
              to={"/"}
              className="text-[var(--slices-primary-text)] font-semibold text-sm navLinks"
            >
              Portfolio
            </Link>

            <motion.button
              aria-label="theme-button"
              onClick={toggleTheme}
              whileHover={{ scale: 1.5, rotate: 90 }}
              whileTap={{ scale: 1.5, rotate: 90 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="theme-toggle text-[1rem] md:text-[1.5rem] rounded-full text-shadow-lg"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </motion.button>
          </div>
        </nav>

        {/* Sidebar / Aside */}

        <aside className="sticky top-36 max-h-[calc(100vh-10rem)] w-full md:w-64 text-white rounded-lg overflow-y-auto ">
          <ul className="space-y-6">
            {sidebar_data.map((section, index) => (
              <li key={index} className="">
                <button className="text-md font-semibold text-[var(--slices-primary-text)]">
                  {section.title}
                </button>
                <ul className="space-y-2 mt-2">
                  {section.components?.map((component, index) => (
                    <li
                      key={index}
                      className="text-[var(--slices-secondary-text)]"
                    >
                      <button>{component}</button>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main content */}

        <motion.main className="flex-1 dark:bg-gray-900 px-8 h-[300vh] rounded-lg ">
          <h1 className="text-2xl font-bold mb-4">Main Content</h1>
          <p className="animate-pulse text-[var(--text-color) text-3xl ">
            coming soon! 
          </p>
        </motion.main>
      </div>
    </motion.div>
  );
}

export default Slices;
