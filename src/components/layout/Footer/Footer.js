import React from 'react';

import { TwitterShare } from 'components/social';
import { FooterNav } from './FooterNav';
import * as Styled from './Footer.styles';

export const Footer = () => (
  <Styled.Footer>
    <TwitterShare />
    <FooterNav />
  </Styled.Footer>
);
