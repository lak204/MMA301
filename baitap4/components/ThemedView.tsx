import { useTheme } from "@/context/ThemeContext";
import { COLORS } from "@/styles/theme";
import { View, type ViewProps } from "react-native";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedViewProps) {
  const { theme } = useTheme();
  const backgroundColor =
    theme === "dark"
      ? darkColor || COLORS.darkBackground
      : lightColor || COLORS.lightBackground;

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
