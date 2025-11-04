import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
   const [userdata,setUserdata]=useState([])
   const Getdata = async ()=>{
    const responce = await axios.get(`https://picsum.photos/v2/list?page=2&limit=30`)
    setUserdata(responce.data)
    console.log(userdata);

    let printdefault = 'No Data Available'

   }
  return (
    <div>
      <button
       className='text-2xl m-4 active:scale-95 bg-black text-white rounded px-4 py-2'
       onClick={Getdata}
       >Get data</button>

       <div>{printdefault}</div>
    </div>
  )
}

export default App
