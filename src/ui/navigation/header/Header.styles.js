import styled from 'styled-components';
import { Flex } from '@rebass/grid';

export const StyledHeader = styled(Flex)`
  position: relative;

  &.menu-open {
    &:before {
      @media only screen and (max-width: 700px) {
        background: rgba(0, 0, 0, .95);
        border-bottom: 1px solid rgba(0, 0, 0, .95);
        bottom: 0;
        content: "";
        height: 100vh;
        left: 0;
        position: fixed;
        right: 0;
        top: 0;
        transition: opacity .15s ease-in-out;
        width: 100%;
        z-index: 500;
      }
    }
  }
`;

export const StyledNav = styled.nav`
  padding: 21px 22px;

  @media only screen and (max-width: 700px) {
    box-sizing: content-box;
    left: 50%;
    opacity: 0;
    position: fixed;
    text-align: center;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: all .05s ease-in-out;
    visibility: hidden;
    width: 100%;
    z-index: 500;

    .menu-open & {
      opacity: 1;
      transition: all .25s .1s ease-in-out;
      visibility: visible;
    }
  }
`;

export const StyledNavButton = styled.button`
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 501;

  @media only screen and (min-width: 700px) {
    display: none;
  }
`;
