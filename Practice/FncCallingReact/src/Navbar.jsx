import React from 'react'

const Navbar = (props) => {
    
  return (
    <div className='flex justify-between p-5 mt-2 text-white bg-red-950'>
      <h1>{props.title}</h1>
      <div className="flex gap-10">
        {props.links.map((elem,idx)=>{
            return <h4 key={idx}>{elem}</h4>
        }
        )}
      </div>
    </div>
  )
}

export default Navbar
