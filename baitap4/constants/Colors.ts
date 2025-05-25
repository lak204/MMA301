import { COLORS } from "../styles/theme";

/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * Colors are centralized in styles/theme.ts and referenced here for backwards compatibility.
 */

const tintColorLight = COLORS.primary;
const tintColorDark = COLORS.white;

export const Colors = {
  light: {
    text: COLORS.lightText,
    background: COLORS.lightBackground,
    tint: tintColorLight,
    icon: COLORS.secondary,
    tabIconDefault: COLORS.secondary,
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: COLORS.darkText,
    background: COLORS.darkBackground,
    tint: tintColorDark,
    icon: COLORS.secondary,
    tabIconDefault: COLORS.secondary,
    tabIconSelected: tintColorDark,
  },
};
