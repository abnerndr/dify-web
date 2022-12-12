import Typewriter from 'typewriter-effect';
import { SiteLayout } from '@/components/Layout';
import InputSendMail from '@/components/pages/Home/InputSendMail';
import Cards from '@/components/pages/Home/Cards/Cards';

import apresentationImage from '@/assets/images/dashboard.png';
import aboutPhone from '@/assets/images/about_image.png';

import Points from '@/components/pages/Home/Points/Points';
import VideoMotion from '@/components/pages/Home/Video/Video';
import AboutCards from '@/components/pages/Home/Cards/AboutCards';
import CompaniesSlide from '@/components/pages/Home/Companies/CompaniesSlide';
import Button from '@/components/Common/Buttons/Button';
import { useState } from 'react';
import VideoModal from '@/components/pages/Home/Video/VideoModal';

export default function Index() {
  const [openVideoModal, setOpenVideoModal] = useState<boolean>(false);
  return (
    <>
      <SiteLayout withFooter withHeader>
        {/* web */}
        <div className='mx-10 lg:mx-auto hidden md:flex justify-center max-w-7xl'>
          <div className='w-full absolute z-20 md:mx-10 lg:mx-auto text-center text-white mt-[150px]'>
            <h1 className='text-7xl font-bold mb-8'>
              a maneira mais rápida para <br />
              <span className=' flex items-center justify-center gap-x-5'>
                <span>construir</span>
                <Typewriter
                  options={{
                    loop: true
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString('sua startup')
                      .pauseFor(1500)
                      .deleteAll()
                      .typeString('seu saas')
                      .pauseFor(1500)
                      .deleteAll()
                      .typeString('seu negócio')
                      .pauseFor(1500)
                      .start();
                  }}
                />
              </span>
            </h1>
            <span className='lowercase text-xl font-normal font-light mb-8'>
              comece a vender seu produto enquanto ele ainda está sendo desenvolvido,{' '}
              <br /> adapite seu produto de acordo com o mercado.
            </span>
            {/* input send email */}
            <form className='max-w-xl mx-auto mt-10'>
              <InputSendMail name='send_mail' id='send_mail' required mobile={false} />
            </form>
            <div className='md:mx-10 lg:mx-auto flex justify-center mt-[180px]'>
              <img
                src={apresentationImage.src}
                alt='apresentação_dashboard'
                className=' shadow-lg rounded-lg'
              />
            </div>
          </div>
        </div>
        {/* bg */}
        <div className='hidden md:flex lg:flex mb-32'>
          <div className='w-full h-0 md:h-[1400px] xl:h-[1400px] relative -mt-1 z-0'>
            <svg viewBox='0 0 1440 1182' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M0 1181.5V0H1440V748C1440 1181.5 0 748 0 1181.5Z'
                fill='url(#paint0_linear_1_960)'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_1_960'
                  x1='-0.000131399'
                  y1='0.000319129'
                  x2='1613.97'
                  y2='647.085'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stop-color='#161616' />
                  <stop offset='1' />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* <img
            className='w-full h-0 md:h-[1400px] xl:h-[1400px] relative -mt-1 z-0'
            src={imageBackground.src}
            alt='background-black'
          /> */}
          <div className='pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14'></div>
        </div>
        {/* tecnologias */}
        <div className='max-w-7xl md:mx-10 lg:mx-auto mb-52 hidden md:flex'>
          <div className='flex flex-col justify-center text-center w-full'>
            <div className='w-full flex justify-center text-center flex-col mb-10'>
              <h1 className='text-7xl font-bold mb-8'>tecnologias confiáveis</h1>
              <span className='lowercase text-xl text-dark-600 font-light mb-8'>
                nossa plataforma foi desenvolvida com tecnologias utilizadas pelas
                principáis hightecs do mercado internacional. trazendo mais <br />{' '}
                segurança e confiabilidade no desenvolvimento altamente escalável
              </span>
            </div>
            <div className='flex justify-center mb-8'>
              <CompaniesSlide />
            </div>
          </div>
        </div>
        {/* modulos */}
        <div className='max-w-7xl md:mx-10 lg:mx-auto mb-44 hidden md:block'>
          <div className='w-full flex justify-center text-center flex-col mb-12'>
            <h1 className='text-7xl font-bold mb-8'>módulos disponíveis</h1>
            <span className='lowercase text-xl text-dark-600 font-light mb-8'>
              a dify permite que você crie aplicativos interativos para vários usuários
              para navegadores de desktop e móveis, incluindo todos os <br /> recursos
              necessários para criar um site como o Facebook ou o Airbnb. Crie lógica e
              gerencie um banco de dados com nossa <br /> plataforma intuitiva e
              totalmente personalizável.
            </span>
          </div>
          <Cards />
        </div>
        {/* pedir orçamento */}
        <div className='hidden md:block w-full h-full bg-cinza-200 mt-32'>
          <div className='max-w-7xl md:mx-10 lg:mx-auto'>
            <div className='w-full flex flex-row justify-center gap-x-32'>
              <div className='w-full flex justify-left text-center flex-col mb-12 py-20'>
                <h1 className='text-7xl text-left font-bold mb-8'>
                  plataforma para construção <br /> de produto saas
                </h1>
                <span className='lowercase text-xl text-left text-dark-600 font-light mb-12'>
                  use marketing automation to identify hot leads and email your sales team
                  telling them to follow up. nurture and contact leads at the opportune
                  time to maximize.
                </span>
                <Button size='medium' type='button' text='pedir orçamento' dark />
              </div>
              <div>
                <img src={aboutPhone.src} alt='' className='w-[1150px] h-[650px] ' />
              </div>
            </div>
          </div>
        </div>
        {/* como funciona */}
        <div className='hidden md:block w-full h-full bg-gradient-to-t from-dark-900 to-dark'>
          <div className='max-w-7xl md:mx-10 lg:mx-auto'>
            <div className='w-full flex flex-col justify-center py-32'>
              <div className='w-full flex items-center justify-between flex-row mb-28'>
                <h3 className='text-white font-bold text-4xl'>e como funciona?</h3>{' '}
                <Button size='medium' type='button' text='comece agora!' light />
              </div>
              <div className='flex flex-row items-center md:justify-center lg:justify-between'>
                <div>
                  <Points />
                </div>
                <div className='hidden md:hidden lg:block xl:block'>
                  <VideoMotion />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* sobre a empresa */}
        <div className='hidden md:block w-full h-full bg-cinza-200'>
          <div className='max-w-7xl md:mx-10 lg:mx-auto'>
            <div className='w-full flex flex-col justify-center py-32'>
              <div className='flex justify-center'>
                <h3 className='text-7xl text-left font-bold mb-32'>
                  quem está falando da gente...
                </h3>
              </div>
              <div>
                <AboutCards />
              </div>
            </div>
          </div>
        </div>

        {/* ================================== */}
        {/* mobile */}
        <div className='flex sm:flex md:hidden lg:hidden xl:hidden'>
          <div className='mx-5 w-full flex justify-center flex-col mt-10'>
            <h1 className='text-2xl text-center font-bold mb-2'>
              a maneira mais rápida para <br />
              <span className=' flex items-center justify-center gap-x-1'>
                <span>construir</span>
                <Typewriter
                  options={{
                    loop: true
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString('sua startup')
                      .pauseFor(1500)
                      .deleteAll()
                      .typeString('seu saas')
                      .pauseFor(1500)
                      .deleteAll()
                      .typeString('seu negócio')
                      .pauseFor(1500)
                      .start();
                  }}
                />
              </span>
            </h1>
            <span className='lowercase text-center text-sm font-normal mb-8'>
              comece a vender seu produto enquanto ele ainda <br />
              está sendo desenvolvido, adapite seu produto de acordo com o mercado.
            </span>
            <form className='mb-10 '>
              {' '}
              <InputSendMail name='send_mail' id='send_mail' required mobile={true} />
            </form>
          </div>
        </div>
        {/* tecnologias */}
        <div className='flex md:hidden lg:hidden xl:hidden  bg-gradient-to-t from-dark-900 to-dark text-white'>
          <div className='mx-5 w-full  flex justify-center flex-col mt-10'>
            <h3 className='text-2xl text-center font-bold mb-2'>
              tecnologias confiáveis
            </h3>
            <span className='lowercase text-center text-sm font-normal mb-8'>
              nossa plataforma foi desenvolvida com tecnologias utilizadas pelas
              principáis hightecs do mercado internacional. trazendo mais <br /> segurança
              e confiabilidade no desenvolvimento altamente escalável
            </span>
            <div className='flex justify-center mb-8'>
              <CompaniesSlide />
            </div>
          </div>
        </div>
        {/* modulos */}
        <div className='flex md:hidden lg:hidden xl:hidde flex-col'>
          <div className=' w-full flex justify-center flex-col mt-10'>
            <h3 className='mx-5 text-2xl text-center font-bold mb-2'>
              módulos disponíveis
            </h3>
            <span className='mx-5 lowercase text-center text-sm font-normal mb-8'>
              a dify permite que você crie aplicativos interativos para vários usuários
              para navegadores de desktop e móveis, incluindo todos os <br /> recursos
              necessários para criar um site como o Facebook ou o Airbnb. Crie lógica e
              gerencie um banco de dados com nossa <br /> plataforma intuitiva e
              totalmente personalizável.
            </span>
            <div className='flex justify-center mb-8 '>
              <Cards />
            </div>
          </div>
        </div>
        {/* pedir orçamento */}
        <div className='flex md:hidden lg:hidden xl:hidde flex-col '>
          <div className='bg-cinza-200 w-full flex justify-center flex-col mt-10'>
            <h3 className='mx-5 text-2xl text-center font-bold mb-2 mt-20'>
              plataforma para construção <br /> de produto saas
            </h3>
            <span className='mx-5 lowercase text-center text-sm font-normal mb-8'>
              use marketing automation to identify hot leads and email your sales team
              telling them to follow up. nurture and contact leads at the opportune time
              to maximize.
            </span>
            <div className='w-full flex justify-center mb-20'>
              <Button size='medium' type='button' text='pedir orçamento' dark />
            </div>
          </div>
        </div>
        {/* como funciona */}
        <div className='flex md:hidden lg:hidden xl:hidde flex-col '>
          <div className='bg-gradient-to-t from-dark-900 to-dark text-white w-full flex justify-center flex-col'>
            <div className='w-full flex items-center justify-center flex-col gap-y-5 mb-28'>
              <h3 className='mx-5 text-2xl text-center font-bold mb-2 mt-20'>
                e como funciona?
              </h3>
              <Button size='medium' type='button' text='comece agora!' light />
            </div>
            <div className='w-full flex flex-col'>
              <div className='flex justify-center mb-10 mx-4'>
                <Points />
              </div>
              <div className='flex justify-center mb-24 mx-4'>
                <Button
                  size='full'
                  type='button'
                  text=' assista ao video completo'
                  light
                  onClick={() => setOpenVideoModal(true)}
                />
              </div>
            </div>
          </div>
        </div>
        {/* sobre a empresa */}
        <div className='flex md:hidden lg:hidden xl:hidde flex-col '>
          <div className='bg-cinza-200 w-full flex justify-center flex-col'>
            <h3 className='mx-5 text-2xl text-center font-bold mb-10 mt-20'>
              quem está falando da gente...
            </h3>
            <div className='w-full flex flex-col'>
              <div>
                <AboutCards />
              </div>
            </div>
          </div>
        </div>
      </SiteLayout>
      <VideoModal open={openVideoModal} setOpen={setOpenVideoModal} />
    </>
  );
}
