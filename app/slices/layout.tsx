"use client";
import "../slices.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { usePathname, useRouter } from "next/navigation";

const demoItems = [
  { id: 1, title: "Getting Started", icon: "-", slug: "getting-started" },
  {
    id: 2,
    title: "Components",
    icon: "-",
    sub_list: ["cards", "buttons", "inputs"],
    slug: "components",
  },
  { id: 3, title: "Utilities", icon: "-", slug: "utilities" },
  {
    id: 4,
    title: "Animations",
    icon: "-",
    sub_list: ["scroll", "hover", "click", "landing"],
    slug: "animations",
  },
  { id: 5, title: "Resources", icon: "-", slug: "resources" },
];

export default function SlicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [theme, setTheme] = useState("dark");

  const currentSection = pathname.split("/").pop();

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

  const handleNavigation = (slug: string) => {
    router.push(`/slices/${slug}`);
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  };

  const renderSublist = (sub_list: string[]) => {
    return (
      <ul className="flex flex-col gap-1">
        {sub_list.map((item) => (
          <li
            key={item}
            className={`${
              currentSection === item
                ? "text-orange-500"
                : "text-[var(--text-color)]"
            } hover:text-orange-500 cursor-pointer`}
          >
            <Link href={`/slices/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75 }}
      className="min-h-screen"
    >
      {/* Navigation Bar */}
      <nav className="fixed flex w-full top-0 left-0 border-b border-[var(--border-2-color)] justify-between items-center px-4 py-2 bg-[var(--bg-color)] z-50">
        <div className="flex items-center gap-4">
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
            className="flex justify-center items-center text-center"
          >
            <h1 className="text-[1.8rem] md:text-[1.8rem] text-[var(--text-color)] font-bold">
              Slices
            </h1>
            <Image
              src="/slices.svg"
              width={32}
              height={32}
              alt="Logo"
              className="w-8 h-fit rounded-full object-cover"
            />
          </motion.span>
        </div>
        <span className="gap-1 flex justify-center items-center">
          <Link
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
            className="theme-toggle grayscale-10 hover:grayscale-0 text-[1rem] md:text-[1.15rem]"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </motion.button>
        </span>
      </nav>

      <div className="flex pt-[60px]">
        {/* Sidebar */}
        <aside
          className={`fixed md:sticky top-[60px] left-0 h-[calc(100vh-60px)] bg-[var(--bg-color)] border-r border-[var(--border-2-color)] z-40 transition-all duration-300 ease-in-out ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          } ${sidebarOpen ? "w-64" : "md:w-0 hidden md:border-0"}`}
        >
          <div className="px-6 py-8 overflow-y-auto h-full">
            <h2 className="text-sm font-semibold text-[var(--secondary-text)] mb-4 uppercase tracking-wider">
              Navigation
            </h2>
            <ul className="space-y-2">
              {demoItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      handleNavigation(item.slug);
                      renderSublist(item.sub_list || []);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex flex-col items-center gap-3 group ${
                      currentSection === item.slug
                        ? "bg-white/20"
                        : "hover:bg-white/10"
                    }`}
                  >
                    <div className="flex gap-3">
                    <span className="text-xl group-hover:scale-110 transition-transform">
                      {item.icon}
                    </span>
                    <span className="text-[var(--text-color)]">
                      {item.title}
                    </span></div>

                    <ul className="flex flex-col gap-1">
                      {item.sub_list && item.sub_list.map((item) => (
                        <li
                          key={item}
                          className={`${
                            currentSection === item
                              ? "text-orange-500"
                              : "text-[var(--text-color)]"
                          } hover:text-orange-500 cursor-pointer`}
                        >
                          <Link href={`/slices/${item}`}>{item}</Link>
                        </li>
                      ))}
                    </ul>
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

        {/* Main Content - Children from individual pages */}
        {children}
      </div>
    </motion.div>
  );
}
