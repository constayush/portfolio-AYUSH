"use client";

import { useRef, useState, useEffect } from "react";
import Navbar from "./Navbar";
import {motion} from "framer-motion";
import { Helmet } from "react-helmet";
import { GISTS_DATA } from "../constants";
import { useTheme } from "../ThemeContext";
import { CodeBlock } from "./ui/CodeBlock";
import slicesIcon from "../../public/slices.svg";
import { useLocation } from "react-router-dom";
import { ArrowDown } from "lucide-react";
function Slices() {
  const { theme } = useTheme();
  const main_con = useRef();
  const logo = useRef();
  const location = useLocation();
  const initial_gist = location.state ? location.state : GISTS_DATA[0];
  const [selectedGist, setSelectedGist] = useState(initial_gist);
  const [isExpanded, setIsExpanded] = useState(false);



useEffect(() => {
window.scrollTo(0, 0);
},[]);


 

  return (
    <div
      ref={main_con}
      data-theme={theme}
      className="bg-[var(--bg-color)] min-h-screen flex flex-col px-6  pt-[12rem]"
    >
      <Navbar />

      <Helmet>
        <title>Slices UI</title>
        <meta
          name="description"
          content="Explore useful code snippets and mini projects shared by Ayush Srivastava. Grab some gems to level up your dev skills!"
        />
        <meta
          name="keywords"
          content="Ayush Srivastava, code snippets, gists, developer resources, coding tips, software engineer, useful code"
        />
        <meta name="author" content="Ayush Srivastava" />
        <meta property="og:title" content="Ayush Srivastava | Code Gists" />
        <meta
          property="og:description"
          content="Explore useful code snippets and mini projects shared by Ayush Srivastava. Grab some gems to level up your dev skills!"
        />
        <meta
          property="og:image"
          content="https://constayush.vercel.app/your-thumbnail.jpg"
        />
        <meta property="og:url" content="https://constayush.vercel.app/gists" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://constayush.vercel.app/gists" />
      </Helmet>

      <div className="flex flex-col md:flex-row flex-1 gap-4 relative">
        {/* Sidebar for md> devices */}
        <aside
          className="w-full hidden md:block md:w-80 md:sticky md:top-6 md:h-[calc(100vh-15rem)] overflow-y-auto 
                  bg-[var(--glass)]
                         border z-[10000] border-[var(--border-2-color)] rounded-xl p-4 shadow-lg"
        >
          <div className="relative">
            <motion.div 
            
            initial={{ opacity: 0, scale: 3, letterSpacing: 10 }}
              animate={{ opacity: 1, scale: 1, letterSpacing: 0 }}
              transition={{ duration: .25 , ease: "easeInOut"}}
            className="flex justify-center items-center gap-1 transition-all duration-700">
              <img src={slicesIcon} className="w-[3rem]" />
              <h1 className="text-2xl md:text-4xl font-bold mb-2 text-[var(--text-color)] text-center">
                Slices<span className="text-[var(--accent-color)]">.</span>
              </h1>
            </motion.div>
            <p className="mb-6 text-center text-[var(--secondary-text)]">
              — components & utils I cut, styled, and served
            </p>

            
            <motion.div 
             initial={{ opacity: 0, y: 110 }} 
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 , ease: "easeInOut" }}
            className="space-y-2 max-h-[calc(100vh-12rem)] overflow-y-auto  pb-4">
              {GISTS_DATA.map((gist) => (
                <div                 
                  key={gist.gistId}
                  onClick={() => setSelectedGist(gist)}
                  className={`cursor-pointer p-3 rounded-lg transition-all duration-200 
                            ${
                              selectedGist?.gistId === gist.gistId
                                ? " border border-[var(--accent-color)] shadow-md"
                                : "hover:bg-[var(--hover-color)] border border-transparent"
                            }`}
                >
                  <div className="text-[var(--text-color)] font-medium">
                    {gist.gistName}
                  </div>
                  {selectedGist?.gistId === gist.gistId && (
                    <div className="text-xs text-[var(--secondary-text)] mt-1 truncate">
                      {gist.gistDescription.substring(0, 60)}
                      {gist.gistDescription.length > 60 ? "..." : ""}
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </aside>

        {/* mobile nav */}
        <nav className="md:hidden">
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center gap-1">
              <img src={slicesIcon} className="w-[2rem]" />
              <h1 className="text-2xl md:text-3xl font-bold mb-2 text-[var(--text-color)] text-center">
                Slices<span className="text-[var(--accent-color)]">.</span>
              </h1>
            </div>

            <button
              onClick={() => setIsExpanded((prev) => !prev)}
              className="text-white"
            >
              <ArrowDown
                className={`transition-transform ${
                  isExpanded ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
          </div>

          <p className="mb-6 text-center text-[var(--secondary-text)]">
            — components I cut, styled, and served
          </p>

          {/* isExpanded menu */}
          {isExpanded && (
            <div
              className="flex flex-col gap-2   bg-[var(--bg-color)] mt-6 z-[1000] top-[0px]"
              id="listOfSlices"
            >
              {/* <div className="flex justify-between items-center">
        <div className="flex justify-center items-center gap-1">
          <img src={slicesIcon} className="w-[2rem]" />
          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-[var(--text-color)] text-center">
            Slices<span className="text-[var(--accent-color)]">.</span>
          </h1>
        </div>

        <button
          onClick={() => setIsExpanded((prev) => !prev)}
          className="text-white"
        >
          <ArrowDown
            className={`transition-transform ${
              isExpanded ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
      </div> */}

              {GISTS_DATA.map((gist) => (
                <div
                  key={gist.gistId}
                  onClick={() => setSelectedGist(gist)}
                  className={`cursor-pointer p-2 rounded-lg transition-all duration-200 
                ${
                  selectedGist?.gistId === gist.gistId
                    ? "border border-[var(--accent-color)] shadow-md"
                    : "hover:bg-[var(--hover-color)] border border-transparent"
                }`}
                >
                  <div className="text-[var(--text-color)] font-medium">
                    {gist.gistName}
                  </div>
                  {selectedGist?.gistId === gist.gistId && (
                    <div className="text-xs text-[var(--secondary-text)] mt-1 truncate">
                      {gist.gistDescription.substring(0, 60)}
                      {gist.gistDescription.length > 60 ? "..." : ""}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </nav>

        {/* Main content Code Block n shit */}
        <main 
      

        className="flex-1 relative rounded-lg shadow-lg flex flex-col items-center mb-12">
          <span className="fixed pointer-events-none border border-[#ffffff9a] -z-1 top-0 left-0 w-[60%] h-[6rem] bg-[#ffffff] blur-[200px]"></span>
          <span className="fixed pointer-events-none border border-[#fff] -z-1 top-0 right-0 w-[40%]     h-[6rem] bg-[#fe9b32] blur-[100px]"></span>
          {selectedGist ? (
            <motion.div
              initial={{ opacity: 0 , filter:"blur(5px)"}}
              animate={{ opacity: 1 , filter:"blur(0px)"}}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="w-full z-[5]  max-w-7xl  bg-[var(--glass)]
                          rounded-xl p-6 shadow-lg border border-[var(--border-2-color)]  "
            >
              <h2 className="text-2xl font-semibold mb-2 text-[var(--text-color)]">
                {selectedGist.gistName}
              </h2>
              <p className="text-[var(--secondary-text)] mb-6">
                {selectedGist.gistDescription}
              </p>

              <div className="space-y-6 ">
                <div>
                  <h3 className="text-lg font-semibold text-[var(--text-color)] mb-3 flex items-center">
                    <span className="inline-block w-2 h-2 bg-[var(--accent-color)] rounded-full mr-2"></span>
                    Code Example
                  </h3>
                  <div className="rounded-lg overflow-hidden border border-[var(--border-2-color)] shadow-inner">
                    <div className="code-block-wrapper overflow-auto max-h-[400px]">
                      <CodeBlock
                        code={selectedGist.gistCode}
                        language={selectedGist.gistLanguage || "javascript"}
                      />
                    </div>
                  </div>
                </div>

                {selectedGist.gistCss && (
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--text-color)] mb-3 flex items-center">
                      <span className="inline-block w-2 h-2 bg-[var(--accent-color)] rounded-full mr-2"></span>
                      CSS Example
                    </h3>
                    <div className="rounded-lg overflow-hidden border border-[var(--border-2-color)] shadow-inner">
                      <div className="code-block-wrapper overflow-auto max-h-[400px]">
                        <CodeBlock code={selectedGist.gistCss} language="css" />
                      </div>
                    </div>
                  </div>
                )}


{selectedGist.gistUsage  && (
     <div>
                    <h3 className="text-lg font-semibold text-[var(--text-color)] mb-3 flex items-center">
                      <span className="inline-block w-2 h-2 bg-[var(--accent-color)] rounded-full mr-2"></span>
                      Usage
                    </h3>
                    <div className="rounded-lg overflow-hidden border border-[var(--border-2-color)] shadow-inner">
                      <div className="code-block-wrapper overflow-auto max-h-[400px]">
                        <CodeBlock code={selectedGist.gistUsage} language="js" />
                      </div>
                    </div>
                  </div>


) }





              </div>
            </motion.div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center p-8">
              <div className="flex justify-center items-center">
                <img src={slicesIcon} className="w-[2rem] md:w-[4rem] gap-2" />
                <h1 className="text-2xl md:text-6xl font-bold mb-2 text-[var(--text-color)] text-center">
                  Slices<span className="text-[var(--accent-color)]">.</span>
                </h1>
              </div>
              <p className="mb-6 text-center text-base md:text-xl text-[var(--secondary-text)]">
                — components I cut, styled, and served
              </p>
              <p className="mb-6 text-center text-base md:text-lg opacity-50 text-[var(--secondary-text)]">
                (Select a slice from the sidebar)
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default Slices;
