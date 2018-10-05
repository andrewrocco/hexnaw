import React from 'react';
import { Box, Flex } from '@rebass/grid';

import { HeaderLink } from '../header_link';
import { HeaderLogo } from '../header_logo';
import { StyledNav } from './Header.styles';

export const Header = () => (
  <Flex alignItems="center">
    <Box mr="auto">
      <HeaderLogo />
    </Box>
    <Box>
      <StyledNav>
        <HeaderLink href="/">Hex Naw</HeaderLink>
        <HeaderLink href="/about" prefetch>About</HeaderLink>
        <HeaderLink href="https://thescenery.co" prefetch>The Scenery &rarr;</HeaderLink>
      </StyledNav>
    </Box>
  </Flex>
);
