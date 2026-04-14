import React from 'react'
import Link from 'next/link'
import { useRef } from 'react';
import ProjectCard from '../ui/ProjectCard';
import {PROJECTS} from '../constants';
function Projects() {
  const renderProjects = PROJECTS.slice(0, 2).map((project) => (
    <ProjectCard key={project.projectId} {...project} />
  ));
      const projectCon = useRef<HTMLElement>(null);
  return (
  <section
            className="flex flex-col justify-center w-full gap-8 md:gap-8"
            ref={projectCon}
          >
            <div className="w-full flex justify-between items-center ">
              <h1 className="text-3xl md:text-[2.7rem] font-semibold text-(--text-color)">
                Projects
                <span className="font-semibold text-[var(--accent-color)]">
                  .
                </span>
              </h1>
              <Link
                href={"/projects"}
                className="underline underline-offset-4 "
              >
                view all
              </Link>
            </div>
            <div className="break-words grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
              {renderProjects}
            </div>
          </section>
  )
}

export default Projects