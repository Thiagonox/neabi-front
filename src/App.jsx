import React from 'react'

import { BrowserRouter, Routes, Route, Link} from "react-router-dom" 

import Home from "./pages/Home"
import Artigos from "./pages/Artigos"

import logo from './assets/img/neabi_logo.svg'
import user from './assets/icons/user_icon.svg'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
       <header className='w-full h-12 bg-orange-custom flex items-center justify-center pt-2'>
      <div className='w-11/12 flex justify-between items-center'>
        <img className='h-7' src={logo} alt="" />
          <ul className='flex'>
              <li className='mx-2 txt-menu'><Link to='/'>Home</Link></li>
              <li className='mx-2 txt-menu'><Link to='/Artigos'>Artigos</Link></li>
          </ul>
        <div>
          <img className='h-10' src={user} alt="" />
        </div>
      </div>
    </header>
      <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/Artigos" element={<Artigos />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App