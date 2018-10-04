import React, { Fragment } from 'react';

import { AppHead } from '../src/components/layout/AppHead';
import { Header } from '../src/ui/navigation/header/Header';
import { ColorForm } from '../src/components/report/ColorForm';

const Index = () => (
  <Fragment>
    <AppHead />
    <Header />
    <div>Hex Naw!</div>
    <ColorForm />
  </Fragment>
);

export default Index;
