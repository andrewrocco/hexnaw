import React, { Fragment } from 'react';
import Head from 'next/head';

import { Header } from '../src/components/layout/Header';
import { ColorForm } from '../src/components/report/ColorForm';

const Index = () => (
  <Fragment>
    <Head>
      <title>Hex Naw | A color accessibility tool for designers and developers.</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Header />
    <div>Hex Naw!</div>
    <ColorForm />
  </Fragment>
);

export default Index;
