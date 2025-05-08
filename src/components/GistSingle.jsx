import React from "react";
import { useParams } from "react-router-dom";
import { ArrowLeft, Check, Copy } from "lucide-react";
import { CodeBlock } from "./ui/CodeBlock";
import { GISTS_DATA } from "../constants";
import Navbar from "./Navbar";
import { useTheme } from "../ThemeContext";
function GistSingle() {
  const { theme, toggleTheme } = useTheme();
  const { id } = useParams();
  return (
    <div
      data-theme={theme}
      className="text-[var(--text-color)] bg-[var(--bg-color)] "
    >
      <Navbar />

      <div className="text-[var(--text-color)] flex  w-full pt-[10rem] p-3  items-center flex-col">
        <hr className="w-full border mb-8" />
        <h1 className="text-3xl md:text-[2.7rem] mb-4 font-semibold text-[var(--text-color)]">
          {GISTS_DATA[id - 1].gistName}
          <span className="font-semibold text-[var(--accent-color)]">.</span>
        </h1>

        <p className="opacity-[.8] mb-8">
          {GISTS_DATA[id - 1].gistDescription}
        </p>
        <div className="max-w-[64rem] w-full shadow-2xl border border-[#ffffff10] rounded-lg  ">
          <CodeBlock
            code={GISTS_DATA[id - 1].gistCode}
            language={GISTS_DATA[id - 1].gistLanguage}
          />
        </div>

        {GISTS_DATA[id - 1].gistCss && (
          <div className="mt-8 max-w-[64rem] w-full shadow-2xl border border-[#ffffff10] rounded-lg  ">
<p className="m-2 font-semibold text-xl">CSS used in this gist</p>

            <CodeBlock
              code={GISTS_DATA[id - 1].gistCss}
              language="css"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default GistSingle;
