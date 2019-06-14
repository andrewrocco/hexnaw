import React from 'react';

import { TwitterShare } from 'components/social';
import { FooterNav } from './FooterNav';
import { FooterContent } from './FooterContent';
import * as Styled from './Footer.styles';

export const Footer = () => (
  <Styled.Footer>
    <TwitterShare />
    <FooterNav />
    <FooterContent />
  </Styled.Footer>
);
