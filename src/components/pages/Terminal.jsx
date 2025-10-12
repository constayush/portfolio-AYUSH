import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import orangeBg from "../../../public/orangeBg.jpg";
import blackBg from "../../../public/blackBg.jpg";
import whiteBg from "../../../public/whiteBg.jpg";
import orangeDark from "../../../public/orangeDark.jpg";
import multiBg from "../../../public/multiBg.jpg";
import themeIco from "../../../public/themeIco.svg";
import closeIco from "../../../public/closeIco.svg";
import { motion } from "framer-motion";
function Terminal() {
  const terminalContainer = useRef(null);
  const inputRef = useRef(null);

  const [prvInputsData, setPrvInputsData] = useState([]);
  const [inputData, setInputData] = useState("");
  const [bootText, setBootText] = useState([]);
  const [bootDone, setBootDone] = useState(false);

  const commandsArr = ["whoami", "projects", "contact", "help"];
  const bgImgArr = [orangeBg, whiteBg, blackBg, orangeDark, multiBg];
  let bgCounter = 1;

  // --- Boot animation text lines ---
const bootLines = [
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
  let interval;

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
  return () => clearInterval(interval);
}, []);

  function handleInputChange(e) {
    setInputData(e.target.value);
  }

  function handleKeyPress(e) {
    if (e.key === "Enter" && inputRef.current.value.trim()) {
      const cmd = inputRef.current.value.trim().toLowerCase();
      inputRef.current.value = "";

      switch (cmd) {
        case "whoami":
          setPrvInputsData((prev) => [
            ...prev,
            {
              cmd,
              output:
                "Hey, I'm Ayush — 18, web dev, obsessed with clean UIs & creative chaos.",
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
                  <span className="TconLinks">projects</span> - my builds
                  <br />
                  use <span className="font-bold">cd</span> to explore deeper.
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
                        className="TconLinks"
                      >
                        🔗 LinkedIn
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/constayush"
                        target="_blank"
                        className="TconLinks"
                      >
                        💻 GitHub
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/maihoonayush/"
                        target="_blank"
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

        default:
          setPrvInputsData((prev) => [
            ...prev,
            { cmd, output: `Command not found: ${cmd}. Try 'help'` },
          ]);
      }
    }
  }

  function changeBg() {
    bgCounter = (bgCounter + 1) % bgImgArr.length;
    terminalContainer.current.style.backgroundImage = `url(${bgImgArr[bgCounter]})`;
  }

  return (
    <motion.div
  
  initial={{ opacity: 0, width: 0,  }}
  animate={{ opacity: 1, width: "100%",  }}
  exit={{ opacity: 0 }}
  transition={{ duration: .25}}

  
    ref={terminalContainer}
      className="terminal  will-change-transform  relative w-full lg:h-[98vh] h-[95vh] flex flex-col p-4 rounded-lg bg-cover bg-center transition-all duration-500 overflow-hidden"
    >
   

      <div className="relative w-full h-full bg-[#000000d8] rounded-lg backdrop-blur-sm border border-[#1e1e1e] flex flex-col overflow-hidden shadow-[0_0_30px_#00000070] z-[2]">
        {/* Top bar */}
        <nav className="flex items-center justify-between bg-[#101010] text-gray-300 px-4 py-2 border-b border-[#222]">
          <img
            src={themeIco}
            onClick={changeBg}
            className="w-6 h-6 cursor-pointer hover:scale-110 transition"
          />
          <p className="font-mono text-sm">ayush@portfolio:~</p>
          <Link to="/">
            <img
              src={closeIco}
              className="w-6 h-6 cursor-pointer hover:scale-110 transition"
            />
          </Link>
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

export default Terminal;
