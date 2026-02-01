"use client";

import "../slices.css"
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { useEffect } from "react";
const demoItems = [
  { id: 1, title: "Getting Started", icon: "-" },
  { id: 2, title: "Components", icon: "-" },
  { id: 3, title: "Utilities", icon: "-" },
  { id: 4, title: "Templates", icon: "-" },
  { id: 5, title: "Examples", icon: "-" },
  { id: 6, title: "Resources", icon: "-" },
  { id: 7, title: "Community", icon: "-" },
  { id: 8, title: "Settings", icon: "-" },
];

function Page() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
    const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

    useEffect(() => {
      const saved = localStorage.getItem("theme");
      if (saved) setTheme(saved);
    }, []);
  
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: .75 }}
    className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="fixed flex w-full top-0 left-0 border-b border-[var(--border-2-color)] justify-between items-center px-4 py-2 bg-[var(--bg-color)] z-50">
        <div className="flex items-center gap-4">
          {/* Toggle Button */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle sidebar"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
          <motion.span 
          initial={{ opacity: 0, letterSpacing: "0.6em" }}
          animate={{ opacity: 1, letterSpacing: "0em" }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center text-center"> 
          <h1 className="text-[1.8rem] md:text-[1.8rem] text-[var(--text-color)] font-bold">
            Slices
          </h1>
          <Image 
            src="/slices.svg" 
            width={32}
            height={32}
            alt="Logo" 
            className="w-8 h-fit rounded-full object-cover"
          /></motion.span>
        </div>
       
       <span className="gap-1 flex justify-center items-center"> <Link 
          href="/" 
          className="hover:text-[var(--text-color)] transition-colors"
        >
          portfolio
        </Link>
            
           <motion.button
                      aria-label="theme-button"
                      onClick={toggleTheme}
                      whileHover={{ scale: 1.2, rotate: 90 }}
                      whileTap={{ scale: 1.5, rotate: 90 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10 }}
                      className="theme-toggle grayscale-10 hover:grayscale-0  text-[1rem] md:text-[1.15rem] "
                    >
                      {theme === "dark" ? "☀️" : "🌙"}
                    </motion.button>  </span>        
        
      </nav>

      <div className="flex pt-[60px]">
        {/* Sidebar */}
        <aside
          className={`fixed md:sticky top-[60px] left-0 h-[calc(100vh-60px)] bg-[var(--bg-color)] border-r border-[var(--border-2-color)] z-40 transition-all duration-300 ease-in-out ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          } ${
            sidebarOpen ? "w-64" : "md:w-0 hidden md:border-0"
          }`}
        >
          <div className="px-6 py-8 overflow-y-auto h-full">
            <h2 className="text-sm font-semibold text-[var(--secondary-text)] mb-4 uppercase tracking-wider">
              Navigation
            </h2>
            <ul className="space-y-2">
              {demoItems.map((item) => (
                <li key={item.id}>
                  <button
                    className="w-full text-left px-4 py-3 rounded-lg hover:bg-white/10 transition-colors flex items-center gap-3 group"
                  >
                    <span className="text-xl group-hover:scale-110 transition-transform">
                      {item.icon}
                    </span>
                    <span className="text-[var(--text-color)]">
                      {item.title}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 md:hidden top-[60px]"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 w-full max-w-4xl mx-auto px-4 md:px-8 py-12">
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-[2rem] md:text-[2.8rem] text-[var(--text-color)] font-bold">
                Introduction
              </h1>
              <p className="text-md text-[var(--secondary-text)] mt-2">
                components & utilities, engineered, styled, and shipped.
              </p>
            </div>

            <hr className="w-full border-white/20" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {/* Add your content here */}
              <div className="p-6 border border-white/20 rounded-lg hover:border-white/40 transition-colors">
                <h3 className="text-xl font-bold mb-2">Card Example 1</h3>
                <p className="text-[var(--secondary-text)]">
                  Your content goes here
                </p>
              </div>
              <div className="p-6 border border-white/20 rounded-lg hover:border-white/40 transition-colors">
                <h3 className="text-xl font-bold mb-2">Card Example 2</h3>
                <p className="text-[var(--secondary-text)]">
                  Your content goes here
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </motion.div>
  );
}

export default Page;