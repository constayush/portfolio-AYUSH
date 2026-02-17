import React from 'react'
import Image from 'next/image'
function Card1({title = "Card1", description="your description goes here, Lorem ipsum dolor sit amet, consectetuer adipiscing elit", 
  image_url="https://content.pexels.com/images/canva/ai-generated-ad/off-theme/forest_starry_winter_night-full.jpg"}) {
  return (
    <div className='z-1 min-h-30 min-w-30 flex flex-col p-6 rounded-xl bg-black '>
      
      <h1 className='font-semibold text-lg'>{title}</h1>
      <p className='text-gray-400'>{description}</p>
      <Image src={image_url} alt='img' width={500} height={500} ></Image>
    </div>
  )
}

export default Card1