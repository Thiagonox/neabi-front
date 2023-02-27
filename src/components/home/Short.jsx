import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import "swiper/css/pagination"
import "swiper/css/navigation";

import { Navigation } from "swiper"

function Short() {

  return (
    <div className='w-11/12 mt-8 p-4'>
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
        <SwiperSlide className='flex justify-center items-center'><iframe src="https://drive.google.com/file/d/1s9fHXdTg-3PnPMUhjT2f7wgIvVNLoKzu/preview" width="355" height="200" allow="autoplay"></iframe></SwiperSlide>
        <SwiperSlide className='flex justify-center items-center'><iframe src="https://drive.google.com/file/d/1s9fHXdTg-3PnPMUhjT2f7wgIvVNLoKzu/preview" width="355" height="200" allow="autoplay"></iframe></SwiperSlide>
        <SwiperSlide className='flex justify-center items-center'><iframe src="https://drive.google.com/file/d/1s9fHXdTg-3PnPMUhjT2f7wgIvVNLoKzu/preview" width="355" height="200" allow="autoplay"></iframe></SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Short