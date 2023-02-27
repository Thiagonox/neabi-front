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
        <SwiperSlide className='flex justify-center items-center'><img className='w-full h-full object-cover' src="https://img.freepik.com/vetores-gratis/design-de-padrao-africano-plano_23-2149376292.jpg?w=1380&t=st=1677465592~exp=1677466192~hmac=f1e673ff495fccbbf7ac712d7d90f3a7bf9ff28bf135cf881f9889f3bc4e55b7" alt="" /></SwiperSlide>
        <SwiperSlide className='flex justify-center items-center'><img className='w-full h-full object-cover' src="https://img.freepik.com/vetores-gratis/conjunto-de-cartazes-de-arte-contemporanea-com-danca-tribal-africana-ilustracao_74855-18700.jpg?w=1380&t=st=1677466609~exp=1677467209~hmac=b9f6fb64adf9de4ebde862db4d8b068a4416b41805833251841bfa7e754a191e" alt="" /></SwiperSlide>
        <SwiperSlide className='flex justify-center items-center'><img className='w-full h-full object-cover' src="https://img.freepik.com/vetores-gratis/plano-de-fundo-padrao-design-asteca-sem-costura-etnica-estilo-geometrico-preto-e-branco-vetor_53876-154218.jpg?w=1380&t=st=1677466364~exp=1677466964~hmac=455f44ff194fb9ff4e65683072f1b3aad5ecd91f9d9d1e56509aff6227ebec73" alt="" /></SwiperSlide>
        <SwiperSlide className='flex justify-center items-center'><img className='w-full h-full object-cover' src="https://cdn.pixabay.com/photo/2018/01/12/18/01/african-3078750_960_720.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className='flex justify-center items-center'><img className='w-full h-full object-cover' src="https://img.freepik.com/vetores-gratis/conjunto-de-cartazes-de-arte-contemporanea-com-mascaras-tribais-africanas-ilustracao-vetorial-colecao-de-mascaras-tribais-africanas-em-diferentes-composicoes_74855-17495.jpg?w=1380&t=st=1677465543~exp=1677466143~hmac=f57672ace64f8042cbf591fd5cdd7c266f38317a00bd54c3f0dc33885ab4ed53" alt="" /></SwiperSlide>
    </Swiper>
  )
 }

export default Carrossel