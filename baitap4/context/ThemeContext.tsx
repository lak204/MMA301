import { COLORS } from "@/styles/theme";
import * as SystemUI from "expo-system-ui";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useColorScheme as useDeviceColorScheme } from "react-native";

type ThemeType = "light" | "dark";

interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const deviceTheme = useDeviceColorScheme();
  const [theme, setTheme] = useState<ThemeType>(deviceTheme || "light");

  useEffect(() => {
    // Update system UI when theme changes
    const backgroundColor =
      theme === "dark" ? COLORS.darkBackground : COLORS.lightBackground;
    SystemUI.setBackgroundColorAsync(backgroundColor);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
