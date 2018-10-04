import React, { Fragment } from 'react';
import Head from 'next/head';

import { ColorForm } from '../src/components/ColorForm';

const Index = () => (
  <Fragment>
    <Head>
      <title>Hex Naw | A color accessibility tool for designers and developers.</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <div>Hex Naw!</div>
    <ColorForm />
  </Fragment>
);

export default Index;
