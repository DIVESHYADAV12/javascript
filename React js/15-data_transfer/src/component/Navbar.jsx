import React from 'react'

const Navbar = (props) => {
    function btnClick(){
       if(props.Theme=='Light'){
        props.setTheme('Dark')
       }
       else if(props.Theme=='Dark'){
        props.setTheme('Light')
       }
    }
  return (
    <div>
      <div > 
      <button
      className='text-lg rounded bg-amber-900 py-3 px-5 ml-78 mt-8'
       onClick={btnClick}>Click</button>
      </div>
    </div>
  )
}

export default Navbar
