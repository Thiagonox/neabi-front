import React from 'react'

import { BrowserRouter, Routes, Route, Link, NavLink} from "react-router-dom" 

import Home from "./components/pages/Home"
import Artigos from "./components/pages/Artigos"
import Login from './components/pages/Login'
import Visualizar from './components/pages/Visualizar'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/Artigos" element={<Artigos />} />
          <Route  path="/Login" element={<Login />} />
          <Route  path="/Visualizar" element={<Visualizar />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App