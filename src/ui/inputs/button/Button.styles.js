import styled, { css } from 'styled-components';

import { colors, spacing, typography } from 'ui/base';

export const modeStyles = {
  inverse: {
    enabled: {
      background: 'transparent',
      borderColor: colors.blue,
      color: colors.blue,
      padding: spacing.small,
      unique: css`
        box-shadow: inset 0px 0px 0px 0px ${colors.blue};
        transition: box-shadow 0.2s ease-in-out;

        :hover {
          box-shadow: inset 0px 0px 0px 1px ${colors.blue};
        }
      `,
    },
    disabled: {
      background: 'transparent',
      borderColor: colors.gray70,
      color: colors.gray70,
      padding: spacing.small,
      unique: css`
        &, :hover {
          box-shadow: none;
        }
      `,
    },
  },
  none: {
    enabled: {
      background: 'inherit',
      borderColor: 'none',
      color: 'inherit',
      padding: '0',
      unique: css`
        border: 0;
      `,
    },
    disabled: {
      background: 'inherit',
      borderColor: 'none',
      color: 'inherit',
      padding: '0',
      unique: css`
        border: 0;
      `,
    },
  },
  primary: {
    enabled: {
      background: colors.blue,
      borderColor: colors.blue,
      color: colors.white,
      padding: spacing.small,
      unique: '',
    },
    disabled: {
      background: colors.gray70,
      borderColor: colors.gray70,
      color: colors.gray40,
      padding: spacing.small,
      unique: '',
    },
  },
};

const style = prop => ({ mode, disabled }) => (
  disabled
    ? modeStyles[mode].disabled[prop]
    : modeStyles[mode].enabled[prop]
);

const fonts = ({ hasText }) => hasText && css`
  ${typography.input}
  text-transform: uppercase;
`;

export const Button = styled.button`
  ${fonts}
  appearance: none;
  background: ${style('background')};
  border-color: ${style('borderColor')};
  border-style: solid;
  border-width: 1px;
  color: ${style('color')};
  cursor: pointer;
  padding: ${style('padding')};

  ${style('unique')}
`;
