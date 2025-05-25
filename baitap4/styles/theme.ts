import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const COLORS = {
  // Base colors
  primary: "#0a7ea4",
  secondary: "#687076",

  // Light theme
  lightBackground: "#fff",
  lightText: "#11181C",
  lightBorder: "#E5E7EB",

  // Dark theme
  darkBackground: "#151718",
  darkText: "#ECEDEE",
  darkBorder: "#2D3235",

  // Common colors
  success: "#4CAF50",
  warning: "#FFC107",
  error: "#FF5252",
  info: "#2196F3",
  white: "#fff",
  black: "#000",
};

export const SIZES = {
  // Global sizes
  base: 8,
  small: 12,
  font: 14,
  medium: 16,
  large: 18,
  extraLarge: 24,

  // App dimensions
  width,
  height,

  // Layout
  padding: 16,
  margin: 16,
  radius: 8,

  // Font sizes
  h1: 32,
  h2: 24,
  h3: 18,
  body1: 16,
  body2: 14,
  caption: 12,
};

export const FONTS = {
  regular: "System",
  medium: "System",
  bold: "System",
  light: "System",

  // For custom fonts once loaded
  spaceMono: "SpaceMono",
};

export const SHADOWS = {
  light: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  medium: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  dark: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
};
