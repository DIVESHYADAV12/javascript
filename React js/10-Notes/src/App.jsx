import React from 'react'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <form className='rounded flex flex-col w-1/3 py-10 px-10 gap-7'>
        <input 
        type="text"
        placeholder='Enter Notes Heading'
        className='border-amber-50 border-2 py-2 px-4 text-lg'
        />
        <textarea
         type='text' 
         placeholder='Write details Here'
         className='border-amber-50 border-2 py-2 px-4 h-50 text-lg'
         >
         </textarea>
         <button className='bg-white text-black px-4 py-2'>Add Note</button>
      </form>
    </div>
  )
}

export default App
