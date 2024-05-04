import React from 'react'
import { useState } from 'react'
import AppRouter from './components/AppRouter'
import Playlist from './pages/Playlist'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
         {/* <AppRouter /> */}
        <Playlist />
      </div>

    </>
  )
}

export default App
