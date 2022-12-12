import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/free-mode';

// dark
import awsImg from '@/assets/images/companies/aws.png';
import firebaseImg from '@/assets/images/companies/firebase.png';
import nextjsImg from '@/assets/images/companies/nextjs.png';
import prismaImg from '@/assets/images/companies/prisma.png';
// light
import awsLight from '@/assets/images/companies/aws-light.png';
import firebaseLight from '@/assets/images/companies/firebase-light.png';
import nextjsLight from '@/assets/images/companies/nextjs-light.png';
import prismaLight from '@/assets/images/companies/prisma-light.png';

export default function CompaniesSlide() {
  return (
    <>
      {/* mobile */}
      <div className='flex justify-center md:hidden w-52 ml-8'>
        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[Pagination]}
          className='mySwiper'
          slidesPerView={1}
          spaceBetween={20}
        >
          <div className='flex items-center justify-center flex-row'>
            <SwiperSlide>
              <img src={nextjsLight.src} alt='nextJs' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={prismaLight.src} alt='nextJs' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={awsLight.src} alt='nextJs' className='ml-8' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={firebaseLight.src} alt='nextJs' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={nextjsLight.src} alt='nextJs' />
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
      {/* web */}
      <div className='hidden md:flex lg:flex xl:flex justify-center  max-w-0 md:max-w-3xl lg:max-w-5xl xl:max-w-7xl'>
        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[Pagination]}
          className='mySwiper'
          slidesPerView={4}
          spaceBetween={40}
        >
          <div className='flex items-center justify-center flex-row'>
            <SwiperSlide>
              <img src={nextjsImg.src} alt='nextJs' className='-mt-1' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={prismaImg.src} alt='prismaJs' className='mt-0.5' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={awsImg.src} alt='amazon web service' className='ml-8 mt-3.5' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={firebaseImg.src} alt='firebase' className='mt-0.5' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={nextjsImg.src} alt='nextJs' className='-mt-2' />
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </>
  );
}
