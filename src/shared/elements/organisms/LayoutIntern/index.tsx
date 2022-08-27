import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

export const LayoutIntern = ({ children, className }: Props) => {
  return (
    <div
      className={`col-span-4 px-4 px-4 md:col-span-8 md:px-0 lg:col-span-12 lg:col-span-12 ${className}`}
    >
      {children}
    </div>
  );
};
