import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
      });

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
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" type="image/ico" href="/static/favicon.ico" />
          <link rel="stylesheet" type="text/css" href="https://cloud.typography.com/6366132/7734772/css/fonts.css" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          {/* SEO Meta */}
          <meta name="description" content="Test your core color palette or sass variables against accessibility and color contrast standards. Powered by colorable.js" />
          <meta name="robots" content="index,follow" />

          {/* Facebook */}
          <meta property="og:title" content="Hex Naw | A color accessibility tool built by The Scenery." />
          <meta property="og:site_name" content="Hex Naw" />
          <meta property="og:url" content="https://hexnaw.com/" />
          <meta property="og:description" content="Accessibility testing for color palettes or sass variables, built by The Scenery." />
          <meta property="og:image" content="https://hexnaw.com/images/hexnaw.jpg" />
        </Head>
        <body>
          <Main />
          <NextScript />

          {/* Google Analytics */}
          {/* <script>
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

            ga('create', 'UA-62309530-2', 'auto');
            ga('send', 'pageview');

          </script> */}
        </body>
      </Html>
    );
  }
}
