import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
    let Navigate=useNavigate()
    function btnClick(){
        Navigate(+1)
    }
    function btnClicked(){
        Navigate(-1)
    }
  return (
    <div>
      <div className='w-full bg-cyan-800 flex justify-center gap-8'>
      <button 
        onClick={btnClicked}
        className='text-lg py-2 px-4 bg-amber-800 rounded'>Back</button>
        <button
        onClick={btnClick} 
        className='text-lg py-2 px-4 bg-amber-800 rounded'>Next</button>
        
      </div>
    </div>
  )
}

export default Navbar2
