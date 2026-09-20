import { useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {

  const [count, setCount] = useState(0)
  const [title, setTitle] = useState('')
  const [number1, setNumber1] = useState(0)
  const [username, setUsername] = useState('')

  const getData = async()=>{
    const response = await axios.get('https://randomuser.me/api/')
    setUsername(response.data.results[0].name.first+" "+response.data.results[0].name.last)
  }

  useEffect(function(){
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getData()
  },[count,number1])
  /* With dependency,only on the change in dependent element useEffect will run*/

  return (
    <div>
      <input value={title} onChange={(e)=>{
        setTitle(e.target.value)
      }} type="text"/>
      <h1>{title}</h1>

      <h1>{count}</h1>
      <button onClick={()=>{
        setCount(count+1)
      }}>Increase Count</button>

      <h1>{number1}</h1>
      <button onClick={()=>{
        setNumber1(Math.floor(Math.random()*100))
      }}>Change number1</button>

      <h1>{username}</h1>
      {/* Since count and number1 are dependencies, changing either one triggers the API call, which fetches and displays a new random username.*/}
    </div>
  )
}

export default App
