import React from 'react'
import { useState } from 'react'

const App = () => {

  const[title, setTitle] = useState('')
  const[detail, setDetail] = useState('')
  const[Task, setTask] = useState([]) 

  const submithandler = (e)=>{
    e.preventDefault()
    const copyTask=[...Task]
    copyTask.push({title,detail})
    setTask(copyTask)
    setDetail('')
    setTitle('')
  }
  const deleteNote = (idx)=>{
    const copyTask=[...Task]
    copyTask.splice(idx,1)
    setTask(copyTask)
  }

  return (
    <div className='h-screen bg-black text-white lg:flex'>
      <form onSubmit={(e)=>{
        submithandler(e)
      }} 
      className='rounded flex flex-col lg:w-1/2 py-20 px-10 gap-10'>
        <h1 className='text-4xl font-bold'>Add Notes</h1>
        {/* First input */}
        <input 
        type="text"
        placeholder='Enter Notes Heading'
        className='border-amber-50 border-2 py-2 px-4 text-lg h-20'
        value={title}
        onChange={(e)=>{
            setTitle(e.target.value)
        }}
        />
        {/* Second input */}
        <textarea
         type='text' 
         placeholder='Write details Here'
         className='border-amber-50 border-2 py-2 px-4 h-60 text-lg'
         value={detail}
         onChange={(e)=>{
          setDetail(e.target.value)
         }}
         >
         </textarea>
         <button className='bg-white text-black px-4 py-2 h-15 text-2xl'>Add Note</button>
      </form>
      <div className='lg:w-1/2 p-10 lg:border-l-2'>
        <h1 className='text-3xl mb-4'>Recent Notes</h1>
        <div className=' flex flex-wrap gap-4 overflow-auto h-full pb-10'>
        {Task.map(function(elem,idx){
          return <div className='bg-[url("https://wallpapers.com/images/featured/note-paper-png-uo14l0ju7ermpmqe.jpg")] bg-cover h-50 w-40 p-8 text-black flex flex-col justify-between'>
            <div>
            <h3 className='text-xl font-bold'>{elem.title}</h3>
            <p className='text-sm pt-2 text-gray-600 '>{elem.detail}</p>
            </div>
            <button className='bg-red-500 rounded' onClick={()=>{
              deleteNote(idx)
            }}>Delete</button>
          </div>
        })}
        </div>
      </div>   </div>
  )
}

export default App
