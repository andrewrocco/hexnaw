import React, { PureComponent } from 'react';
import { Box } from '@rebass/grid';
import classnames from 'classnames';

import { HeaderLink } from '../header_link';
import { HeaderLogo } from '../header_logo';
import { StyledHeader, StyledNav, StyledNavButton } from './Header.styles';

export class Header extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false,
    };

    this.handleMenuToggle = this.handleMenuToggle.bind(this);
  }

  handleMenuToggle() {
    const { menuOpen } = this.state;
    this.setState({ menuOpen: !menuOpen });
  }

  render() {
    const { menuOpen } = this.state;

    return (
      <StyledHeader alignItems="center">
        <Box mr="auto">
          <HeaderLogo />
        </Box>
        <Box>
          <StyledNav open={menuOpen}>
            <HeaderLink href="/">Hex Naw</HeaderLink>
            <HeaderLink href="/about" prefetch>About</HeaderLink>
            <HeaderLink href="https://thescenery.co" prefetch>The Scenery &rarr;</HeaderLink>
          </StyledNav>
          <StyledNavButton onClick={this.handleMenuToggle}>Click Me</StyledNavButton>
        </Box>
      </StyledHeader>
    );
  }
}
