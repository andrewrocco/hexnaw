import styled, { css } from 'styled-components';

import { breakpoints, colors, typography } from 'ui/base';

const sizes = {
  xsmall: typography.copyXSmall,
  small: typography.copySmall,
  medium: typography.copyMedium,
  large: typography.copyLarge,
};

const getSizes = ({ size = [] }) => css`
  ${sizes[size[0]] || sizes.small}
  ${Object.keys(breakpoints).slice(1).map((bp, i) => (
    `${breakpoints[bp].min} {
      ${sizes[size[i]]}
    }`
  ))}
`;

export const Text = styled.span`
  ${getSizes}
  color: ${p => colors[p.color] || colors.black};
`;
