import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import { Button } from '../../atoms';

export const Card = () => {
  return (
    <div className="rounded-[24px] bg-primary-grey-900 p-6">
      <StaticImage
        className="rounded-[24px]"
        placeholder="blurred"
        src="../images/jpg/heroimage2.jpg"
        alt="image"
        layout="fullWidth"
        width={498}
        height={352}
      />
      <div>
        <div className="mt-6 flex justify-between">
          <div>
            <p className="text-paragraph-01 font-bold text-primary-neutral-white">
              Dao Vinci #0000
            </p>
            <div className="mt-2 flex items-center gap-[8px]">
              <StaticImage
                className="rounded-[24px]"
                placeholder="blurred"
                src="../images/jpg/heroimage2.jpg"
                alt="image"
                layout="fixed"
                width={40}
                height={40}
              />
              <p className="text-paragraph-01 text-primary-neutral-white">
                @SalvadorDali
              </p>
            </div>
          </div>
          <div>
            <p className="mb-6 text-paragraph-01 text-primary-grey-500">
              Current Bid
            </p>
            <p className="text-paragraph-01 font-bold text-primary-grey-500">
              4.89 eTH
            </p>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between">
          <p className="text-paragraph-01 font-bold text-primary-neutral-white">
            05 : 12 : 07 : 26
          </p>
          <Button classButton="primary" className="w-[7.5rem]">
            Bid
          </Button>
        </div>
      </div>
    </div>
  );
};
