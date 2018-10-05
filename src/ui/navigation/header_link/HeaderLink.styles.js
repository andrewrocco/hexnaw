import styled from 'styled-components';

import typography from '../../base/typography/typography';
import colorVariables from '../../base/color/colorVariables';

export const StyledLink = styled.a`
  ${typography.headerLink}
  color: ${colorVariables.typeDark};
  display: inline-block;
  padding: 0 17px;
  transition: color .25s ease-in-out;

  &:hover {
    color: ${colorVariables.typeAccent};
  }
`;
