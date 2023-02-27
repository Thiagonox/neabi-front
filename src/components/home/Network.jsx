import React from 'react'
import Post from './network/Post'

function Network() {
  return (
    <div className='w-full'>
        <div className='w-full bg-white-custom shadow flex flex-col items-center overflow-clip relative py-8'>
          <h1 className='font-Perandory text-4xl md:text-5xl text-black-custom text-center z-20'>INSTAGRAM</h1>
          <a href='https://www.instagram.com/neabibrumado/' target="_blank"  className='font-Perandory text-2xl md:text-3xl text-green-custom text-center z-20'>@neabibrumado</a>
          <div className='w-full flex overflow-x-auto whitespace-nowrap px-12 py-4'>
            <Post img = "src/assets/img/jenipapo.png"></Post>
            <Post img = "src/assets/img/Prancheta 20.png"></Post>
            <Post img = "src/assets/img/Prancheta 49.png"></Post>
            <Post img = "src/assets/img/mulher-negra--latina-e-caribenha.png"></Post>
          </div>
        </div>
    </div>
  )
}

export default Network