// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//   const [num,setNum] =useState({user:'Divesh',age:20})
//   function click(){
//     const newnum ={...num}
//     newnum.user='Ashoak'
//     newnum.age=98
//     setNum(newnum)
//   }

//   return (
//     <div>
//       <h1>{num.user}, {num.age}</h1>
//       <button onClick={click}>Click</button>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//   const [num,setNum]=useState({user:'Divesh',age:20})
//   function btnClick(){
//     setNum(prev=>({...prev,user:'Aman',age:43}))
//   }
//   return (
//     <div>
//       <h1>{num.user}, {num.age}</h1>
//       <button onClick={btnClick}>click</button>
//     </div>
//   )
// }

// export default App


import React from 'react'
import { useState } from 'react'

const App = () => {
  const [num,setNum]= useState(10)
  const btnclick = ()=>{
    setNum(prev=>(prev+1))
    setNum(prev=>(prev+1))
    setNum(prev=>(prev+1))
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnclick}>click</button>
    </div>
  )
}

export default App
