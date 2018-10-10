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

  // Input
  inputBackground: colors.white,
  inputPrefix: colors.gray70,
  inputPrefixFocus: colors.violet,

  ...typographicColors,
};

export default colorVariables;
