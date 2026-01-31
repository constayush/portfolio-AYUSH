"use client"
import {PROJECTS} from '../constants'
import Navbar from '../ui/Navbar'
import ProjectCard from '../ui/ProjectCard'
function Page() {
  return (

    <div className='min-h-[130vh] pt-30 pb-16 px-2 flex flex-col  items-center'>
<Navbar />
<main className='  w-full max-w-4xl flex flex-col gap-8'>
      
      <div className='flex flex-col items-center '>
        <h1 className='text-[1.8rem] md:text-[2.8rem] text-[var(--text-color)] font-bold'>Projects</h1>
<p className='text-md text-[var(--secondary-text)]'>A showcase of projects built across diverse tech stacks.</p>
</div>

<hr className='text-gray-600' />

<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
{PROJECTS.map((project)=> {
  return (
    <ProjectCard key={project.projectName} {...project} />
  )
})}
</div>
</main>
    </div>
  )
}

export default Page