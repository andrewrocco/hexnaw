/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Box, Flex } from 'reflexbox/styled-components';

import { theme, spacing } from 'ui/base';
import { AppHead, Footer } from 'components/layout';
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
            <Box width={[1, 1, 1 / 2]} mr={[0, '10%']}>
              <Heading style={{ marginBottom: spacing.medium }}>Get In Touch</Heading>
              <Paragraph size={['small']}>Problems, feedback, requests? We&apos;d love to hear about your experience with Hex Naw and how we can make it even more useful.</Paragraph>
              <Paragraph size={['small']}><a href="mailto:hello@thescenery.co">Email the webmaster</a></Paragraph>
            </Box>
            <Box width={[1, 1, 1 / 2]}>
              <Heading style={{ marginBottom: spacing.medium }}>Colophon</Heading>
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

      <Box className="section-dark" py={6} style={{ backgroundColor: '#000' }}>
        <Box m="0 auto" style={{ maxWidth: '800px' }}>
          <Box px={[4, 5, 0]} style={{ textAlign: 'center' }} mb={5}>
            <Heading size="medium" color="white">Release Notes</Heading>
          </Box>

          <Flex mb={5}>
            <Box width={[1, 1 / 4]}>
              <Text color="white">2.0.0</Text>
              <br />
              <Text color="gray70" size={['2xsmall']}>3/12/20</Text>
            </Box>
            <Box width={[1, 3 / 4]}>
              <Paragraph color="white" size={['small']}>It&apos;s been a while...</Paragraph>
              <Text color="white">
                <ul>
                  <li>Completely rebuilt using Next.js</li>
                  <li>Testing via URL is now available! <a href="/hex/666/66DD33/333/222/ff3300" title="Sample test via URL">Give it a try!</a></li>
                </ul>
              </Text>
            </Box>
          </Flex>

          <Flex mb={5}>
            <Box width={[1, 1 / 4]}>
              <Text color="white">1.0.3</Text>
              <br />
              <Text color="gray70" size={['2xsmall']}>3/27/17</Text>
            </Box>
            <Box width={[1, 3 / 4]}>
              <Paragraph color="white" size={['small']}>Pasting can be a harsh mistress.</Paragraph>
              <Text color="white">
                <ul>
                  <li>Paste a hex value into a field and now it just removes the hash instead of the last character. (Thanks, <a href="https://twitter.com/zaccolley" title="Zac Colley's Twitter account">Zac</a>)!</li>
                </ul>
              </Text>
            </Box>
          </Flex>

          <Flex mb={5}>
            <Box width={[1, 1 / 4]}>
              <Text color="white">1.0.2</Text>
              <br />
              <Text color="gray70" size={['2xsmall']}>10/24/16</Text>
            </Box>
            <Box width={[1, 3 / 4]}>
              <Paragraph color="white" size={['small']}>Sure, you can clear all the fields at once, but that felt a bit overkill. Now you can clear individual fields for fun and profit!</Paragraph>
              <Text color="white">
                <ul>
                  <li>You can now delete individual fields if there are more than two.</li>
                </ul>
              </Text>
            </Box>
          </Flex>

          <Flex mb={5}>
            <Box width={[1, 1 / 4]}>
              <Text color="white">1.0.1</Text>
              <br />
              <Text color="gray70" size={['2xsmall']}>10/18/16</Text>
            </Box>
            <Box width={[1, 3 / 4]}>
              <Paragraph color="white" size={['small']}>What&apos;s an initial release without an immediate bug fix?</Paragraph>
              <Text color="white">
                <ul>
                  <li>Pasting a hex value containing a hash no longer cuts off the last character. (Thanks, <a href="https://twitter.com/weisjohn" title="John Weis's Twitter account">John Weis</a>)!</li>
                  <li>OG image points to the correct domain</li>
                </ul>
              </Text>
            </Box>
          </Flex>

          <Flex mb={5}>
            <Box width={[1, 1 / 4]}>
              <Text color="white">1.0.0</Text>
              <br />
              <Text color="gray70" size={['2xsmall']}>10/17/16</Text>
            </Box>
            <Box width={[1, 3 / 4]}>
              <Paragraph color="white" size={['small']}>Hello! This is our initial release. We wanted to make sure that the basic functionality was fast, responsive and helpful. More features will be added as soon as we can get them out the door. For now, we hope you enjoy Hex Naw 1.0!</Paragraph>
            </Box>
          </Flex>
        </Box>
      </Box>

      <Footer />
    </>
  </ThemeProvider>
);

export default About;
