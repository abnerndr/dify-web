import classNames from 'classnames';
import mailIcon from '@/assets/images/icons/email.png';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

type InputSendMailProps = {
  title?: string;
  name?: string;
  type?: string;
  value?: string | number;
  id?: string;
  placeholder?: string;
  register?: {};
  required?: boolean;
  mobile: boolean;
};

export default function InputSendMail({
  title = 'digite seu e-mail',
  name,
  type = 'text',
  value,
  id,
  placeholder = 'digite seu e-mail',
  register,
  required = true,
  mobile,
  ...props
}: InputSendMailProps) {
  return (
    <>
      <label
        htmlFor={name}
        className={classNames('mb-2 text-sm font-medium text-gray-900 sr-only')}
      >
        {title}
      </label>
      <div className='relative'>
        <div className='absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none'>
          <img src={mailIcon.src} alt='' className='w-6 ' />
          {/* <EnvelopeIcon className='text-dark w-6 h-6' /> */}
        </div>
        <input
          {...register}
          {...props}
          type={type}
          name={name}
          defaultValue={value}
          id={id}
          placeholder={placeholder}
          required={required}
          className={classNames(
            mobile ? 'border-2 border-dark' : '',
            'block w-full p-4 pl-16 text-sm text-dark rounded-3xl bg-white focus:outline-none focus:border-dark placeholder:text-dark-800'
          )}
        />
        <button
          type='submit'
          className={classNames(
            mobile
              ? 'right-1 bottom-1 font-medium text-xs px-2 py-4'
              : 'right-1.5 bottom-1 font-semibold text-sm px-6 py-3',
            'text-white absolute  rounded-3xl bg-gradient-to-tr from-dark-800 to-dark shadow-md '
          )}
        >
          pedir orçamento
        </button>
      </div>
    </>
  );
}
