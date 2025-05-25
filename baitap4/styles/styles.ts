import { StyleSheet } from "react-native";
import { COLORS, SHADOWS, SIZES } from "./theme";

export const globalStyles = StyleSheet.create({
  // Container styles
  container: {
    flex: 1,
    backgroundColor: COLORS.lightBackground,
  },
  safeArea: {
    flex: 1,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  // Text styles
  title: {
    fontSize: SIZES.h1,
    fontWeight: "bold",
    textAlign: "center",
    color: COLORS.lightText,
    marginVertical: SIZES.margin,
  },
  subtitle: {
    fontSize: SIZES.h3,
    fontWeight: "600",
    color: COLORS.lightText,
    marginVertical: SIZES.base,
  },
  bodyText: {
    fontSize: SIZES.body1,
    color: COLORS.lightText,
    lineHeight: 24,
  },
  caption: {
    fontSize: SIZES.caption,
    color: COLORS.secondary,
  },

  // Input styles
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: COLORS.lightBorder,
    borderRadius: SIZES.radius,
    paddingHorizontal: SIZES.padding,
    fontSize: SIZES.font,
    backgroundColor: COLORS.white,
    ...SHADOWS.light,
  },

  // Button styles
  button: {
    height: 48,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: SIZES.padding * 2,
    ...SHADOWS.medium,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: SIZES.font,
    fontWeight: "600",
  },
  buttonOutline: {
    height: 48,
    borderRadius: SIZES.radius,
    borderWidth: 1,
    borderColor: COLORS.primary,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: SIZES.padding * 2,
  },
  buttonOutlineText: {
    color: COLORS.primary,
    fontSize: SIZES.font,
    fontWeight: "600",
  },

  // Card styles
  card: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    padding: SIZES.padding,
    marginVertical: SIZES.base,
    ...SHADOWS.medium,
  },

  // Layout styles
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  spaceBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  padding: {
    padding: SIZES.padding,
  },
  margin: {
    margin: SIZES.margin,
  },
});
