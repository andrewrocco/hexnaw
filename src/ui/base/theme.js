import { breakpoints, spacing } from 'ui/base';

export const theme = {
  breakpoints: Object.values(breakpoints).map(bp => bp.point),
  space: Object.values(spacing),
};
