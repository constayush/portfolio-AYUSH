import React from "react";
import { useParams } from "react-router-dom";
import { ArrowLeft, Check, Copy } from "lucide-react";
import { CodeBlock } from "./ui/CodeBlock";
import { GISTS_DATA } from "../constants";
import Navbar from "./Navbar";
function GistSingle() {
  const { id } = useParams();
  return (
    <div className="text-[var(--text-color)] bg-[var(--bg-color)] ">
      <Navbar />

      <div className="text-[var(--text-color)] flex relative w-full min-h-screen pt-[10rem] flex-col p-16 overflow-x-hidden">
        <hr className="w-full border mb-8" />
        <h1 className="text-3xl md:text-[2.7rem] mb-4 font-semibold text-[var(--text-color)]">
          {GISTS_DATA[id - 1].gistName}
          <span className="font-semibold text-[var(--accent-color)]">.</span>
        </h1>

        <p className="opacity-[.8] mb-8">{GISTS_DATA[id - 1].gistDescription}</p>
        <div className="max-w-[64rem]">
        <CodeBlock   code={GISTS_DATA[id - 1].gistCode} language={GISTS_DATA[id - 1].gistLanguage}/>
</div>
     
      </div>
    </div>
  );
}

export default GistSingle;
