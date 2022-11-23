import React from 'react'
import Artigo from '../artigos/Artigo'

import Header from '../Header'
import Footer from '../Footer'

function Artigos() {

  let bg = "bg-black-custom"

  return (
    <div id='main' className='w-full bg-orange-custom'>
      <Header></Header>
      <div className='w-11/12 m-auto pt-8'>
        <h1 className='font-Perandory text-9xl'>Artigos</h1>
      </div>
      <Artigo className="bg-black" ></Artigo>
      <Artigo></Artigo>
      <Artigo></Artigo>
      <Artigo></Artigo>
      <Artigo></Artigo>
      <Artigo></Artigo>
      <Artigo></Artigo>
      <Artigo></Artigo>
      <Artigo></Artigo>
      <Artigo></Artigo>
        <Footer></Footer>
    </div>
  )
}

export default Artigos