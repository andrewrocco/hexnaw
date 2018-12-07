import styled from 'styled-components';
import { Box, Flex } from '@rebass/grid';

import { colors, typography, spacing, widths } from 'ui/base';
import { Button } from 'ui/inputs';

export const FormContainer = styled(Box)`
  background: ${colors.gray40};
`;

export const FormInnerWrap = styled(Box)`
  max-width: ${widths.maxWidthMd};
`;

export const FormToolbar = styled(Flex)`
  > span {
    ${typography.copySmall}
    display: inline-block;
    margin-right: ${spacing.medium};
  }
`;

export const FormClearButton = styled(Button)`
  svg {
    width: 12px;
  }

  span {
    ${typography.copySmall}
    display: inline-block;
    margin-right: ${spacing.xsmall};
  }

  span,
  svg {
    color: ${colors.blue};
    fill: ${colors.blue};
    transition: color 0.2s ease-in-out, fill 0.2s ease-in-out;
  }

  :hover span,
  :hover svg,
  :focus span,
  :focus svg {
    color: ${colors.violet};
    fill: ${colors.violet};
  }
`;

export const SubmitWrapper = styled(Box)`
  text-align: center;
`;
