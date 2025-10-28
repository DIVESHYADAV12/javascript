import React from 'react'

const App = () => {
  function clicked(){
    console.log('Clicked');
  }
  let Move = ()=>{
    console.log("moving")
  }
  return (
    <div >
      <div>
      <button onClick={clicked}>Click here</button>
      <div onMouseMove={Move} id='ab' className='h-40 w-40 bg-amber-900'>vaygvyvy</div>
      </div>
      <div>
        <input onChange={function(elem){
          console.log(elem.target.input)
        }} type="text" placeholder='enter' />
      </div>
    </div>
  )
}

export default App
