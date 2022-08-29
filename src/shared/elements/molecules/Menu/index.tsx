import React from 'react';

import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import { Button } from '../../atoms';

interface Props {
  onOpen: boolean;
  onClose: () => void;
}

export const Menu = ({ onOpen, onClose }: Props) => {
  return (
    <div className={`z-50 block lg:hidden`}>
      <div
        className={`fixed top-0 right-0 z-50 flex h-screen w-9/12 w-full flex-col justify-between border-l border-l-primary-grey-800 bg-primary-blue-100 px-4 py-8 backdrop-blur duration-200 ease-linear ${
          onOpen ? 'right-0' : '-right-full'
        }`}
      >
        <div>
          <div className="mb-6 flex items-center gap-3">
            <StaticImage
              width={43}
              height={40}
              src="../../../../images/png/logopanda.png"
              alt="logo"
              layout="fixed"
            />
            <p className="text-paragraph-01 font-semibold text-primary-neutral-white">
              Panda NFT
            </p>
          </div>
          <ul className="">
            <li className="border-b border-b-primary-grey-800 py-5">
              <Link
                to="/"
                className="font-semibold"
                activeClassName="text-primary-neutral-white"
              >
                Home
              </Link>
            </li>
            <li className="border-b border-b-primary-grey-800 py-5">
              <Link
                to="/discover"
                className="font-semibold"
                activeClassName="text-primary-neutral-white"
              >
                Discover
              </Link>
            </li>
            <li className="py-5">
              <Link
                to="/contact"
                className="font-semibold"
                activeClassName="text-primary-neutral-white"
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>

        <Button className="mt-auto w-full" classButton="primary-outline">
          Connect Wallet
        </Button>
      </div>
      <div
        onClick={onClose}
        className={`fixed top-0 left-0 z-40 h-screen w-screen bg-primary-blue-100/80 backdrop-blur transition-all duration-300 ease-in-out lg:hidden
      ${onOpen ? 'visible ' : 'invisible'}
      ${onOpen ? 'opacity-100' : 'opacity-0'}
      `}
      ></div>
    </div>
  );
};
