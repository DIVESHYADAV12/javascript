import React from 'react'
import Top from './Top'
import Ccard from './Ccard'

const Page4 = (props) => {
  return (
    <div className='h-[80vh] w-full bg-[#e6cdb2]'>
      <Top />
      <div id='Cd'className='flex flex-nowrap gap-20 overflow-scroll'>
      {props.CoffeeData.map(function(elem){
        return <Ccard  img={elem.img} name={elem.name}/>
      })}
      </div>
      
    </div>
  )
}

export default Page4
