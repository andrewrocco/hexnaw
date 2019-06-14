import colors from './color';

export const typographicColors = {
  typeDark: colors.black,
  typeAccent: colors.blue,
  typeWhite: colors.white,
  typeError: colors.violet,
};

const colorVariables = {
  // Buttons
  buttonPrimaryBackground: colors.blue,
  buttonPrimaryBackgroundHover: colors.blue,

  // Header
  headerLogoBackground: colors.black,
  headerLogoFill: colors.white,

  // Input
  inputBackground: colors.white,
  inputClose: colors.gray70,
  inputCloseHover: colors.violet,
  inputPrefix: colors.gray70,
  inputPrefixFocus: colors.violet,

  ...typographicColors,
};

export default colorVariables;
