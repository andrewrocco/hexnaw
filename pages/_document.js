import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import { GlobalStyles } from '../src/ui/base';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => (
        originalRenderPage({ enhanceApp: App => props => sheet.collectStyles(<App {...props} />) })
      );

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <GlobalStyles />
          <link rel="shortcut icon" type="image/ico" href="/static/favicon.ico" />
          <link rel="stylesheet" type="text/css" href="https://cloud.typography.com/6366132/7734772/css/fonts.css" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
