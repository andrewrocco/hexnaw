import styled from 'styled-components';
import { Box, Flex } from '@rebass/grid';
import { breakpoints, colors, fonts, typography, widths } from 'ui/base';

export const ToolbarWrap = styled(Box)`
  ${breakpoints.medium.min} {
    border-bottom: 1px solid ${colors.gray30};
    border-top: 1px solid ${colors.gray30};
  }
`;

export const ToolbarInner = styled(Flex)`
  margin: 0 auto;
  max-width: 1000px;
`;

export const ToolbarHelpButton = styled.button`
  appearance: none;
  background: transparent;
  border: 0;
  cursor: pointer;
  font-size: inherit;
  height: 70px;
  max-width: 200px;
  width: 100%;

  ${breakpoints.medium.min} {
    width: 120px;
  }
`;

export const ToolbarSection = styled(Flex)`
  border-top: 1px solid ${colors.gray30};
  height: 70px;

  :last-child {
    border-bottom: 1px solid ${colors.gray30};
  }

  ${breakpoints.medium.min} {
    border: 0;

    :first-child {
      width: 100%;
    }

    :not(:first-child) {
      flex-shrink: 0;
    }

    :last-child {
      border-bottom: 0;
      border-left: 1px solid ${colors.gray30};
      border-right: 1px solid ${colors.gray30};
    }
  }
`;

export const ToolbarNumber = styled.span`
  ${typography.headingXSmall}

  em {
    ${typography.headingMedium}
    color: ${p => p.color};
    display: inline-block;
    margin-right: 4px;
  }
`;

export const ToolbarAside = styled.aside`
  display: ${p => (p.isOpen ? 'block' : 'none')};

  ${breakpoints.medium.min} {
    border-top: 1px solid ${colors.gray30};
  }
`;

export const ToolbarAsideInner = styled(Flex)`
  margin: 0 auto;
  max-width: 1000px;
`;

export const StyledTableBox = styled(Box)`
  max-width: ${widths.maxWidthMd};
`;

export const StyledTable = styled.table`
  ${fonts.primaryMedium};
  border-collapse: separate;
  border-spacing: 0;
  border-top-style: solid;
  border-top-width: 10px;
  @media only screen and (min-width: 650px) { border-top-width: 3px; }
  margin-bottom: 45px;
  width: 100%;

  .result-table-header {
    font-size: 12px;
    line-height: 30px;
    padding: 20px 0 15px;
    text-transform: uppercase;
    vertical-align: baseline;

    &.hex-value {
      font-size: 18px;
      @media only screen and (min-width: 780px) { font-size: 30px; }
      text-align: left;
      text-transform: none;
    }

    .desktop-label {
      display: none;
      @media only screen and (min-width: 650px) { display: block; }
    }
    .mobile-label {
      background-color: #e4e4e4;
      border-radius: 50%;
      display: inline-block;
      @media only screen and (min-width: 650px) { display: none; }
      font-size: 9px;
      height: 18px;
      line-height: 18px;
      width: 18px;
    }
  }

  .table-data-color {
    width: 7px;
    @media only screen and (min-width: 650px) { width: 40px; }

    &.bordered {
      box-shadow: inset 0px 0px 0px 1px #e4e4e4;
    }
  }

  .result-table-data {
    border-bottom: 1px solid #e4e4e4;
    font-size: 13px;
    @media only screen and (min-width: 780px) { font-size: 24px; }
    padding: 15px 7px;
    @media only screen and (min-width: 650px) { padding: 30px; }
    text-align: center;

    &.hex-value {
      padding: 15px 0 15px 15px;
      @media only screen and (min-width: 650px) { padding: 30px; }
      text-align: left;
    }
  }

  tr:first-child .result-table-data {
    border-top: 1px solid #e4e4e4;
  }
`;
