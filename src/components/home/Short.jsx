import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import "swiper/css/pagination"
import "swiper/css/navigation";

import { Navigation } from "swiper"

function Short() {

  return (
    <div className='w-11/12 mt-8'>
        <h2 className='font-Perandory text-6xl'>CORTES</h2>
        <Swiper navigation={true} modules={[Navigation]} loop={true} className="mb-12 mt-4 mySwiper"  breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
        }}>
        <SwiperSlide className='flex justify-center items-center'><iframe width="355" height="200" src="https://www.youtube.com/embed/muDcS0XwFBU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></SwiperSlide>
        <SwiperSlide className='flex justify-center items-center'><iframe width="355" height="200" src="https://www.youtube.com/embed/PF0r9DniS_E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></SwiperSlide>
        <SwiperSlide className='flex justify-center items-center'><iframe width="355" height="200" src="https://www.youtube.com/embed/tGONRo5L5Q4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Short