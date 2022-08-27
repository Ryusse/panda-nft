import React from 'react';

import '../styles/index.scss';
import type { HeadFC } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import { Button } from '../shared/elements/atoms';
import Icon from '../shared/elements/atoms/icon';
import {
  GridWrapper,
  Header,
  LayoutIntern,
} from '../shared/elements/organisms';

const IndexPage = () => {
  return (
    <>
      <Header />
      <main>
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
            src="../images/jpg/heroimage1.jpg"
            alt="image"
            layout="fullWidth"
            width={498}
            height={352}
          />
          <StaticImage
            className="rounded-[19px] md:rounded-[24px]"
            placeholder="blurred"
            src="../images/jpg/heroimage2.jpg"
            alt="image"
            layout="fullWidth"
            width={498}
            height={352}
          />
          <StaticImage
            className="relative -right-1/2 rounded-l-[19px] md:-right-2 md:rounded-l-[24px] lg:right-0"
            placeholder="blurred"
            src="../images/jpg/heroimage3.jpg"
            alt="image"
            layout="fullWidth"
            width={498}
            height={352}
          />
        </section>
        <GridWrapper>
          <LayoutIntern>
            <section className="mb-36 flex flex-wrap justify-center gap-4 lg:flex-nowrap lg:justify-between">
              <StaticImage
                alt="binance"
                src="../images/svg/binance.svg"
                layout="fixed"
                placeholder="blurred"
              />
              <StaticImage
                alt="coinbase"
                src="../images/svg/coinbase.svg"
                layout="fixed"
                placeholder="blurred"
              />
              <StaticImage
                alt="metamask"
                src="../images/svg/metamask.svg"
                layout="fixed"
                placeholder="blurred"
              />
              <StaticImage
                alt="tokyocrypto"
                src="../images/svg/tokyocrypto.svg"
                layout="fixed"
                placeholder="blurred"
              />
              <StaticImage
                alt="trustwaller"
                src="../images/svg/trustwaller.svg"
                layout="fixed"
                placeholder="blurred"
              />
            </section>
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
                    Once you’ve set up your wallet of choice, connect it to
                    OpenSea by clicking the wallet icon in the top right corner.
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
                    Once you’ve set up your wallet of choice, connect it to
                    OpenSea by clicking the wallet icon in the top right corner.
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
                    Once you’ve set up your wallet of choice, connect it to
                    OpenSea by clicking the wallet icon in the top right corner.
                  </p>
                </div>
              </div>
            </section>
          </LayoutIntern>
        </GridWrapper>
      </main>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Panda NFT</title>;
