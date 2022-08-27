import React, { ReactNode } from 'react';

import Icon from '../icon';

export type ButtonName = 'primary' | 'primary-outline' | 'secondary-underline';
interface Props {
  type?: 'button' | 'submit' | 'reset';
  classButton?: ButtonName;
  icon?: boolean;
  children: ReactNode;
  disabled?: boolean;
  className?: string;
  classNameContainer?: string;
  onClick?: () => void;
}

export const Button = ({
  type = 'button',
  classButton = 'primary-outline',
  icon = false,
  children,
  disabled,
  classNameContainer,
  className,
  onClick,
}: Props) => {
  return (
    <div className={`flex items-center gap-2 ${classNameContainer}`}>
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={` cursor-pointer rounded-[1rem] border-[1.6px] py-3 px-10 text-center text-paragraph-01  font-semibold outline-none duration-200 button-${classButton} ${className}`}
      >
        {children}
      </button>
      {icon && <Icon name="ic_send" className="w-6" />}
    </div>
  );
};
