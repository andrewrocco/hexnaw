import React from 'react';

import { Heading } from 'ui/typography';
import * as Styled from './Hero.styles';

export const Hero = () => (
  <Styled.HeroOuterWrap px={5} py={7}>
    <Styled.HeroInnerWrap px={[0, 4]}>
      <Heading color="white" level={1} size="large">
        A color accessibility tool for designers and developers.
      </Heading>
      <Styled.HeroDescription>
      Hex Naw is a tool that helps designers and developers test entire color systems for
      contrast and accessibility. Plug in your palette or color system and let Hex Naw do
      the rest. Happy testing!
      </Styled.HeroDescription>
    </Styled.HeroInnerWrap>
  </Styled.HeroOuterWrap>
);
