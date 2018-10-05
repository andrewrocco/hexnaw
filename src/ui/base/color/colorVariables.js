import colors from './color';

export const typographicColors = {
  typeDark: colors.black,
  typeAccent: colors.blue,
};

const colorVariables = {
  buttonPrimaryBackground: colors.blue,
  buttonPrimaryBackgroundHover: colors.blue,
  ...typographicColors,
};

export default colorVariables;
