import React from 'react';

import { Button } from '../../elements/atoms';

export const Section7 = () => {
  return (
    <section className="mb-40 rounded-[1rem] bg-primary-blue-300 p-8 lg:p-12">
      <h2 className="text-center text-heading-04 font-bold text-primary-neutral-white lg:text-heading-03">
        Create Your Own NFT!
      </h2>
      <p className="mb-10 mt-6 text-center text-paragraph-01 text-primary-neutral-white">
        We have a large scale group to support each other in this game, Join us
        to get the news as soon
        <br className="hidden lg:block" /> as possible and follow our latest
        announcements!
      </p>
      <Button className="mx-auto" classButton="white">
        Join Comunity Now
      </Button>
    </section>
  );
};
