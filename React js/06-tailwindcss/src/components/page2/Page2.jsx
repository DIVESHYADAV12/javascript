
import React from 'react'
import Top from './Top'
import Fcard from './Fcard'
const Page2 = (props) => {
  return (
    <div className='bg-[#e6cdb2] h-[40vh] w-full px-20'>
        <Top />
        <div id='Fcard' className='flex flex-nowrap gap-10 overflow-scroll'> 
      {props.Coffee.map(function(elem){
       return <Fcard img={elem.img} about={elem.about} type={elem.type}/> 
      })}
    </div>
       
    </div>
  )
}

export default Page2
