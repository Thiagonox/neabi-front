import React from 'react'

function Artigo(props) {
  return (
    <div className={`pb-8 hover:bg-green-custom cursor-pointer duration-500 text-white-custom ${props.color}`}>
        <hr className='w-11/12 border-t-2 border-red-custom m-auto mb-4' />
        <div className='w-11/12 p-4 m-auto flex items-center justify-between'>
            <h2 className='md:w-1/4 w-[55%] font-Perandory text-2xl md:text-3xl mr-2'>{props.title}</h2>
            <p className='md:w-2/4 hidden md:block font-Bluu text-xl'>{props.text}</p>
            <div className='w-20 h-20 rounded-3xl flex items-center bg-white-custom border-red border-t-2'>
              <img className='w-14 m-auto hover:animate-bounce' src="../src/assets/icons/arrow.svg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Artigo