import React , {useState} from 'react'
import axios from 'axios'
const App = () => {
    const [allData, setAllData] = useState([])
    const getData = async()=>{
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      console.log(response.data)
      setAllData(response.data)
    }
  return (
    <div className='Cards-wrapper'> 
      <button className="btn" onClick={getData}>Get Data</button>
      {allData.map(function(elem,idx){
        return <div key={idx} className='card'>
          <h1>{elem.name}</h1>
        </div>
      })}
    </div>
  )
}

export default App
