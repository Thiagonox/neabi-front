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
        <SwiperSlide className='flex justify-center items-center'><img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1660041528119-a46acb826988?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="" /></SwiperSlide>
        <SwiperSlide className='flex justify-center items-center'><img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1660109916827-5d3ea03beae8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="" /></SwiperSlide>
        <SwiperSlide className='flex justify-center items-center'><img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1669018134446-4779a64a1366?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80" alt="" /></SwiperSlide>
        <SwiperSlide className='flex justify-center items-center'><img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1644005209684-e0d12e1a9ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=862&q=80" alt="" /></SwiperSlide>
        <SwiperSlide className='flex justify-center items-center'><img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1667326661065-f22fa2a9e8e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" /></SwiperSlide>
    </Swiper>
  )
 }

export default Carrossel