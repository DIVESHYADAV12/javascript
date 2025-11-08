import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
        <div className='flex justify-center gap-30 text-2xl items-center underline'>
        <Link to='/Product/men'>Men</Link>
        <Link to='/Product/women'>Women</Link>
        </div>

        <Outlet/>
        
       
      {/* <h1>Product's Page</h1> */}
    </div>
  )
}

export default Product