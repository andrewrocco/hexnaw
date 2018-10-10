import styled from 'styled-components';
import { Box } from '@rebass/grid';

import { colorVariables, widths } from 'ui/base';

export const ColorFormContainer = styled(Box)`
  background: ${colorVariables.colorFormBackground};
`;

export const ColorFormInnerWrap = styled(Box)`
  max-width: ${widths.maxWidthMd};
`;
