import { breakpoints, spacing } from 'ui/base';

export const theme = {
  breakpoints: Object.values(breakpoints).map(bp => bp.width),
  space: Object.values(spacing),
};
