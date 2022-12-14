import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import difyLogo from '@/assets/images/dify.png';
import difyDarkLogo from '@/assets/images/dify-dark.png';

const navigation = [
  { name: 'produto', href: '#' },
  { name: 'soluções', href: '#' },
  { name: 'modulos', href: '#' },
  { name: 'sobre', href: '#' }
];

export default function Header() {
  return (
    <div className='relative overflow-hidden'>
      <Popover as='header' className='relative'>
        {/* web */}
        <div className='pt-4 pb-4 md:bg-gradient-to-tr md:from-dark-900 md:to-dark'>
          <nav
            className='relative  z-10 mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6'
            aria-label='Global'
          >
            <div className='flex flex-1 items-center'>
              <div className='flex w-full items-center justify-between md:w-auto'>
                <a href='#'>
                  <span className='sr-only'>Your Company</span>
                  <img
                    className='h-8 w-auto flex md:hidden'
                    src={difyDarkLogo.src}
                    alt=''
                  />
                  <img className='h-8 w-auto hidden md:flex' src={difyLogo.src} alt='' />
                </a>
                <div className='-mr-2 flex items-center md:hidden'>
                  <Popover.Button className='focus-ring-inset inline-flex items-center justify-center rounded-md bg-gray-900 p-2 text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white'>
                    <span className='sr-only'>Open main menu</span>
                    <Bars3Icon className='h-6 w-6' aria-hidden='true' />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className='hidden space-x-8 md:ml-10 md:flex'>
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className='text-base font-medium text-white hover:text-gray-300'
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className='hidden md:flex'>
              <button className='bg-white text-black font-semibold px-4 py-2 ml-6 rounded-3xl'>
                entrar
              </button>
            </div>
          </nav>
        </div>

        {/* mobile */}
        <Transition
          as={Fragment}
          enter='duration-150 ease-out'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='duration-100 ease-in'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <Popover.Panel
            focus
            className='relative -mt-[76px] inset-x-0 top-0 z-30 origin-top transform p-2 transition md:hidden '
          >
            <div className='overflow-hidden rounded-lg bg-gradient-to-t from-dark-900 to-dark shadow-md ring-1 ring-white ring-opacity-5 '>
              <div className='flex items-center justify-between px-5 pt-4'>
                <div>
                  <img className='h-8 w-auto' src={difyLogo.src} alt='' />
                </div>
                <div className='-mr-2'>
                  <Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                    <span className='sr-only'>Close menu</span>
                    <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                  </Popover.Button>
                </div>
              </div>
              <div className='pt-5 pb-6'>
                <div className='space-y-1 px-2'>
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='block rounded-md px-3 py-2 text-base font-medium text-white '
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className='px-4 mt-8 mb-2'>
                  <button className='w-full bg-white text-black font-semibold py-2 rounded-3xl'>
                    entrar
                  </button>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}
