import React from 'react'

import { BrowserRouter, Routes, Route} from "react-router-dom" 

import Home from "./pages/Home"
import Artigos from "./pages/Artigos"
import Header from "./components/Header"

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <BrowserRouter>
      <Routes>
      <Route  path="/" element={<Home />} />
          <Route  path="/Artigos" element={<Artigos />} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App