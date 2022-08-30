import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import { Button } from '../../elements/atoms';
import { GridWrapper, LayoutIntern } from '../../elements/organisms';

export const Section1 = () => {
  return (
    <>
      <GridWrapper>
        <LayoutIntern className="mt-12 mb-16">
          <section className="flex flex-col justify-between gap-y-10 lg:flex-row lg:gap-x-14">
            <h1 className="text-center text-heading-03 font-bold text-primary-neutral-white md:text-heading-02 lg:text-left">
              Discover a New Era of Crypto Currency
            </h1>
            <div className="flex flex-col justify-center gap-6 lg:max-w-[30rem]">
              <p className=" text-center text-paragraph-01 lg:text-left">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <Button
                classNameContainer="justify-center lg:justify-start"
                classButton="secondary-underline"
                icon
              >
                Get Started
              </Button>
            </div>
          </section>
        </LayoutIntern>
      </GridWrapper>
      <section className="relative mb-36 grid w-full grid-cols-[auto_0.9fr_auto] gap-2 overflow-x-hidden md:grid-cols-[auto_0.6fr_auto] lg:grid-cols-3 lg:gap-6">
        <StaticImage
          className="relative -left-1/2 rounded-r-[19px] md:-left-2  md:rounded-r-[24px] lg:left-0"
          placeholder="blurred"
          src="../../../images/jpg/heroimage1.jpg"
          alt="image"
          layout="fullWidth"
        />
        <StaticImage
          className="rounded-[19px] md:rounded-[24px]"
          placeholder="blurred"
          src="../../../images/jpg/heroimage2.jpg"
          alt="image"
          layout="fullWidth"
        />
        <StaticImage
          className="relative -right-1/2 rounded-l-[19px] md:-right-2 md:rounded-l-[24px] lg:right-0"
          placeholder="blurred"
          src="../../../images/jpg/heroimage3.jpg"
          alt="image"
          layout="fullWidth"
        />
      </section>
    </>
  );
};
