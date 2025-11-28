"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { PROJECTS } from "../constants";
import { motion } from "motion/react";

interface CommandOutput {
  cmd: string;
  output: string | React.ReactNode;
}

interface Project {
  projectName: string;
  projectDescriptionShort: string;
  projectDescriptionLong: string;
  projectCode: string;
  projectLive: string;
}

function Page() {
  const router = useRouter();
  const terminalContainer = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const bgCounterRef = useRef<number>(1);

  const [prvInputsData, setPrvInputsData] = useState<CommandOutput[]>([]);
  const [inputData, setInputData] = useState<string>("");
  const [bootText, setBootText] = useState<string[]>([]);
  const [bootDone, setBootDone] = useState<boolean>(false);

  const commandsArr: string[] = ["whoami", "ls projects", "contact", "help"];
  const bgImgArr = ["/orangeBg.jpg", "/whiteBg.jpg", "/blackBg.jpg","/orangeDark.jpg", "/multiBg.jpg"];

  // --- Boot animation text lines ---
  const bootLines: string[] = [
    "> Initializing system boot sequence...",
    "> Locating mainframe node...",
    "> Establishing encrypted uplink [AES-256]...",
    "> Handshake complete. Access token verified.",
    "> Launching terminal interface...",
    "> Connection stable.",
    "> Welcome back, Ayush.",
  ];

  // Boot typing effect
  useEffect(() => {
    let i = 0;
    let j = 0;
    let interval: NodeJS.Timeout;

    const typeLine = () => {
      if (i < bootLines.length) {
        const line = bootLines[i];
        interval = setInterval(() => {
          setBootText((prev) => {
            const newLines = [...prev];
            // Initialize the current line if undefined
            if (!newLines[i]) newLines[i] = "";
            newLines[i] += line[j];
            return newLines;
          });

          j++;
          if (j >= line.length) {
            clearInterval(interval);
            i++;
            j = 0;
            setTimeout(typeLine, 15); // short pause before next line
          }
        }, 15);
      } else {
        // typing done
        setTimeout(() => setBootDone(true), 1000);
      }
    };

    typeLine();

    // cleanup in case component unmounts early
    return () => {
      if (interval) clearInterval(interval);
    };
  }, []);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputData(e.target.value);
  }

  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && inputRef.current && inputRef.current.value.trim()) {
      const cmd = inputRef.current.value.trim().toLowerCase();
      inputRef.current.value = "";

      switch (cmd) {
        case "clr":
        case "clear":
        case "cls":
          setPrvInputsData([]);
          return;
        case "exit":
          router.push("/");
          return;
        case "whoami":
          setPrvInputsData((prev) => [
            ...prev,
            {
              cmd,
              output:
                `Hey, I'm Ayush — obsessed with clean UIs & creative chaos, 
                a 19-year-old Full-stack engineer
              from India. Currently a second-year Computer Science student, I
              work with TypeScript, React, and Next.js, building clean and
              efficient web applications. Beyond the IDE, I enjoy chess and
              Valorant.
                
                `,
            },
          ]);
          break;

        case "help":
          setPrvInputsData((prev) => [
            ...prev,
            {
              cmd,
              output: (
                <p>
                  <span className="TconLinks">whoami</span> - intro
                  <br />
                  <span className="TconLinks">contact</span> - socials
                  <br />
                  <span className="TconLinks">ls projects</span> - my builds
                  <br />
                  use <span className="font-bold">cd [project name]</span> to
                  explore deeper. <br /> <span className="TconLinks">clr</span>{" "}
                  - *clears the Terminal* <br />
                  <span className="TconLinks">exit</span> - closes terminal
                </p>
              ),
            },
          ]);
          break;

        case "contact":
          setPrvInputsData((prev) => [
            ...prev,
            {
              cmd,
              output: (
                <>
                  <p>Reach me at:</p>
                  <ul className="space-y-1">
                    <li>
                      <a href="mailto:aayush@mail.com" className="TconLinks">
                        📧 aayush@mail.com
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/constayush/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="TconLinks"
                      >
                        🔗 LinkedIn
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/constayush"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="TconLinks"
                      >
                        💻 GitHub
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/maihoonayush/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="TconLinks"
                      >
                        📷 Instagram
                      </a>
                    </li>
                  </ul>
                </>
              ),
            },
          ]);
          break;

        case "ls projects":
          setPrvInputsData((prev) => [
            ...prev,
            {
              cmd,
              output: (
                <p>
                  {(PROJECTS as Project[]).map((proj, index) => (
                    <div key={index}>
                      <span className="TconLinks">{proj.projectName}</span> -{" "}
                      {proj.projectDescriptionShort}
                      <br />
                    </div>
                  ))}
                  <br />
                  use <span className="font-bold">cd</span> to explore deeper.
                </p>
              ),
            },
          ]);
          break;

        case "cd slices-ui":
          setPrvInputsData((prev) => [
            ...prev,
            {
              cmd,
              output: (
                <>
                  {(PROJECTS as Project[])[0].projectName} -{" "}
                  {(PROJECTS as Project[])[0].projectDescriptionLong} <br />
                  View code:{" "}
                  <a
                    href={(PROJECTS as Project[])[0].projectCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="TconLinks"
                  >
                    {(PROJECTS as Project[])[0].projectCode}
                  </a>{" "}
                  <br />
                  Live demo:{" "}
                  <a
                    href={(PROJECTS as Project[])[0].projectLive}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="TconLinks"
                  >
                    {(PROJECTS as Project[])[0].projectLive}
                  </a>
                </>
              ),
            },
          ]);
          break;

        case "cd boxlit":
          setPrvInputsData((prev) => [
            ...prev,
            {
              cmd,
              output: (
                <>
                  {(PROJECTS as Project[])[1].projectName} -{" "}
                  {(PROJECTS as Project[])[1].projectDescriptionLong} <br />
                  View code:{" "}
                  <a
                    href={(PROJECTS as Project[])[1].projectCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="TconLinks"
                  >
                    {(PROJECTS as Project[])[1].projectCode}
                  </a>{" "}
                  <br />
                  Live demo:{" "}
                  <a
                    href={(PROJECTS as Project[])[1].projectLive}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="TconLinks"
                  >
                    {(PROJECTS as Project[])[1].projectLive}
                  </a>
                </>
              ),
            },
          ]);
          break;

        default:
          setPrvInputsData((prev) => [
            ...prev,
            { cmd, output: `Command not found: ${cmd}. Try 'help'` },
          ]);
      }
    }
  }

  function changeBg() {
    bgCounterRef.current = (bgCounterRef.current + 1) % bgImgArr.length;
    if (terminalContainer.current) {
      terminalContainer.current.style.backgroundImage = `url(${bgImgArr[bgCounterRef.current]})`;
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, width: 0 }}
      animate={{ opacity: 1, width: "100%" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      ref={terminalContainer}
      className="terminal will-change-transform relative w-full lg:h-[98vh] h-[95vh] flex flex-col p-4 rounded-lg bg-cover bg-center transition-all duration-500 overflow-hidden"
    >
      <div className="relative w-full h-full bg-[#000000d8] rounded-lg backdrop-blur-sm border border-[#1e1e1e] flex flex-col overflow-hidden shadow-[0_0_30px_#00000070] z-[2]">
        {/* Top bar */}
        <nav className="flex items-center justify-between bg-[#101010] text-gray-300 px-4 py-2 border-b border-[#222]">
          <img
            src={"/themeIco.svg"}
            onClick={changeBg}
            alt="Theme"
            className="w-6 h-6 cursor-pointer hover:scale-110 transition"
          />
          <p className="font-mono text-sm">ayush@portfolio:~</p>
          <button onClick={() => router.push("/")}>
            <img
              src={"/closeIco.svg"}
              alt="Close"
              className="w-6 h-6 cursor-pointer hover:scale-110 transition"
            />
          </button>
        </nav>

        {/* Terminal content */}
        <div className="flex-1 overflow-auto text-[#ff9900] font-mono text-[1rem] p-4 space-y-2">
          {!bootDone && (
            <div className="text-[#ffbf00] space-y-1 animate-fadeIn">
              {bootText.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
              <span className="animate-pulse">█</span>
            </div>
          )}

          {bootDone && (
            <>
              <p>Welcome to my terminal portfolio!</p>
              <pre>
                {String.raw`
        __     ___    _  _____ _    _
      /\ \   / / |  | |/ ____| |  | |
     /  \ \_/ /| |  | | (___ | |__| |
    / /\ \   / | |  | |\___ \|  __  |
   / ____ \| |  | |__| |____) | |  | |
  /_/    \_\_|   \____/|_____/|_|  |_|
  
  `}
              </pre>
              <p className="text-gray-400">
                Type <span className="text-[#ffffff]">help</span> for a list of
                commands.
              </p>

              {prvInputsData.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-start space-x-2">
                    <span className="text-[#ffffff]">user@ayush:~$</span>
                    <span>{item.cmd}</span>
                  </div>
                  <div className="pl-6 text-gray-300">{item.output}</div>
                </div>
              ))}

              {/* New command */}
              <div className="flex items-center space-x-2 mt-4 relative">
                <span className="text-[#ffffff]">user@ayush:~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  className="bg-transparent outline-none w-full text-gray-400 caret-[#ffbf00]"
                  onChange={handleInputChange}
                  onKeyDown={handleKeyPress}
                  autoFocus
                />
              </div>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default Page;