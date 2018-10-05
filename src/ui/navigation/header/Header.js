import React from 'react';
import { Box, Flex } from '@rebass/grid';

import { HeaderLink } from '../header_link';
import { HeaderLogo } from '../header_logo';

export const Header = () => (
  <Flex>
    <Box mr="auto">
      <HeaderLogo />
    </Box>
    <Box alignSelf="flex-end">
      <HeaderLink href="/">Hex Naw</HeaderLink>
      <HeaderLink href="/about" prefetch>About</HeaderLink>
      <HeaderLink href="https://thescenery.co" prefetch>The Scenery</HeaderLink>
    </Box>
  </Flex>
);
