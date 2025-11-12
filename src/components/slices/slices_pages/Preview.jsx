import React from 'react'
import { Outlet } from 'react-router-dom'

function Preview() {
  return (
    <div className='flex flex-col items-center min-h-screen '>
        

<div className='flex w-full px-24 justify-between items-center my-10'>
        
      <h1 className='text-xl font-bold '>Slices Preview</h1>
        

        <div className='flex flex-col justify-center items-center'>            
            <select name="" id="" className='border p-2 rounded-lg bg-black' >
                <option value="gallery">Gallery Component</option>
                <option value="cards-on-hover">Card Component</option>
            </select>
        </div>

        <div>back</div>
</div>
<Outlet />
    </div>
  )
}

export default Preview