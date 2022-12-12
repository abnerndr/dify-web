import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/free-mode';

import usersIcon from '@/assets/images/icons/users.png';
import paymentIcon from '@/assets/images/icons/payment.png';
import notifyIcon from '@/assets/images/icons/notification.png';
import ModuleCard from '@/components/Common/Card/ModuleCard';

export default function Cards() {
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
          <div className='mx-5'>
            <SwiperSlide>
              {/* 1 */}
              <ModuleCard
                icon={<img src={usersIcon.src} />}
                title={'gestão de usuários'}
                description={
                  'the process of managing a task through its life cycle. it involves planning, testing, tracking.'
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              {/* 2 */}
              <ModuleCard
                icon={<img src={paymentIcon.src} />}
                title={'pagamentos'}
                description={
                  'The technology by which a process or procedure is performed with minimalhuman assistance.'
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              {/* 3 */}
              <ModuleCard
                icon={<img src={notifyIcon.src} />}
                title={'notificações'}
                description={
                  '    creating plan to spend your money, this spending planer is called a budgeting tool for business.'
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              {/* 3 */}
              <ModuleCard
                icon={<img src={notifyIcon.src} />}
                title={'notificações'}
                description={
                  '    creating plan to spend your money, this spending planer is called a budgeting tool for business.'
                }
              />
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
      {/* web */}
      <div className='w-full hidden lg:flex justify-center'>
        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[Pagination]}
          className='mySwiper'
          slidesPerView={3}
          spaceBetween={40}
        >
          <div className=''>
            <SwiperSlide>
              {/* 1 */}
              <ModuleCard
                icon={<img src={usersIcon.src} />}
                title={'gestão de usuários'}
                description={
                  'the process of managing a task through its life cycle. it involves planning, testing, tracking.'
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              {/* 2 */}
              <ModuleCard
                icon={<img src={paymentIcon.src} />}
                title={'pagamentos'}
                description={
                  'The technology by which a process or procedure is performed with minimalhuman assistance.'
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              {/* 3 */}
              <ModuleCard
                icon={<img src={notifyIcon.src} />}
                title={'notificações'}
                description={
                  '    creating plan to spend your money, this spending planer is called a budgeting tool for business.'
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              {/* 3 */}
              <ModuleCard
                icon={<img src={notifyIcon.src} />}
                title={'notificações'}
                description={
                  '    creating plan to spend your money, this spending planer is called a budgeting tool for business.'
                }
              />
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </>
  );
}
