import React from 'react'
import { useState } from 'react'
import AppRouter from './components/AppRouter'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppRouter />
    </>
  )
}

export default App
