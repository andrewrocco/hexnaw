import styled from 'styled-components';
import { Box } from 'reflexbox/styled-components';

import { breakpoints, colors, spacing, typography, widths } from 'ui/base';

const heroColors = {
  bg1: colors.blue,
  bg2: colors.violet,
};

export const HeroOuterWrap = styled(Box)`
  background: ${heroColors.bg1};
  background: linear-gradient(to right, ${heroColors.bg1} 0%, ${heroColors.bg2} 100%);
  display: block;
`;

export const HeroInnerWrap = styled(Box)`
  margin: 0 auto;
  max-width: ${widths.maxWidthMd};

  h1 {
    margin-bottom: ${spacing.medium};
  }

  ${breakpoints.medium.min} {
    display: flex;
    justify-content: space-between;

    h1 {
      margin-right: 5%;
      width: 45%;
    }

    p {
      width: 50%;
    }
  }
`;

export const HeroDescription = styled.p`
  ${typography.copyMedium}
  color: ${colors.white};
  margin: 0;
`;
