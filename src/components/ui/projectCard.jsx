import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function ProjectCard(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      key={props.projectName}
      className="card project-card min-h-full relative shadow-2xl overflow-hidden group max-w-[30rem] min-w-full transition-all bg-[var(--glass-bg-color)] border-2 border-[#ffffff10] rounded-lg p-4"
    >
      <div className="shine"></div>

      <motion.div layout className="flex flex-col gap-6">
        <motion.h1
          layout
          className="projects-h1 transition-all opacity-90 duration-300 font-bold text-[var(--text-color)]"
        >
          {props.projectName}
        </motion.h1>

        <div className="aspect-[16/9] w-full overflow-hidden">
          <img
            className="projects-img aspect-[16/9] object-contain border-2 shadow-2xl bg-black border-[#ffffff1d] rounded-lg"
            src={props.projectImg}
          />
        </div>

        <motion.p layout className="text-[var(--text-color)] opacity-85 text-center md:text-left">
          {props.projectDescriptionShort}
        </motion.p>

        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.p
              key="expand"
              initial={{ opacity: 0, height: 0, filter: "blur(5px)", color: "black" }}
              animate={{ opacity: 1, height: "auto", filter: "blur(0px)", color: "" }}
              exit={{ opacity: 0, height: 0, filter: "blur(5px)", color: "black" }}
              transition={{ duration: 0.4 }}
              className="text-[var(--text-color)] opacity-85 text-center md:text-left"
            >
              {props.projectDescriptionLong}
            </motion.p>
          )}
        </AnimatePresence>

        <motion.button
          layout
          onClick={() => setIsExpanded(prev => !prev)}
          className="text-[var(--text-color)] opacity-85 hover:text-[#ff8400]  w-fit self-center md:self-start"
        >
          {isExpanded ? "Show Less" : "Read More"}
        </motion.button>

        <hr className="w-full border-b border-[var(--border-color)] opacity-50" />

        <div class="flex justify-between space-x-4 "><a href="https://github.com/constayush/Boxit" target="_blank" rel="noopener noreferrer" class="flex items-center text-gray-300 hover:text-white transition-colors duration-300"><svg stroke="currentColor" fill="var(--text-color)" stroke-width="0" viewBox="0 0 496 512" class="mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg><span class=" hover:text-[#ff8c00] font-semibold text-[var(--text-color)]">View Code</span></a><a href="https://boxit-two.vercel.app/" target="_blank" rel="noopener noreferrer" class="flex items-center text-gray-300 hover:text-white transition-colors duration-300"><svg stroke="currentColor" fill="var(--text-color)" stroke-width="0" viewBox="0 0 512 512" class="mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path></svg><span class="text-[#FC8B10] hover:text-[var(--text-color)]  font-semibold">Live Demo</span></a></div>
      </motion.div>
    </motion.div>
  );
}

export default ProjectCard;
