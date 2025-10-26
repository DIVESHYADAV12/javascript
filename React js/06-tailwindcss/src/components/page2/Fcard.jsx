import React from 'react'
const Type = (props) => {
  return (
    <div  className='shrink-0 px-2'>
       <div className='flex justify-center'>
          <img className=' flex h-20 w-20 rounded-full  justify-center' src={props.img} alt="" /></div>
       <div className='text-xl flex justify-center py-3'><h3 >{props.type}</h3></div>
       <div className='text-sm shrink-0 overflow-clip'><p>{props.about}</p></div>
    </div>
  )
}

export default Type
