import React from 'react';

import { StyledLink } from './TwitterShare.styles';

export const TwitterShare = () => (
  <StyledLink
    href="https://twitter.com/intent/tweet?url=http%3A%2F%2Fhexnaw.com&amp;text=Test%20your%20color%20palette%20against%20accessibility%20standards%20with%20Hex%20Naw."
    className="share-link"
  >
    <span className="share-text">Share on Twitter</span>
  </StyledLink>
);
