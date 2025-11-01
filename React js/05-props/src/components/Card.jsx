import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
        <img src={props.img} alt="" />
        <h1>{props.user}</h1>
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi magnam magni ad?</h3>
      <button>View profile</button>
    </div>
  )
}

export default Card
