import React from 'react';

import '../styles/index.scss';
import type { HeadFC } from 'gatsby';

import { HomeContent } from '../shared/Components';
import { Header } from '../shared/elements/organisms';

const IndexPage = () => {
  return (
    <>
      <Header />
      <HomeContent />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Panda NFT</title>;
