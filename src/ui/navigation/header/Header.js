import React from 'react';
import { Box, Flex } from '@rebass/grid';

import { HeaderLink } from '../header_link/HeaderLink';

export const Header = () => (
  <Flex>
    <Box mr="auto">Hello</Box>
    <Box alignSelf="flex-end">
      <HeaderLink href="/">Hex Naw</HeaderLink>
      <HeaderLink href="/about" prefetch>About</HeaderLink>
      <HeaderLink href="https://thescenery.co" prefetch>The Scenery</HeaderLink>
    </Box>
  </Flex>
);
