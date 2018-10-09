import React, { Fragment } from 'react';

import { AppHead } from '../src/components/layout/AppHead';
import { Header } from '../src/ui/navigation/header/Header';
import { ColorForm } from '../src/components/report/ColorForm';

import { Heading } from '../src/ui/typography/heading';

const Index = () => (
  <Fragment>
    <AppHead />
    <Header />
    <Heading>Hello</Heading>
    <ColorForm maxInputs={12} />
  </Fragment>
);

export default Index;
