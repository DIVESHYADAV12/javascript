import React from 'react'

const Ccard = (props) => {
  return (
    <div className='px-5 py-5 shrink-0 justify-center flex '>
      <div className='h-90 w-60 bg-amber-100 rounded-3xl justify-center'>
        <img className='object-cover rounded-3xl h-80 w-full' src={props.img} alt="" />
        <div className='inset-0 flex items-center justify-center '>
        <h1 className='text-amber-950 text-lg font-extrabold uppercase tracking-widest' >{props.name}</h1></div>
      </div>

    </div>
  )
}

export default Ccard
