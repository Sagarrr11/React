import React from 'react'
import Name from './Name'
import Num from './Num'
import RandomNum from './RandomNum'
import Marks from './Marks'

const App = () => {
  return <div className='flex p-5 gap-5'>
    <Name/>
    <Num/>
    <RandomNum/> 
    <Marks/>
  </div>
}

export default App
