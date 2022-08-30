import React from 'react';

import Icon from '../../elements/atoms/icon';

export const Section3 = () => {
  return (
    <section className="mb-36">
      <h2 className="text-center text-heading-04 font-bold text-primary-neutral-white lg:text-heading-03">
        Create and sell your <br className="hidden lg:block" /> NFTs
      </h2>
      <div className="mt-16 flex grid grid-cols-[repeat(auto-fit,minmax(17rem,1fr))] gap-7">
        <div className="group grid cursor-pointer place-content-center rounded-2xl border border-transparent bg-primary-grey-900 py-14 px-8 duration-200 ease-in-out hover:border-primary-grey-800 hover:bg-transparent">
          <div className="mx-auto grid h-20 w-20 place-content-center rounded-full bg-primary-blue-300">
            <Icon name="ic_iconCard" />
          </div>
          <h3 className="mt-12 text-center text-sub-heading-02 font-bold text-primary-neutral-white">
            Set up your wallet
          </h3>
          <p className="mt-6 text-center text-paragraph-02 group-hover:text-primary-grey-200">
            Once you’ve set up your wallet of choice, connect it to OpenSea by
            clicking the wallet icon in the top right corner.
          </p>
        </div>

        <div className="group grid cursor-pointer place-content-center rounded-2xl border border-transparent bg-primary-grey-900 py-14 px-8 duration-200 ease-in-out hover:border-primary-grey-800 hover:bg-transparent">
          <div className="mx-auto grid h-20 w-20 place-content-center rounded-full bg-primary-blue-300">
            <Icon name="ic_iconCard" />
          </div>
          <h3 className="mt-12 text-center text-sub-heading-02 font-bold text-primary-neutral-white">
            Add your NFTs
          </h3>
          <p className="mt-6 text-center text-paragraph-02 group-hover:text-primary-grey-200">
            Once you’ve set up your wallet of choice, connect it to OpenSea by
            clicking the wallet icon in the top right corner.
          </p>
        </div>

        <div className="group grid cursor-pointer place-content-center rounded-2xl border border-transparent bg-primary-grey-900 py-14 px-8 duration-200 ease-in-out hover:border-primary-grey-800 hover:bg-transparent">
          <div className="mx-auto grid h-20 w-20 place-content-center rounded-full bg-primary-blue-300">
            <Icon name="ic_iconCard" />
          </div>
          <h3 className="mt-12 text-center text-sub-heading-02 font-bold text-primary-neutral-white">
            List them for sale
          </h3>
          <p className="mt-6 text-center text-paragraph-02 group-hover:text-primary-grey-200">
            Once you’ve set up your wallet of choice, connect it to OpenSea by
            clicking the wallet icon in the top right corner.
          </p>
        </div>
      </div>
    </section>
  );
};
