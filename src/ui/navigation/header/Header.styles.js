import styled from 'styled-components';
import { Flex } from '@rebass/grid';

import { breakpoints } from 'ui/base';

export const StyledHeader = styled(Flex)`
  position: relative;

  &.menu-open {
    &:before {
      ${breakpoints.medium.max} {
        background: rgba(0, 0, 0, .95);
        border-bottom: 1px solid rgba(0, 0, 0, .95);
        bottom: 0;
        content: "";
        height: 100vh;
        left: 0;
        position: fixed;
        right: 0;
        top: 0;
        width: 100%;
        z-index: 500;
      }
    }
  }
`;

export const StyledNav = styled.nav`
  padding: 21px 22px;

  ${breakpoints.medium.max} {
    box-sizing: content-box;
    left: 50%;
    opacity: 0;
    position: fixed;
    text-align: center;
    top: 50%;
    transform: translate(-50%, -50%);
    visibility: hidden;
    width: 100%;
    z-index: 500;

    .menu-open & {
      opacity: 1;
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

  ${breakpoints.medium.min} {
    display: none;
  }
`;
