import React from 'react';

import { Button } from '../../elements/atoms';
import { CardArtist } from '../../elements/molecules';

export const Section5 = () => {
  return (
    <section className="mb-36">
      <div className="mb-14 flex items-center justify-center lg:justify-between">
        <h2 className="text-center text-heading-04 font-bold text-primary-neutral-white lg:text-heading-03">
          Featured Artist
        </h2>
        <div className="hidden lg:block">
          <Button className="mt-auto w-full" classButton="primary-outline">
            Get Started
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(9rem,1fr))] gap-x-10 gap-y-14">
        <CardArtist />
        <CardArtist />
        <CardArtist />
        <CardArtist />
        <CardArtist />
        <CardArtist />
      </div>
      <div className="mt-14 lg:hidden">
        <Button className="mt-auto w-full" classButton="primary-outline">
          Get Started
        </Button>
      </div>
    </section>
  );
};
