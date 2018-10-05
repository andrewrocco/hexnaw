import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { StyledLink } from './HeaderLink.styles';

export const HeaderLink = ({ children, href, prefetch }) => (
  <Link href={href} prefetch={prefetch} passHref>
    <StyledLink>{children}</StyledLink>
  </Link>
);

HeaderLink.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  prefetch: PropTypes.bool,
};
