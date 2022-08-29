import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import Icon from '../../atoms/icon';

export const CardArtist = () => {
  return (
    <div className="flex flex-col">
      <StaticImage
        className="mx-auto rounded-full"
        placeholder="blurred"
        src="../images/jpg/heroimage2.jpg"
        alt="image"
        layout="fixed"
        width={120}
        height={120}
      />
      <p className="mt-4 text-center text-paragraph-01 font-bold text-primary-neutral-white lg:text-sub-heading-02">
        Crispin Berry
      </p>
      <div className="mt-4 flex items-center justify-center gap-2">
        <Icon name="ic_ethereum" className="w-6" />
        <p className="text-center text-paragraph-02 text-paragraph-01 text-primary-neutral-white lg:text-paragraph-01">
          214.2 ETH
        </p>
      </div>
    </div>
  );
};
