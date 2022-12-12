import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Video from './Video';
import { LockClosedIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { PlayIcon } from '@heroicons/react/24/solid';

export default function VideoModal({
  open,
  setOpen
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) {
  const onClosed = () => {
    setOpen(false);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={onClosed}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>
        <div className='fixed inset-0 z-10 overflow-y-auto'>
          <button
            type='button'
            onClick={() => setOpen(false)}
            className='z-10 absolute text-red-500 flex w-full justify-center mt-20'
          >
            <XCircleIcon className='w-12 h-12' />
          </button>
          <div className='flex min-h-full flex-col items-center justify-center p-0 text-center sm:items-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <div className='relative rounded-lg bg-white px-1 py-1 w-full md:w-96 text-left shadow-xl transition-all sm:my-8 sm:p-6'>
                <Video />
              </div>
            </Transition.Child>
            <div className='w-full flex justify-center mt-5'>
              {' '}
              <button
                type='button'
                className='z-10 absolute text-white flex w-full justify-center'
              >
                <PlayIcon className='w-20 h-20' />
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
