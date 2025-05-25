import { useTheme } from "@/context/ThemeContext";
import { globalStyles } from "@/styles/styles";
import { COLORS } from "@/styles/theme";
import React from "react";
import { TouchableOpacity } from "react-native";
import { ThemedText } from "./ThemedText";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <TouchableOpacity
      style={[
        globalStyles.button,
        {
          position: "absolute",
          top: 50,
          right: 16,
          zIndex: 100,
          backgroundColor: isDark ? COLORS.primary : COLORS.secondary,
        },
      ]}
      onPress={toggleTheme}
    >
      <ThemedText style={globalStyles.buttonText}>
        {isDark ? "🌞 Light" : "🌙 Dark"}
      </ThemedText>
    </TouchableOpacity>
  );
}
