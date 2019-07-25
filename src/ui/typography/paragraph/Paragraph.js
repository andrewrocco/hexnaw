import styled, { css } from 'styled-components';

import { colors, breakpoints, typography } from 'ui/base';

const sizes = {
  xsmall: typography.copyXSmall,
  small: typography.copySmall,
  medium: typography.copyMedium,
  large: typography.copyLarge,
};

const getSizes = ({ size = [] }) => css`
  ${sizes[size[0]] || sizes.medium}
  ${Object.keys(breakpoints).slice(1).map((bp, i) => (
    `${breakpoints[bp].min} {
        ${sizes[size[i]]}
      }`
  ))}
`;

export const Paragraph = styled.p`
  ${getSizes}
  color: ${p => colors[p.color] || colors.black};

  &:last-of-type {
    margin-bottom: 0;
  }
`;
