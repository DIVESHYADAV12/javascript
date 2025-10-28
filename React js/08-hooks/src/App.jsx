import React from 'react'
import { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)
  function increase(){
    setNum(num+1)
  }
  function decrease(){
    setNum(num-1)
  }
  return (
    <div class='parent'>
      <div class='box'>
       <div class='count'><h1>Counter</h1></div>
       <div class='num'><h2>{num}</h2></div>
       <div class='btn'>
        <button onClick={increase}>Increase</button>
       <button onClick={decrease}>Decrease</button>
       </div>
    </div>
    </div>
  )
}

export default App
