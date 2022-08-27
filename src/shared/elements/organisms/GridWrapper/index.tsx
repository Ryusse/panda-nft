import React, { FC, ReactNode } from 'react';

type Props = {
  className?: string;
  children: ReactNode;
};

export const GridWrapper: FC<Props> = ({ className, children }) => (
  <div className={className}>
    <div className="mx-auto h-full w-full max-w-[1300px] md:w-[calc(100%-5rem)] lg:w-[calc(100%-120px)]">
      <div className="content-grid">{children}</div>
    </div>
  </div>
);
