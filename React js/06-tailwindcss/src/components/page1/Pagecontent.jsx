import React from 'react'

const Pagecontent = () => {
  return (
    <div >
        <div><img className='w-screen h-[90vh] object-cover' src="https://i.pinimg.com/1200x/5f/fc/0c/5ffc0c75ef4b3c75006bd67241f5bfe0.jpg" alt="" /></div>
        <div className='absolute inset-0 items-center px-12 py-20 ml-4'>
            <h1 className='text-white text-6xl px-2 py-4'>Savor the <br /> Perfect Brew!</h1>
            <p className='text-white px-2 py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Eaque beatae, maxime deserunt non nobis laborum!</p>
            <div className='gap-3 flex'>
            <button className='rounded-full px-3 py-2 bg-white text-sm shadow-lg'>Buy now</button>
            <button className='rounded-full px-3 py-2 bg-[#c49a6c] text-sm shadow-lg'>See More</button>
        </div>
        </div>
        
    </div>
  )
}

export default Pagecontent
