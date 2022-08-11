import React from 'react'

import { BrowserRouter, Routes, Route, Link, NavLink} from "react-router-dom" 

import Home from "./pages/Home"
import Artigos from "./pages/Artigos"

import logo from './assets/img/neabi_logo.svg'
import user from './assets/icons/ProfP2.svg'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
       <header className='w-full h-12 bg-white-custom flex-row items-center pt-2 '>
      <div className='w-11/12 flex justify-between items-center m-auto'>
        <div className='h-6 flex flex-col justify-between	sm:hidden cursor-pointer'>
            <div className='line-menu'></div>
            <div className='line-menu'></div>
            <div className='line-menu'></div>
        </div>
        <Link to='/'><img className='h-8' src={logo} alt="" /></Link>
        <nav className='absolute top-14 w-6/12 h-full left-0 bg-white-custom sm:static sm:'>
          <ul className=' sm:flex justify-center'>
                <li className='txt-menu hover:text-black'><NavLink className={(navInfo) => (navInfo.isActive ? 'border-b-2 border-black text-green-custom' : '') } to='/'>HOME</NavLink></li>
                <li className='txt-menu hover:text-black'><NavLink className={(navInfo) => (navInfo.isActive ? 'border-b-2 border-black text-green-custom' : '')} to='/Artigos'>ARTIGOS</NavLink></li>
          </ul>
        </nav>
        <div>
          <img className='h-10' src={user} alt="" />
        </div>
      </div>
      <hr className='h-0.5 bg-black'/>
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