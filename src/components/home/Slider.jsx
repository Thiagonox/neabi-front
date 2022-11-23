import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";

import 'swiper/css';
import "swiper/css/pagination"
import "swiper/css/navigation";

import SwiperCore, { Autoplay } from 'swiper';

function Carrossel() {  
  
  SwiperCore.use([Autoplay])

  return (
    <Swiper  loop={true}
    autoplay={{
        delay: 5000,
        disableOnInteraction: false
    }} pagination={true} modules={[Pagination]} className="mySwiper w-full h-[380px]">
        <SwiperSlide className='flex justify-center items-center'><img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1651720602400-af454e39f3e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" alt="" /></SwiperSlide>
        <SwiperSlide className='flex justify-center items-center'><img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1657954710416-3b28f05d95e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" /></SwiperSlide>
        <SwiperSlide className='flex justify-center items-center'><img className='w-full h-full object-cover' src="https://media.istockphoto.com/vectors/international-jazz-day-retro-banner-of-woman-singer-vector-id1149600095?k=20&m=1149600095&s=612x612&w=0&h=H8_A0q1xxvpu6KQd_zne7hgEABasVKR3WkDDB5dlVCk=" alt="" /></SwiperSlide>
        <SwiperSlide className='flex justify-center items-center'><img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1667684550432-35d19dd88940?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80" alt="" /></SwiperSlide>
        <SwiperSlide className='flex justify-center items-center'><img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1667509469578-1100fa2b4eac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" /></SwiperSlide>
    </Swiper>
  )
 }

export default Carrossel