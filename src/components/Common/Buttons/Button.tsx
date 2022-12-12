import classNames from 'classnames';
import { useMemo } from 'react';

interface IButton {
  type: 'submit' | 'button' | 'reset';
  text: string;
  size: 'full' | 'large' | 'medium' | 'small';
  onClick?: () => void;
  dark?: boolean;
  light?: boolean;
}

export default function Button({ type, text, size, dark, light, ...props }: IButton) {
  return (
    <>
      <button
        type={type}
        className={classNames(
          dark ? 'bg-gradient-to-r from-dark-800 to-dark text-white' : '',
          light ? 'bg-gradient-to-r from-white to-cinza-50 text-dark' : '',
          (size === 'full' && 'w-full') ||
            (size === 'large' && 'w-72') ||
            (size === 'medium' && 'w-52') ||
            (size === 'small' && 'w-20'),
          'uppercase font-semibold text-md px-6 py-4 rounded-3xl  shadow-md'
        )}
        {...props}
      >
        {text}
      </button>
    </>
  );
}
