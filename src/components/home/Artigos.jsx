import React from 'react'
import Artigo from '../artigos/Artigo'


function Artigos() {
  return (
    <section className='bg-black-custom w-full'>
        <h1 className='font-Perandory text-6xl text-yellow-custom text-center mb-4 mt-6'>ARTIGOS</h1>
        <Artigo></Artigo>
        <Artigo></Artigo>
        <Artigo></Artigo>
    </section>
  )
}

export default Artigos