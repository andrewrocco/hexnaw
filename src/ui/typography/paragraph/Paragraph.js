import styled from 'styled-components';

import { typography } from 'ui/base';

export const Paragraph = styled.p`
  ${typography.copyMedium};

  &:last-of-type {
    margin-bottom: 0;
  }
`;
