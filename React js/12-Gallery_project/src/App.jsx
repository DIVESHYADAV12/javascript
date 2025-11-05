import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
   const [userdata,setUserdata]=useState([])
   const Getdata = async ()=>{
    const responce = await axios.get(`https://picsum.photos/v2/list?page=2&limit=30`)
    setUserdata(responce.data)
    console.log(userdata);
   }
   let printdata = 'No User Available'
   if(userdata.length > 0){
    printdata = userdata.map(function(elem){
      return <div>
        <img src={elem.download_url} alt="" />
      </div>
    })
   }
  return (
    <div>
      <button
       className='text-2xl m-4 active:scale-95 bg-black text-white rounded px-4 py-2'
       onClick={Getdata}
       >Get data</button>
       <div>{printdata}</div>
     
    </div>
  )
}

export default App
