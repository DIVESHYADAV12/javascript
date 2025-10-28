import React from 'react'

const App = () => {
  function clicked(){
    console.log('Clicked');
  }
  let Move = (val)=>{
    console.log(val)
  }
  return (
    <div >
      <div>
      <button onClick={clicked}>Click here</button>
      <div onMouseMove={Move} className='h-40 w-40 bg-amber-900'>vaygvyvy</div>
      </div>
      <div>
        <input onChange={function(elem){
          Move(elem.targer.input)
        }} type="text" placeholder='enter' />
      </div>
    </div>
  )
}

export default App
