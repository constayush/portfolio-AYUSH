
import React, { useRef } from 'react'
import Navbar from './Navbar';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { CodeBlock } from './ui/CodeBlock';
import GistsCard from './ui/GistsCard';
import { GISTS_DATA } from '../constants';
import { useTheme } from '../ThemeContext';
function Gists() {
const { theme, toggleTheme } = useTheme();
  const main_con = useRef();
  
  useGSAP(() => {
     gsap.from(main_con.current, {
    y: 150,
    opacity: 0,
    duration: 0.65,
    filter: "blur(5px)",
  });
  },[])
 

  return (
    <div data-theme={theme}>
      <Navbar/>
    <main ref={main_con} className='text-[var(--text-color)]  flex relative w-full min-h-screen pt-[14rem] flex-col items-center overflow-x-hidden'>
      

            <h1   className="text-3xl md:text-[2.7rem] mb-4 font-semibold text-[var(--text-color)]">
            Gists / Snippets<span className="font-semibold text-[var(--accent-color)]">.</span>
          </h1>
          
          <div className=' min-w-[64rem] flex flex-col my-12 gap-6'>
         {GISTS_DATA.map((gist) =><GistsCard key={gist.gistId} {...gist}/>)}
 </div>
        

    </main></div>
  )
}

export default Gists;