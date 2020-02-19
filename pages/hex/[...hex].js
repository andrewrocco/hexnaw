import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useRouter } from 'next/router';

import { Report } from 'components/report';
import { AppHead, Footer, Hero } from 'components/layout';
import { Header } from 'ui/navigation';
import { theme } from 'ui/base';
import { testColors } from 'utils';

const Hex = () => {
  const router = useRouter();
  const { hex } = router.query;

  const validateAndTest = (values) => {
    if (!values) return [];

    // validate incoming values
    const validHexValues = values.filter(value => (
      (/^[a-fA-F0-9]{6}$|^[a-fA-F0-9]{3}$/).test(value)
    ));

    const results = testColors({ ...validHexValues });

    return results;
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppHead />
        <Header />
        <Hero />
        <Report colorResults={validateAndTest(hex)} />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Hex;
