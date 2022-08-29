import React, { useState, useEffect } from 'react';

import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import { useScrollPosition } from '../../../hooks';
import { Button } from '../../atoms';
import Icon from '../../atoms/icon';
import { Menu } from '../../molecules';
import { GridWrapper } from '../GridWrapper';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScroll, setIsScroll] = useState<boolean>(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollPosition = useScrollPosition();

  useEffect(() => {
    if (scrollPosition > 70) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  }, [scrollPosition]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 border-b-[1px] py-6 px-4 transition-all duration-200 lg:px-0 lg:py-8  ${
          isScroll
            ? 'border-b-primary-grey-800 bg-primary-blue-100/80 backdrop-blur'
            : 'border-b-transparent  bg-transparent'
        }`}
      >
        <GridWrapper>
          <div className="col-span-4 w-full  md:col-span-8 md:px-0 lg:col-span-12 ">
            <div className="flex grid-cols-[0.5fr_auto_0.5fr] items-center items-center justify-between lg:grid">
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

              <div onClick={() => handleMenuOpen()} className="lg:hidden">
                <Icon name="ic_menu" className="w-6" />
              </div>
            </div>
          </div>
        </GridWrapper>
      </header>

      <Menu onOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};
