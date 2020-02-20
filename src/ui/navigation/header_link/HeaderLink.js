import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { StyledLink } from './HeaderLink.styles';

export const HeaderLink = ({ children, href, prefetch }) => {
  // is this link internal or external?
  // if external, don't use the next/link component
  const isLinkInternal = loc => /^\/(?!\/)/.test(loc);

  return (
    isLinkInternal(href) ? (
      <Link href={href} prefetch={prefetch} passHref>
        <StyledLink>{children}</StyledLink>
      </Link>
    ) : <StyledLink href={href}>{children}</StyledLink>
  );
};

HeaderLink.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  prefetch: PropTypes.bool,
};
