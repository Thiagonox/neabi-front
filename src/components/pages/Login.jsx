import {useNavigate} from 'react-router-dom'

import React from 'react'
import image from '../../assets/img/login.jpg'
import googleIco from '../../assets/img/google-icon.svg'

function Login() {

  return (
    <div className='flex col'>
      <img className='h-screen md:block hidden' src={image} alt="" />
        <div className='w-full h-screen flex flex-col items-center justify-center rounded-2xl p-8'>
          <h1 className='font-Perandory text-9xl mb-4'>LOGIN</h1>
          <button className='w-2/3 flex items-center justify-center bg-black shadow-lg font-Bluu text-lg text-white-custom  p-4 mb-4'>
            <img className='h-6 mr-4' src={googleIco} alt="" />
            Login com o Google
          </button>
          <hr className='border-t-2'/>
          <form action='https://neabi-backend.up.railway.app/api/signin' method='POST' className='w-8/12 flex flex-col items-center mt-8'>
             <div className='w-full'>
                <label className="w-full font-Bluu text-xl text-black-custom/[70%]">Endereço de Email</label>
                <div className='w-full'>
                  <input
                  className='w-full h-10 border border-black font-Bluu text-black-custom/[70%] p-4 mb-6'
                    autoComplete="off"
                    placeholder='Digite seu Email'
                    type="email"
                    name="email"
                  />
                </div>
              </div>
              <div className='w-full'>
                <label className="w-full font-Bluu text-xl text-black-custom/[70%]">Senha</label>
                <div className='w-full'>
                  <input
                  className='w-full h-10 border border-black font-Bluu text-black-custom/[70%] p-4 mb-6'
                    autoComplete="off"
                    placeholder='Digite sua Senha'
                    type="password"
                    name="password"
                  />
                </div>
                
              </div>
              <button
                type="submit"
                className="w-40 h-10 bg-black font-Bluu text-lg text-white-custom text-center shadow-lg"
              >
                Login
              </button>
          </form>
      </div>
    </div>
  )
}

export default Login