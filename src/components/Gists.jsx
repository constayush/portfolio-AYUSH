
import React, { useRef } from 'react'
import Navbar from './Navbar';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { CodeBlock } from './ui/CodeBlock';
import GistsCard from './ui/GistsCard';
import { GISTS_DATA } from '../constants';
import { useTheme } from '../ThemeContext';
import {Helmet} from "react-helmet";
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
    <>
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
        <meta
          property="og:image"
          content="https://constayush.vercel.app/your-thumbnail.jpg" // Replace with actual thumbnail for the Gists page
        />
        <meta property="og:url" content="https://constayush.vercel.app/gists" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://constayush.vercel.app/gists" />
      </Helmet>

    <div data-theme={theme}>
      <Navbar/>
    <main ref={main_con} className='text-[var(--text-color)]  flex relative w-full min-h-screen pt-[14rem] flex-col items-center overflow-x-hidden'>
      

            <h1   className="text-3xl md:text-[2.7rem] mb-4 font-semibold text-[var(--text-color)]">
            Gists / Snippets<span className="font-semibold text-[var(--accent-color)]">.</span>
          </h1>
          
          <div className=' min-w-[64rem] flex flex-col my-12 gap-6'>
         {GISTS_DATA.map((gist) =><GistsCard key={gist.gistId} {...gist}/>)}
 </div>
        

    </main></div></>
  )
}

export default Gists;