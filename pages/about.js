import React, { Fragment } from 'react';

import { AppHead } from '../src/components/layout/AppHead';
import { Header } from '../src/components/layout/Header';

const About = () => (
  <Fragment>
    <AppHead pageTitle="About" />
    <Header />
    <div>The About Page</div>
  </Fragment>
);

export default About;
