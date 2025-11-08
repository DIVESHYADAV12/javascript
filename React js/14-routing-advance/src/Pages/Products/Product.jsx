import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <div>
        <h1 className='flex justify-center gap-30 text-2xl items-center'>
          <Link to='/Product/men'>Men</Link>
        <Link to='/Product/women'>Women</Link>
        </h1>
        
       
      {/* <h1>Product's Page</h1> */}
    </div>
  )
}

export default Product