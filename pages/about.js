/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Box, Flex } from '@rebass/grid';

import { theme } from 'ui/base';
import { AppHead } from 'components/layout';
import { Header } from 'ui/navigation';
import { Heading, Paragraph, Text } from 'ui/typography';

const About = () => (
  <ThemeProvider theme={theme}>
    <>
      <AppHead pageTitle="About" />
      <Header />
      <Box m="0 auto" pt={5} px={[4, 5, 0]} style={{ maxWidth: '800px' }}>
        <Box py={6} style={{ borderBottom: '1px solid #e4e4e4' }}>
          <Box mb={6}>
            <Heading color="accent" size="large">Hex Naw is a color contrast tool built for designers and developers. It&apos;s the one we wanted but couldn&apos;t quite find.</Heading>
          </Box>
          <Paragraph>At The Scenery we tend to deal with colors on a systematic level. Whether it&apos;s defining a brand&apos;s core color palette, or evaluating a product&apos;s Sass variables, we&apos;re usually working with accessibility and color contrast on a large scale. After spending hours using the myriad of available tools to input comparisons one by one, we decided to make a tool that could handle small systems as elegantly as single combinations. Hex Naw is the beginning of that tool.</Paragraph>
          <Paragraph>Using the massive power of Colorable to crunch all the numbers, designers and developers can now see how accessible their entire color systems are, and make critical decisions from this data. Decisions that will help make the web and the products we use a better place for everyone involved.</Paragraph>
        </Box>
        <Box py={6}>
          <Flex>
            <Box width={[1, 1, 1 / 2]} mr={[0, 3]}>
              <Heading>Get In Touch</Heading>
              <Paragraph size={['small']}>Problems, feedback, requests? We&apos;d love to hear about your experience with Hex Naw and how we can make it even more useful.</Paragraph>
              <Paragraph size={['small']}><a href="mailto:hello@thescenery.co">Email the webmaster</a></Paragraph>
            </Box>
            <Box width={[1, 1, 1 / 2]}>
              <Heading>Colophon</Heading>
              <Paragraph size={['small']}>
                The font? Gotham.
                <br />
                The stack? <a href="https://nextjs.org/">Next.js</a>.
                <br />
                The host? <a href="https://zeit.co/now">Now</a>.
              </Paragraph>
              <Paragraph size={['small']}>Thanks to <a href="https://twitter.com/jxnblk">Brent Jackson</a> for <a href="http://jxnblk.com/colorable/">Colorable</a>, which make up the guts of this application.</Paragraph>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  </ThemeProvider>
);

export default About;
