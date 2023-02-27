import React from 'react'

function Post(prop) {
  return (
    <a href='https://www.instagram.com/neabibrumado/' target="_blank" className='w-1/4 mr-36'>
        <div className='w-10 h-10 bg-black rounded-full overflow-hidden'>
          <img src="../src/assets/img/OBaoba.png" alt="" />
        </div>
        <div className='w-96 h-96 bg-black rounded-3xl my-2 overflow-hidden hover:opacity-75'>
          <img src={prop.img} alt="" />
        </div>
        <div className='w-96 px-2 flex justify-between'>
          <div className='w-1/4 flex justify-between'>
              <div className='w-6 h-6'>
                <img src="src/assets/icons/heart.png" alt="" />
              </div>
              <div className='w-6 h-6'>
                <img src="src/assets/icons/chat.png" alt="" />
              </div>
              <div className='w-6 h-6'>
                <img src="src/assets/icons/send.png" alt="" />
              </div>
          </div>
          <div className='w-6 h-6'>
            <img src="src/assets/icons/mark.png" alt="" />
          </div>
        </div>
    </a>
  )
}

export default Post