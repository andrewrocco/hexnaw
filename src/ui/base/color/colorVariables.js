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

  // ColorForm
  colorFormBackground: colors.gray40,

  // Header
  headerLogoBackground: colors.black,
  headerLogoFill: colors.white,

  ...typographicColors,
};

export default colorVariables;
