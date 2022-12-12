type AboutCardProps = {
  rate: number;
  description: string;
  imageSrc: any;
  imageTitle: string;
  ImageDescription: string;
};

export default function AboutCard({
  rate = 4,
  description,
  imageSrc,
  imageTitle,
  ImageDescription
}: AboutCardProps) {
  return (
    <>
      <div className='w-full h-full inline-block bg-white shadow-xl shadow-gray-200 rounded-lg'>
        <div className='w-full flex flex-col justify-center text-left px-10 py-6'>
          <div className='flex items-center mt-6 mr-3 mb-16'>
            {[0, 1, 2, 3, 4].map((rating) =>
              rate > rating ? (
                <svg
                  key={rating}
                  aria-hidden='true'
                  className='w-4 h-4 text-dark'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                </svg>
              ) : (
                <svg
                  key={rating}
                  aria-hidden='true'
                  className='w-4 h-4 text-gray-400'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                </svg>
              )
            )}
          </div>
          <div className='w-[300px] mb-16'>
            <span className='w-10'>{description}</span>
          </div>
          <div className='flex flex-row items-center gap-x-4 mb-10'>
            <img src={imageSrc.src} alt='' />
            <div className='flex flex-col text-sm'>
              <span className='font-bold'>{imageTitle}</span>
              <span className=' font-light'>{ImageDescription}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
