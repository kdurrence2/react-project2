import React from 'react'
import { useState } from 'react'
import AppRouter from './components/AppRouter'
import Login from './pages/Login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
         {/* <AppRouter /> */}
        <Login />
      </div>

    </>
  )
}

export default App
