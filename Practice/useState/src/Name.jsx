import React, {useState} from 'react'

const Name = () => {
  const [user, setUser] = useState("Rohan")
  /* user is its read only value and setuser is its write only value by which we can manage the state trough useState */
  const btnClicked = ()=>{
    console.log(user)
    setUser("Sohan")
  }
  return (
    <div className='p-2'>
      <h1 className='text-3xl mb-2'>{user}</h1>
      <button onClick={btnClicked} className='rounded-3xl bg-red-950 text-m px-3 py-1 text-white'>Change user</button>
      
    </div>
  )
}

export default Name
