import React from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
function Navbar() {

  useGSAP(() => {
    gsap.from('.navbar', { color: 'red', duration: .5,  })    
  }, [])

  return (
    <nav className='opacity-0 navbar flex justify-center items-center w-full'>
    <div className='fixed top-20 w-full flex px-[3rem]  items-center justify-between bg-[#ffffff00]  z-[99] '>
    
    <a className='text-[rgb(255,255,255)] text-[2rem] logoNav' href="/">आ<span className="accent">0.</span></a>
    
    <ul className=' flex justify-center items-center gap-10'>


    </ul>
    
    </div>
  </nav>)
}

export default Navbar