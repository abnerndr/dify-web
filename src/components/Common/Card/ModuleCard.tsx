import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import { ReactNode } from 'react';

export default function ModuleCard({
  icon,
  title,
  description
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <>
      <div className='w-full h-full bg-gray-50 mb-8 mx-0 lg:mx-10 shadow-gray-200 rounded-lg'>
        <div className='w-full flex flex-col justify-center text-center'>
          <div className='w-full flex justify-center mt-10 mb-5'>
            <div className='w-[65px] h-[65px] bg-cinza-50 rounded-full flex justify-center items-center'>
              <div className='w-8 h-8 text-dark'>{icon}</div>
            </div>
          </div>
          <span className='font-bold text-xl mb-4'>{title}</span>
          <span className='mx-10 font-light text-md mb-8 lowercase'>{description}</span>
          <button className='flex flex-row justify-center gap-x-2 font-semibold bg-transparent border-none mb-10 text-dark hover:text-dark-900'>
            <span>ver mais</span> <ArrowLongRightIcon className='w-5 h-5 mt-0.5' />
          </button>
        </div>
      </div>
    </>
  );
}
