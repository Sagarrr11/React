import React, {useState} from 'react'

const RandomNum = () => {
    const [num, setNum] = useState(0)
  return (
    <div className='flex flex-col gap-2'>
      <div className='h-30 w-30 bg-red-950 text-white text-3xl p-11'>{num}</div>
      <button className='bg-red-950 px-2 py-2 rounded-2xl text-white' onClick={()=>{
        const rdm = Math.floor(Math.random()*100)
        setNum(rdm)
      }}>RandomNum</button>
    </div>
  )
}

export default RandomNum
