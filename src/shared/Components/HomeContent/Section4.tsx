import React from 'react';

import { Button } from '../../elements/atoms';
import { Card } from '../../elements/molecules';
import { CardList } from '../../elements/organisms';

export const Section4 = () => {
  return (
    <section className="mb-36">
      <div className="mb-14 flex items-center justify-center lg:justify-between">
        <h2 className="text-center text-heading-04 font-bold text-primary-neutral-white lg:text-heading-03">
          Live Auctions
        </h2>
        <div className="hidden lg:block">
          <Button className="mt-auto w-full" classButton="primary-outline">
            Get Started
          </Button>
        </div>
      </div>
      <CardList>
        <Card />
        <Card />
        <Card />
      </CardList>
      <div className="mt-14 lg:hidden">
        <Button className="mt-auto w-full" classButton="primary-outline">
          Get Started
        </Button>
      </div>
    </section>
  );
};
