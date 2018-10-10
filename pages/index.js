import React, { Fragment } from 'react';

import { ColorForm } from 'components/report';
import { AppHead } from 'components/layout';
import { Header } from 'ui/navigation';
import { Heading } from 'ui/typography';

const Index = () => (
  <Fragment>
    <AppHead />
    <Header />
    <Heading>Hello</Heading>
    <ColorForm maxInputs={12} />
  </Fragment>
);

export default Index;
