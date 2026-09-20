import React from 'react'
import { Link } from 'react-router-dom'
const Product = () => {
  return (
    <div className='flex flex-col text-3xl capitalize font-semibold p-5'>
      <h1>Products</h1>
      <Link to='/product/men'>Men's Collection</Link>
      <Link to='/product/women'>Women's Collection</Link>
    </div>
  )
}

export default Product
