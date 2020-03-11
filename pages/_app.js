import App from 'next/app';
import React from 'react';
import { createGlobalStyle } from 'styled-components';

import { colorVariables } from 'ui/base';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: ${colorVariables.typeAccent};
  }

  .section-dark {
    a {
      color: ${colorVariables.typeWhite};
    }
  }
`;

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
