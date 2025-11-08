import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between bg-cyan-900 py-5 px-10 text-white'>
      <h3 className='text-3xl font-bold'>Divesh</h3>
      <div className='gap-7 flex text-lg'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/Product'>Products</Link>
   
      </div>
    </div>
  )
}

export default Navbar
