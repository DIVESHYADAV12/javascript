import { Link } from 'react-router-dom'
import React from 'react'

const Navbar = () => {
  return (
    <div class='Navbar'>
      <h3>Divesh</h3>
      <div class='link'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/product'>Product</Link>
      </div>
    </div>
  )
}

export default Navbar
