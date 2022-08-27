import * as React from 'react';

import { HeadFC } from 'gatsby';

import { Button } from '../shared/elements/atoms';
import { Header } from '../shared/elements/organisms';

const Contact = () => {
  return (
    <>
      <Header />
      <main>
        <Button classButton="primary">Get Started</Button>
      </main>
    </>
  );
};

export default Contact;

export const Head: HeadFC = () => <title>Panda NFT</title>;
