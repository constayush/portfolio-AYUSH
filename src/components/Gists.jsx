"use client"

import { useRef, useState } from "react"
import Navbar from "./Navbar"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { Helmet } from "react-helmet"
import { GISTS_DATA } from "../constants"
import { useTheme } from "../ThemeContext"
import { CodeBlock } from "./ui/CodeBlock"

function Gists() {
  const { theme } = useTheme()
  const main_con = useRef()
  const [selectedGist, setSelectedGist] = useState(null)

  useGSAP(() => {
    gsap.from(main_con.current, {
      y: 150,
      opacity: 0,
      duration: 0.65,
      filter: "blur(5px)",
    })
  }, [])

  return (
    <div data-theme={theme} className="bg-[var(--bg-color)] min-h-screen flex flex-col px-2 pt-[12rem]">
      <Helmet>
        <title>Ayush | Gists</title>
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
        <meta property="og:image" content="https://constayush.vercel.app/your-thumbnail.jpg" />
        <meta property="og:url" content="https://constayush.vercel.app/gists" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://constayush.vercel.app/gists" />
      </Helmet>

      <Navbar />

      <div className="flex flex-col md:flex-row flex-1 gap-4 relative">
        {/* Sidebar with gradient */}
        <aside
          className="w-full md:w-80 md:sticky md:top-[6rem] md:h-[calc(100vh-6rem)] overflow-y-auto 
                         bg-gradient-to-b from-[var(--card-bg)] to-[var(--card-bg-darker)] 
                         border border-[var(--border-color)] rounded-xl p-4 shadow-lg"
        >
          <div className="relative">
            {/* Top gradient fade */}
            <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-[var(--card-bg)] to-transparent z-10 pointer-events-none"></div>

            <h1 className="text-2xl md:text-3xl font-bold mb-2 text-[var(--text-color)] text-center">
              Slices<span className="text-[var(--accent-color)]">.</span>
            </h1>
            <p className="mb-6 text-center text-[var(--secondary-text)]">— components I cut, styled, and served</p>

            <div className="space-y-2 max-h-[calc(100vh-12rem)] overflow-y-auto pr-2 pb-4">
              {GISTS_DATA.map((gist) => (
                <div
                  key={gist.gistId}
                  onClick={() => setSelectedGist(gist)}
                  className={`cursor-pointer p-3 rounded-lg transition-all duration-200 
                            ${
                              selectedGist?.gistId === gist.gistId
                                ? "bg-[var(--accent-fade)] border border-[var(--accent-color)] shadow-md"
                                : "hover:bg-[var(--hover-color)] border border-transparent"
                            }`}
                >
                  <div className="text-[var(--text-color)] font-medium">{gist.gistName}</div>
                  {selectedGist?.gistId === gist.gistId && (
                    <div className="text-xs text-[var(--secondary-text)] mt-1 truncate">
                      {gist.gistDescription.substring(0, 60)}
                      {gist.gistDescription.length > 60 ? "..." : ""}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-[var(--card-bg-darker)] to-transparent z-10 pointer-events-none"></div>
          </div>
        </aside>

        {/* Main content with gradient */}
        <main
          ref={main_con}
          className="flex-1 md:h-[calc(100vh-6rem)] md:overflow-y-auto p-4 flex flex-col items-center"
        >
          {selectedGist ? (
            <div
              className="w-full max-w-3xl bg-gradient-to-br from-[var(--card-bg)] to-[var(--card-bg-darker)] 
                          rounded-xl p-6 shadow-lg border border-[var(--border-color)]"
            >
              <h2 className="text-2xl font-semibold mb-2 text-[var(--text-color)]">{selectedGist.gistName}</h2>
              <p className="text-[var(--secondary-text)] mb-6">{selectedGist.gistDescription}</p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-[var(--text-color)] mb-3 flex items-center">
                    <span className="inline-block w-2 h-2 bg-[var(--accent-color)] rounded-full mr-2"></span>
                    Code Example
                  </h3>
                  <div className="rounded-lg overflow-hidden border border-[var(--border-color)] shadow-inner">
                    <div className="code-block-wrapper overflow-auto max-h-[400px]">
                      <CodeBlock code={selectedGist.gistCode} language={selectedGist.gistLanguage || "javascript"} />
                    </div>
                  </div>
                </div>

                {selectedGist.gistCss && (
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--text-color)] mb-3 flex items-center">
                      <span className="inline-block w-2 h-2 bg-[var(--accent-color)] rounded-full mr-2"></span>
                      CSS Example
                    </h3>
                    <div className="rounded-lg overflow-hidden border border-[var(--border-color)] shadow-inner">
                      <div className="code-block-wrapper overflow-auto max-h-[400px]">
                        <CodeBlock code={selectedGist.gistCss} language="css" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center p-8">
              <div
                className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--accent-fade)] to-[var(--accent-color)] 
                           flex items-center justify-center mb-4 shadow-lg"
              >
                <span className="text-2xl">👆</span>
              </div>
              <p className="text-[var(--secondary-text)] text-lg">Select a slice from the sidebar to view its code</p>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default Gists
