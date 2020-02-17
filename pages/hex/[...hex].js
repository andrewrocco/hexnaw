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

  function validateAndTest(values) {
    if (!values) return;

    // validate incoming values
    const validHexValues = values.filter(hexID => (
      (/^[a-fA-F0-9]{6}$|^[a-fA-F0-9]{3}$/).test(hexID)
    ));

    const results = testColors({ ...validHexValues });

    // eslint-disable-next-line consistent-return
    return results;
  }

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
