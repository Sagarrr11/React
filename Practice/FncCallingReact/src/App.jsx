import React from 'react'
import Navbar from './Navbar'
const App = () => {
  return (
    <div>
      <Navbar title="React" links={['Home','About','Services','Contact']} />
    </div>
  )
}

export default App
