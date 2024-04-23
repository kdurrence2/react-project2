import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import Account from '../pages/Account.jsx'
import Search from '../pages/Search.jsx'
import Login from '../pages/Login.jsx'
import Playlist from '../pages/Playlist.jsx'



const AppRouter = () => {

    return (
      <>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/account" element={<Account />}></Route>
              <Route path="/search" element={<Search />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/playlist" element={<Playlist />}></Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  };
  
  export default AppRouter