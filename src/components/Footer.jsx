import React from 'react'

function Footer() {
  return (
    <footer className='w-full bg-black-custom pt-24'>
      <div className='w-full flex flex-col justify-between'>
        <div className='w-11/12 m-auto flex flex-col md:flex-row justify-between mb-8'>
          <div className='m-auto mb-6 md:m-0'>
            <h1 className='font-Perandory text-[120px] md:text-[150px] text-white-custom/[50%] leading-none'>NEABI</h1>
          </div>
          <div className='w-full md:w-1/2 flex md:flex-row flex-col justify-between'>
            <div className='h-28 flex flex-col justify-between mb-6 md:mb-0'>
              <h2 className='font-Bluu text-xl text-white-custom'>Contatos</h2>
              <a className='font-Bluu text-lg text-white-custom/[80%] underline underline-offset-1 mr-8' href="mailto:neabi.bru@ifba.edu.br">neabi.bru@ifba.edu.br</a>
              <a className='font-Bluu text-lg text-white-custom/[80%] underline underline-offset-1' href="tel:+55 85 99565218">Delcia: (85) 9956-5218</a>
            </div>
            <div className='h-28 flex flex-col justify-between'>
              <h2 className='font-Bluu text-xl text-white-custom'>Endereço</h2>
              <address className='font-Bluu text-lg text-white-custom/[80%]'>
              R. Francisco Manoel da Cruz, 1-91
              </address>
              <address className='font-Bluu text-lg text-white-custom/[80%]'>
              Urbis I - Brumado - BA, 46100-000
              </address>
            </div>
          </div>
        </div>
        <hr className='w-full border-white-custom border-t-2' />
        <div className='w-11/12 m-auto flex items-center justify-center p-2'>
            <p className='font-Bluu text-lg text-center text-white-custom/[70%]'>Copyright © 2022 - Instituto Federal de Educação, Ciência e Tecnologia da Bahia - IFBA. Todos os direitos reservados.</p>
          </div>
      </div>
    </footer>
  )
}

export default Footer