const fontCapHeight = 0.9;
const sizeModifier = fontCapHeight * 10;

// Calculate individual spacer heights/widths
const spacerNone = 0;
const spacer2xs = Math.round(sizeModifier * 0.5);
const spacerXs = sizeModifier;
const spacerSm = Math.round(sizeModifier * 1.5);
const spacerMd = Math.round(sizeModifier * 2.5);
const spacerLg = Math.round(sizeModifier * 4);
const spacerXl = Math.round(sizeModifier * 6.5);
const spacer2xl = Math.round(sizeModifier * 10.5);

// Spacer Options
export const spacing = {
  'none': `${spacerNone}px`,
  '2xsmall': `${spacer2xs}px`,
  'xsmall': `${spacerXs}px`,
  'small': `${spacerSm}px`,
  'medium': `${spacerMd}px`,
  'large': `${spacerLg}px`,
  'xlarge': `${spacerXl}px`,
  '2xlarge': `${spacer2xl}px`,
};

export const widths = {
  maxWidthMd: '1000px',
};
