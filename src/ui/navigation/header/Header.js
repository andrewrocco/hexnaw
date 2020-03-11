import React, { PureComponent } from 'react';
import { Box } from 'reflexbox/styled-components';
import classnames from 'classnames';

import { HeaderLink, HeaderLogo } from 'ui/navigation';
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
    const headerClasses = classnames(menuOpen && 'menu-open');

    return (
      <StyledHeader alignItems="center" className={headerClasses}>
        <Box mr="auto">
          <HeaderLogo />
        </Box>
        <Box>
          <StyledNav open={menuOpen}>
            <HeaderLink href="/">Hex Naw</HeaderLink>
            <HeaderLink href="/about">About</HeaderLink>
            <HeaderLink href="https://thescenery.co">The Scenery &rarr;</HeaderLink>
          </StyledNav>
          <StyledNavButton onClick={this.handleMenuToggle}>Click Me</StyledNavButton>
        </Box>
      </StyledHeader>
    );
  }
}
