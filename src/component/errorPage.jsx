import React from 'react'
import { Link } from 'react-router-dom'
export default function ErrorPage(e) {
  console.log(e)
  return (
    <div className='w-full p-[10vmax] h-[100vh] flex flex-col justify-center items-center'>
     
      <h1 className='text-[rgb(255,190,71)] text-[1.5rem] md:text-[4rem]'>{"error, this page doesn't exist."}</h1>


      <div className='flex flex-col md:flex-row justify-center items-center m-10'> 

      <a className='text-[rgb(255,255,255)] text-[2rem] navLinks logoNav' href="/">आ<span className="accent">0.</span></a>
      <Link to="/"><button className='text-[rgb(255,255,255)] text-[1.4rem] outline p-3 m-10 transition-all duration-300 rounded-sm hover:text-[black] hover:font-bold hover:bg-[rgb(255,190,71)]'>HOME</button></Link>
      
      
      </div>
    </div>
  )
}
