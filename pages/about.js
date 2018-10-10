import React, { Fragment } from 'react';

import { AppHead } from 'components/layout';
import { Header } from 'ui/navigation';

const About = () => (
  <Fragment>
    <AppHead pageTitle="About" />
    <Header />
    <div>The About Page</div>
  </Fragment>
);

export default About;
