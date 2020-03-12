import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { Report } from 'components/report';
import { AppHead, Footer, Hero } from 'components/layout';
import { Header } from 'ui/navigation';
import { theme } from 'ui/base';
import { testColors } from 'utils';

class Hex extends Component {
  static async getInitialProps({ query }) {
    const { hex } = query;
    const maxInputs = 12;

    const validateAndTest = (values) => {
      if (!values) return [];

      // validate incoming values
      const validHexValues = values.filter(value => (
        (/^[a-fA-F0-9]{6}$|^[a-fA-F0-9]{3}$/).test(value)
      ));

      const results = testColors({ ...validHexValues });

      return results;
    };

    // make sure that it's capped at 12 items
    const limitedHex = hex.splice(0, maxInputs);
    const cleanResults = validateAndTest(limitedHex);

    return { cleanResults };
  }

  render() {
    const { cleanResults } = this.props;

    return (
      <>
        <ThemeProvider theme={theme}>
          <AppHead />
          <Header />
          <Hero />
          <Report colorResults={cleanResults} />
          <Footer />
        </ThemeProvider>
      </>
    );
  }
}

Hex.propTypes = {
  cleanResults: PropTypes.array.isRequired,
};

export default Hex;
