import * as React from 'react';

import { HeadFC } from 'gatsby';

import { Button } from '../shared/elements/atoms';
import { Header } from '../shared/elements/organisms';

const Discover = () => {
  return (
    <>
      <Header />
      <main>
        <Button classButton="primary">Get Started</Button>
      </main>
    </>
  );
};

export default Discover;

export const Head: HeadFC = () => <title>Panda NFT</title>;
