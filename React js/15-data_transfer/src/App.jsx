import Navbar from './component/Navbar'
import React, { useState } from 'react'

const App = () => {
  const[Theme, setTheme]=useState('Light')
  return (
    <div>
      <h1 className='bg-cyan-900 text-white text-2xl flex justify-center '>Theme is {Theme}</h1>
      <Navbar Theme={Theme} setTheme={setTheme}/>
    </div>
  )
}

export default App
