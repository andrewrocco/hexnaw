import styled from 'styled-components';

import { colorVariables, typography } from 'ui/base';

export const StyledLink = styled.a`
  ${typography.headerLink}
  color: ${colorVariables.typeDark};
  display: inline-block;
  padding: 0 17px;
  transition: color .25s ease-in-out;

  &:hover {
    color: ${colorVariables.typeAccent};
  }

  @media only screen and (max-width: 700px) {
    color: ${colorVariables.typeWhite};
    display: block;
    padding: 17px;
  }
`;
