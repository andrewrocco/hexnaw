import styled from 'styled-components';
import { Flex } from '@rebass/grid';

export const StyledHeader = styled(Flex)``;

export const StyledNav = styled.nav`
  padding: 21px 22px;

  @media only screen and (max-width: 700px) {
    box-sizing: content-box;
    left: 50%;
    position: fixed;
    text-align: center;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: all .05s ease-in-out;
    width: 100%;
    z-index: 500;
  }
`;

export const StyledNavButton = styled.button`
  display: none;
`;
