import { css } from 'styled-components';

import fonts from './fonts';

const typography = {
  headingLarge: css`
    ${fonts.primaryBold}
    font-size: 30px;
    line-height: 1.2;
  `,
  headingMedium: css`
    ${fonts.primaryBold}
    font-size: 24px;
    line-height: 1.2;
  `,
  headingSmall: css`
    ${fonts.primaryBold}
    font-size: 14px;
    text-transform: uppercase;
    line-height: 1.6;
  `,

  // Links
  headerLink: css`
    ${fonts.primaryBold}
    font-size: 12px;
    letter-spacing: 2px;
    text-decoration: none;
    text-transform: uppercase;
  `,

  // Inputs
  input: css`
    ${fonts.primaryBold}
    font-size: 16px;
  `,
};

export default typography;
