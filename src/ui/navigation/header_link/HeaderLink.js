import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { StyledLink } from './HeaderLink.styles';

export const HeaderLink = ({ children, href, isExternal, prefetch }) => (
  !isExternal ? (
    <Link href={href} prefetch={prefetch} passHref>
      <StyledLink>{children}</StyledLink>
    </Link>
  ) : <StyledLink href={href}>{children}</StyledLink>
);

HeaderLink.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  isExternal: PropTypes.bool,
  prefetch: PropTypes.bool,
};
