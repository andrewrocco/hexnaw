import colors from './color';

export const typographicColors = {
  typeDark: colors.black,
  typeAccent: colors.blue,
  typeWhite: colors.white,
};

const colorVariables = {
  // Buttons
  buttonPrimaryBackground: colors.blue,
  buttonPrimaryBackgroundHover: colors.blue,

  // Header
  headerLogoBackground: colors.black,
  headerLogoFill: colors.white,

  ...typographicColors,
};

export default colorVariables;
