import React from 'react'
import Slider from '../home/Slider'
import Short from '../home/Short'
import Podcast from '../home/Podcast'
import Artigos from '../home/Artigos'
import Newsletter from '../home/Newsletter'
import Network from '../home/Network'

import Header from '../Header'
import Footer from '../Footer'

function home() {

  return (
    <div>
      <Header></Header>
      <main className='bg-yellow-custom w-full flex flex-col items-center'>
      <Slider></Slider>
      <Short></Short>
      <Artigos></Artigos>
      <Newsletter></Newsletter>
      <Network></Network>
      <Footer></Footer>
    </main>
    </div>
  )
}

export default home