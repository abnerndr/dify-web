import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/free-mode';

import AboutCard from '@/components/Common/Card/AboutCard';
import avatarOne from '@/assets/images/avatar_01.png';
import avatarTwo from '@/assets/images/avatar_02.png';
import avatarThree from '@/assets/images/avatar_03.png';

const infoCard = [
  {
    id: 1,
    rate: 4,
    name: 'douglas prado',
    city: 'são paulo',
    country: 'brasil',
    photo_url: avatarOne,
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna'
  },
  {
    id: 2,
    rate: 1,
    name: 'namura',
    city: 'são paulo',
    country: 'brasil',
    photo_url: avatarTwo,
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna'
  },
  {
    id: 3,
    rate: 4,
    name: 'diego tardelli',
    city: 'rio de janeiro',
    country: 'brasil',
    photo_url: avatarThree,
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna'
  },
  {
    id: 4,
    rate: 4,
    name: 'diego tardelli',
    city: 'rio de janeiro',
    country: 'brasil',
    photo_url: avatarThree,
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna'
  }
];

export default function AboutCards() {
  return (
    <>
      {/* mobile */}
      <div className='w-full flex lg:hidden justify-center'>
        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[Pagination]}
          className='mySwiper'
          slidesPerView={1}
          spaceBetween={20}
        >
          {infoCard.map((info) => (
            <SwiperSlide key={info?.id}>
              <AboutCard
                rate={info.rate}
                description={info.description}
                imageSrc={info.photo_url}
                imageTitle={info.name}
                ImageDescription={`${info.country}, ${info.city}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* web */}
      <div className='w-full lg:flex hidden justify-center'>
        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[Pagination]}
          className='mySwiper'
          slidesPerView={3}
          spaceBetween={40}
        >
          {infoCard.map((info) => (
            <SwiperSlide key={info?.id}>
              <AboutCard
                rate={info.rate}
                description={info.description}
                imageSrc={info.photo_url}
                imageTitle={info.name}
                ImageDescription={`${info.country}, ${info.city}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
