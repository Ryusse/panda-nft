import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

export const Section2 = () => {
  return (
    <section className="mb-36 flex flex-wrap justify-center gap-4 lg:flex-nowrap lg:justify-between">
      <StaticImage
        alt="binance"
        src="../../../images/svg/binance.svg"
        layout="fixed"
        placeholder="blurred"
      />
      <StaticImage
        alt="coinbase"
        src="../../../images/svg/coinbase.svg"
        layout="fixed"
        placeholder="blurred"
      />
      <StaticImage
        alt="metamask"
        src="../../../images/svg/metamask.svg"
        layout="fixed"
        placeholder="blurred"
      />
      <StaticImage
        alt="tokyocrypto"
        src="../../../images/svg/tokyocrypto.svg"
        layout="fixed"
        placeholder="blurred"
      />
      <StaticImage
        alt="trustwaller"
        src="../../../images/svg/trustwaller.svg"
        layout="fixed"
        placeholder="blurred"
      />
    </section>
  );
};
