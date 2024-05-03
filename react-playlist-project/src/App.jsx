import React from 'react'
import { useState } from 'react'
import AppRouter from './components/AppRouter'
import Home from './pages/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
         {/* <AppRouter /> */}
        <Home />
      </div>

    </>
  )
}

export default App
