import styled from 'styled-components';
import { Box, Flex } from '@rebass/grid';
import { breakpoints, colors, typography } from 'ui/base';

export const ToolbarInner = styled(Flex)`
  margin: 0 auto;
  max-width: 1000px;

  ${breakpoints.medium.min} {
    border-bottom: 1px solid ${colors.gray30};
    border-top: 1px solid ${colors.gray30};
  }
`;

export const ToolbarHelpButton = styled.button`
  appearance: none;
  background: transparent;
  border: 0;
  cursor: pointer;
  font-size: inherit;
  height: 70px;
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
