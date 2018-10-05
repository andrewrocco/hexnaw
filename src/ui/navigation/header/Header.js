import React from 'react';
import { Box, Flex } from '@rebass/grid';

import { HeaderLink } from '../header_link';
import { HeaderLogo } from '../header_logo';

export const Header = () => (
  <Flex alignItems="center">
    <Box mr="auto">
      <HeaderLogo />
    </Box>
    <Box>
      <HeaderLink href="/">Hex Naw</HeaderLink>
      <HeaderLink href="/about" prefetch>About</HeaderLink>
      <HeaderLink href="https://thescenery.co" prefetch>The Scenery</HeaderLink>
    </Box>
  </Flex>
);
