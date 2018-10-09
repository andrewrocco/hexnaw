import styled from 'styled-components';

import colorVariables from '../../base/color/colorVariables';

export const StyledLink = styled.a`
  background: ${colorVariables.headerLogoBackground};
  float: left;
  font-size: 20px;
  padding: 22px;
  text-decoration: none;
`;

export const StyledSVG = styled.svg`
  float: left;
  height: 18px;
  width: 166px;
`;
