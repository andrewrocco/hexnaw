import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useRouter } from 'next/router';

import { ColorForm, Report } from 'components/report';
import { AppHead, Footer, Hero } from 'components/layout';
import { Header } from 'ui/navigation';
import { theme } from 'ui/base';

const Hex = () => {
  const router = useRouter();
  const { hex } = router.query;

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppHead />
        <Header />
        <Hero />
        <pre>{JSON.stringify(hex, null, 2)}</pre>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Hex;
