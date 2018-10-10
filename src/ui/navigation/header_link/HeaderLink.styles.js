import styled from 'styled-components';

import { breakpoints, colorVariables, typography } from 'ui/base';

export const StyledLink = styled.a`
  ${typography.headerLink}
  color: ${colorVariables.typeDark};
  display: inline-block;
  padding: 0 17px;
  transition: color .25s ease-in-out;

  &:hover {
    color: ${colorVariables.typeAccent};
  }

  ${breakpoints.medium.max} {
    color: ${colorVariables.typeWhite};
    display: block;
    padding: 17px;
  }
`;
