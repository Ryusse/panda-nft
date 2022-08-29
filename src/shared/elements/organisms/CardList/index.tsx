import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const CardList = ({ children }: Props) => {
  return (
    <div className="mt-16 flex grid grid-cols-[repeat(auto-fit,minmax(19rem,1fr))] gap-7">
      {children}
    </div>
  );
};
