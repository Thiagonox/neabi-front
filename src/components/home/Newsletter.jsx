import React from 'react'

import Ilustração from '../../assets/img/ilustracao-1.svg'

function Newsletter() {
  return (
    <section className='w-full h-60 bg-red-custom flex'>
        <div className='w-11/12 m-auto flex items-center justify-around'>
          <div className='w-[57%]'>
            <h1 className='font-Perandory text-6xl text-white-custom'>ASSINE A NOSSA NEWSLETTER</h1>
            <form className='flex items-center justify-between' action="">
              <input className='w-[75%] h-10 font-Bluu text-[#1c1515b4] pl-3' type="text" placeholder="Digite seu e-mail" />
              <input className='w-[25%] h-10 p-2 font-Bluu text-white-custom bg-black' type="button" value="ENVIAR" />
            </form>
          </div>
        <img className='w-40' src={Ilustração} alt="" />
        </div>
    </section>
  )
}

export default Newsletter