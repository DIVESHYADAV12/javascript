import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between  px-5 py-2 bg-[#c49a6c] '>
      <div className='px-20 text-3xl font-semibold'>Coffee</div>
      <div className='flex gap-8 '><h4>Home</h4><h4>Menu</h4><h4>Blog</h4><h4>Media</h4><h4>Contact</h4></div>
    </div>
  )
}

export default Navbar

