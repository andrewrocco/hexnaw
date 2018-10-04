import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import styled from 'styled-components';

const StyledLink = styled.a`
  cursor: pointer;
  display: inline-block;
  margin-right: 10px;
`;

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
