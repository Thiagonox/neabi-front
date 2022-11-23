import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../../styles/tailwind.css"

import {Autoplay, FreeMode} from "swiper";

function Podcast() {


    return(
        <Swiper

        slidesPerView={5}
        spaceBetween={10}
        freeMode={true}
        modules={[Autoplay, FreeMode]}
        loop={true}
        autoplay={{
            delay: 1000,
            disablenInteraction: false,
          }}
        className="mySwiper w-full h-60 my-8 bg-white-custom"
      >
        <SwiperSlide className='w-40 bg-green-custom'>Slide 1</SwiperSlide>
        <SwiperSlide className='w-40 bg-green-custom'>Slide 1</SwiperSlide>
        <SwiperSlide className='w-40 bg-green-custom'>Slide 1</SwiperSlide>
        <SwiperSlide className='w-40 bg-green-custom'>Slide 1</SwiperSlide>
        <SwiperSlide className='w-40 bg-green-custom'>Slide 1</SwiperSlide>
        <SwiperSlide className='w-40 bg-green-custom'>Slide 1</SwiperSlide>
        <SwiperSlide className='w-40 bg-green-custom'>Slide 2</SwiperSlide>
        
      </Swiper>
    )
}

export default Podcast