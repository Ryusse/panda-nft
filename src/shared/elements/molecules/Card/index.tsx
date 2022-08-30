import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import { Button } from '../../atoms';

export const Card = () => {
  return (
    <div className="rounded-[24px] bg-primary-grey-900 p-6">
      <div className="relative">
        <StaticImage
          className="h-[250px] w-full rounded-[16px] object-cover  lg:h-[352px]"
          placeholder="blurred"
          src="../../../../images/jpg/heroimage2.jpg"
          alt="image"
          layout="constrained"
          height={352}
        />
        <div className="card">
          <Button
            classButton="primary"
            className="absolute top-1/2 left-1/2 w-[192px] -translate-x-1/2 -translate-y-1/2"
          >
            Place a bid
          </Button>
        </div>
      </div>

      <div>
        <div className="mt-6 flex items-center justify-between gap-3">
          <p className="text-sub-heading-04 font-semibold text-primary-neutral-white lg:text-sub-heading-03">
            Hamlet Contemplates
          </p>
          <div className="rounded-[8px] bg-primary-blue-300 px-4 py-1 text-paragraph-02 text-primary-neutral-white lg:text-paragraph-01">
            BSC
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-4">
              <StaticImage
                className="rounded-[1rem]"
                placeholder="blurred"
                src="../../../../images/jpg/heroimage2.jpg"
                alt="image"
                layout="fixed"
                width={56}
                height={56}
              />
              <div>
                <p className="text-paragraph-03 text-primary-grey-500 lg:text-paragraph-02">
                  Creator
                </p>
                <p className="text-paragraph-01 font-bold text-primary-neutral-white lg:text-sub-heading-04">
                  SalvadorDali
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="mb-1 text-right text-paragraph-02 lg:text-paragraph-01">
              Current Bird
            </p>
            <p className="text-right text-sub-heading-04 font-bold text-primary-neutral-white lg:text-sub-heading-03">
              4.89 eTH
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
