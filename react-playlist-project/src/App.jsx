import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Account from './pages/Account.jsx'
import Search from './pages/Search.jsx'
import Login from './pages/Login.jsx'
import Playlist from './pages/Playlist.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Router>
      <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/account" element={<Account />}></Route>
              <Route path="/search" element={<Search />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/playlist" element={<Playlist />}></Route>
          </Routes>
      </Router>
    </div>
  )
}

export default App
