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

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppHead />
        <Header />
        <Hero />
        {(
          <Report colorResults={testColors({ ...hex })} />
        )}
        <pre>{JSON.stringify(hex, null, 2)}</pre>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Hex;
