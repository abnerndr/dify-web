import pointOne from '@/assets/images/icons/01.png';
import pointTwo from '@/assets/images/icons/02.png';
import pointThree from '@/assets/images/icons/03.png';

export default function Points() {
  return (
    <>
      <div className='flex mx-10 md:mx-0 flex-col gap-y-20'>
        {/* 1 */}
        <div className='flex flex-row items-center gap-x-8'>
          <img
            src={pointOne.src}
            alt='marque um call'
            className='w-[50px] h-[50px] md:w-[95px] md:h-[95px] '
          />
          <div className='w-72'>
            <h3 className='text-xl md:text-3xl text-white font-bold mb-2'>
              marque um call
            </h3>
            <span className='text-md md:text-xl text-white font-light'>
              entre em contato pelo nosso whatsapp, agende um horário
            </span>
          </div>
        </div>
        {/* 2 */}
        <div className='flex flex-row items-center gap-x-8'>
          <img
            src={pointTwo.src}
            alt='marque um call'
            className='w-[50px] h-[50px] md:w-[95px] md:h-[95px] '
          />
          <div className='w-72'>
            <h3 className='text-xl md:text-3xl text-white font-bold mb-2'>
              escolha um plano
            </h3>
            <span className='text-md md:text-xl text-white font-light'>
              descubra o plano que mais se enquadre em seu negócio!
            </span>
          </div>
        </div>
        {/* 3 */}
        <div className='flex flex-row items-center gap-x-8'>
          <img
            src={pointThree.src}
            alt='marque um call'
            className='w-[50px] h-[50px] md:w-[95px] md:h-[95px] '
          />
          <div className='w-72 lg:w-[440px]'>
            <h3 className='text-xl md:text-3xl text-white font-bold mb-2'>
              acompanhe o desenvolvimento
            </h3>
            <span className='text-md md:text-xl text-white font-light'>
              acompanhe diariamente a evolução do seu produto, e foque em suas vendas.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
