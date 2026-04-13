"use client"
import {PROJECTS} from '../constants'
import Navbar from '../ui/Navbar'
import ProjectCard from '../ui/ProjectCard'
import { motion } from 'motion/react'
function Page() {
  return (

    <div className='min-h-[130vh] pt-30 pb-16 px-2 flex flex-col  items-center'>
<Navbar />
<motion.main initial={{ opacity: 0}} animate={{ opacity: 1 }} transition={{duration:1}} className='  w-full max-w-4xl flex flex-col gap-8'>
      
      <motion.span
        initial={{ opacity: 0, top: "-100px" }}
        animate={{ opacity: 1, top: 0 }}
        transition={{ duration: 1 }}
        className="fixed pointer-events-none z-0 top-0 left-0 w-[60%] h-24 bg-(--blob-color) blur-[200px]"
      />
      <div className='flex flex-col items-center '>
        <h1 className='text-[1.8rem] md:text-[2.8rem] text-[var(--text-color)] font-bold'>Projects</h1>
<p className='text-md text-[var(--secondary-text)]'>A showcase of projects built across diverse tech stacks.</p>
</div>

<hr className='text-[var(--border-color)]/30' />

<motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{duration:.3}} className='grid grid-cols-1 md:grid-cols-2 gap-6'>
{PROJECTS.map((project)=> {
  return (
    <ProjectCard key={project.projectName} {...project} />
  )
})}
</motion.div>
</motion.main>
    </div>
  )
}

export default Page