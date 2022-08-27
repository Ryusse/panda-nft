import React from 'react';

import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import { Button } from '../../atoms';
import { GridWrapper } from '../GridWrapper';

export const Header = () => {
  return (
    <header>
      <GridWrapper>
        <div className="col-span-4 w-full py-12 px-4 px-4 px-4 md:col-span-8 md:px-0 lg:col-span-12">
          <div className="grid grid-cols-[0.5fr_auto_0.5fr] items-center">
            <div className="col-span-1 col-start-1 row-start-1 flex items-center gap-3">
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
            <ul className="col-start-2 row-start-1 hidden items-center  gap-8 justify-self-center lg:flex">
              <li>
                <Link
                  to="/"
                  className="font-semibold"
                  activeClassName="text-primary-neutral-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/discover"
                  className="font-semibold"
                  activeClassName="text-primary-neutral-white"
                >
                  Discover
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="font-semibold"
                  activeClassName="text-primary-neutral-white"
                >
                  Contact us
                </Link>
              </li>
            </ul>
            <div className="col-start-3 row-start-1 hidden justify-end lg:flex">
              <Button classButton="primary-outline">Connect Wallet</Button>
            </div>
          </div>
        </div>
      </GridWrapper>
    </header>
  );
};
