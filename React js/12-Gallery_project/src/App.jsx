import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
   const [userdata,setUserdata]=useState([])
   const [Index,setIndex]= useState(1)

   const Getdata = async ()=>{
    const responce = await axios.get(`https://picsum.photos/v2/list?page=${Index}&limit=30`)
    setUserdata(responce.data)
   }
   useEffect(function(){
    Getdata()
  },[Index])

   let printdata = 'No User Available'
   if(userdata.length > 0){
    printdata = userdata.map(function(elem){
      return <div>
        <a href={elem.url}>
        <div className='h-40 w-44 rounded overflow-hidden'>
        <img className=' h-full object-cover w-full' src={elem.download_url} alt="" />
      </div>
      <h2 className='font-bold text-lg'>{elem.author}</h2>
        </a>
      </div>
    })
   }

  return (
    <div className='overflow-auto p-10'>
       <div className='flex flex-wrap overflow-scroll gap-5'>
        {printdata}
        </div>
        <div className='flex justify-center items-center gap-5 py-8'>
          <button

          onClick={()=>{
            if(Index>=1){
              setIndex(Index-1)
            }
          }}
           className='bg-yellow-300 text-black px-4 py-2 text-sm rounded active:scale-95 cursor-pointer'
           >Prev</button>
          <button
          onClick={()=>{
              setIndex(Index+1)
            }}
           className='bg-yellow-300 text-black px-4 py-2 text-sm rounded active:scale-95 cursor-pointer'>Next</button>
        </div>
     
    </div>
  )
}

export default App
