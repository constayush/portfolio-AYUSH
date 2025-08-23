
import React from 'react'
import SlicesDisplayCard from '../ui/SlicesDisplayCard';
import gif from "../../slices/images/tempGif.gif"
function Gallery() {
    const all_slices = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
     {
      id: 4,
    },
     {
      id: 5,
    },
     {
      id: 6,
    },
  
  ];
  return (
    <div>
   <h1 className="text-3xl text-[var(--slices-primary-text)] font-semibold  leading-relaxed">All Slices</h1>

<div className='mt-10  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
  {all_slices.map((slice) => ( <SlicesDisplayCard gif={gif} key={slice.id}/>))} 
</div>

        </div>
  )
}

export default Gallery