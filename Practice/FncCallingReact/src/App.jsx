import React from 'react'
import Navbar from './Navbar'
const App = () => {
  return (
    <div>
      <Navbar title="React" links={['Home','About','Services','Contact']} />
      <Navbar title="City" links={['Places','About','Catalogue','Contact']} />
      <Navbar title="Honda" links={['Bikes','Cars','Services','Contact']} />
      <Navbar title="Iphone" links={['Mac','Ipod','Services','Contact']} />

    </div>
  )
}

export default App
