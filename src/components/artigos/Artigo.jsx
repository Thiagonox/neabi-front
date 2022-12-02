import React from 'react'

function Artigo(props) {
  return (
    <div className={props.class + 'pb-8 hover:bg-green-custom cursor-pointer duration-500 text-white-custom'}>
        <hr className='w-11/12 border-t-2 border-red-custom m-auto mb-4' />
        <div className='w-11/12 p-4 m-auto flex items-center justify-between'>
            <h2 className='md:w-1/4 w-[55%] font-Perandory text-2xl md:text-3xl mr-2'>Discursos sobre as religiões afro-brasileiras</h2>
            <p className='md:w-2/4 hidden md:block font-Bluu text-xl'>A mistura de raças que começou com a colonização portuguesa no Brasil no ano de 1500, continuou a ser característica da população brasileira. O fato do Brasil ser uma sociedade.</p>
            <img className='md:w-1/5 w-[45%] shadow-red' src="https://images.unsplash.com/photo-1669518769047-3b40db6cb169?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80" alt="" />
        </div>
    </div>
  )
}

export default Artigo