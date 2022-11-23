import React from 'react'

import logo from '../assets/img/neabi_logo.svg'
import user from '../assets/icons/ProfP2.svg'

import { BrowserRouter, Routes, Route, Link, NavLink} from "react-router-dom"

function Header() {
  
  let menuActive = "-translate-x-full sm:translate-x-0"

  const MenuActive = () => {
    if (menuActive == "-translate-x-full") {
       menuActive = "translate-x-0"
    } else {
      menuActive = "-translate-x-full"
    }
  }
  return (  
       <header className='w-full bg-white-custom flex-row items-center pt-2'>
      <div className='w-11/12 h-12 flex justify-between items-center m-auto'>
        
        <div id='menu' onClick={MenuActive} className='h-5 w-5 flex items-center flex-col justify-between sm:hidden cursor-pointer active:h-7 hover:rotate-90 duration-300'>
            <div className='line-menu'></div>
            <div className='line-menu'></div>
            <div className='line-menu'></div>
        </div>
        <Link to='/'><img className='h-8' src={logo} alt="" /></Link>
        <nav className={`absolute top-14 w-6/12 h-full left-0 bg-white-custom flex justify-center items-center m-auto sm:static ${menuActive}`}>
          <ul className='h-full sm:flex flex-row sm:justify-evenly items-center'>
                <li className='txt-menu hover:text-black'><NavLink className={(navInfo) => (navInfo.isActive ? 'border-b-2 border-black text-red-custom' : '') } to='/'>HOME</NavLink></li>
                <li className='txt-menu hover:text-black'><NavLink className={(navInfo) => (navInfo.isActive ? 'border-b-2 border-black text-red-custom' : '')} to='/Artigos'>ARTIGOS</NavLink></li>
                <li className='txt-menu hover:text-black'><NavLink className={(navInfo) => (navInfo.isActive ? 'border-b-2 border-black text-red-custom' : '')} to='/Galeria'>GALERIA</NavLink></li>
          </ul>
        </nav>
        <div className='w-8 h-8 flex justify-center border-2 border-orange-custom rounded-full overflow-hidden cursor-pointer'>
          <img className='h-7' src={user} alt="" />
        </div>
      </div>
      <hr className=' h-0.5 bg-black'/>
    </header>
  )
}

export default Header