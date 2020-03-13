import styled from 'styled-components';
import { Flex } from 'reflexbox/styled-components';

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
  appearance: none;
  background-color: transparent;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' id='hamburger' viewBox='0 0 612 612'%3E%3Cpath d='M0 95.625v38.25h612v-38.25H0zm0 229.5h612v-38.25H0v38.25zm0 191.25h612v-38.25H0v38.25z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  border: none;
  display: inline-block;
  height: 16px;
  position: absolute;
  top: 23px;
  right: 30px;
  width: 16px;
  z-index: 501;

  .menu-open & {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' id='close-nav' viewBox='0 0 612 612'%3E%3Cpath fill='%23FFFFFF' d='M612 36.004L576.52.604 306 270.607 35.478.603 0 36.003l270.522 270.008L0 575.998l35.478 35.4L306 341.41l270.52 269.987 35.48-35.4L341.46 306.01'/%3E%3C/svg%3E");
  }

  /* Hide the button contents visually, but allow screen readers to pick it up */
  span {
    clip: rect(0 0 0 0);
    height: 1px; width: 1px;
    margin: -1px; padding: 0; border: 0;
    overflow: hidden;
    position: absolute;
  }

  ${breakpoints.medium.min} {
    display: none;
  }
`;
