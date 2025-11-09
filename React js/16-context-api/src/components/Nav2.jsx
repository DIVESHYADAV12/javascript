import React from 'react'
import { useContext } from "react"
import { ThemeDataContext } from "../Context/ThemeContext"
import { useState } from 'react-dom'


const Nav2 = () => {
    const Theme = useContext(ThemeDataContext)
  return (
    <div className='flex items-center gap-5'>
      <h4>Home</h4>
      <h4>About</h4>
      <h4>Contact</h4>
      <h4>{Theme}</h4>
    </div>
  )
}

export default Nav2
