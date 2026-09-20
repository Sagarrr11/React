import React from 'react'
import { useParams } from 'react-router-dom'

const RandomAbout = () => {
    const params = useParams()
    
  return (
    <div className='flex justify-center text-3xl capitalize font-semibold p-5'>
      {params.id} Page
    </div>
  )
}

export default RandomAbout
