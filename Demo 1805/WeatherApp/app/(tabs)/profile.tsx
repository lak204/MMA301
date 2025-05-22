import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View, ScrollView, Pressable } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";

export default function ProfileScreen() {
  const textColor = useThemeColor({ light: "#000", dark: "#fff" }, "text");

  const MenuItem = ({
    icon,
    text,
  }: {
    icon: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
    text: string;
  }) => (
    <Pressable style={styles.menuItem}>
      <MaterialCommunityIcons name={icon} size={24} color={textColor} style={styles.menuIcon} />
      <View style={styles.menuTextContainer}>
        <ThemedText style={styles.menuText}>{text}</ThemedText>
        <MaterialCommunityIcons name="chevron-right" size={24} color={textColor} />
      </View>
    </Pressable>
  );

  return (
    <ThemedView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile Header */}
        <View style={styles.header}>
          <View style={styles.avatarContainer}>
            <MaterialCommunityIcons name="account-circle" size={100} color={textColor} />
          </View>
          <ThemedText style={styles.name}>John Doe</ThemedText>
          <ThemedText style={styles.email}>john.doe@example.com</ThemedText>
        </View>

        {/* Settings Sections */}
        <View style={styles.section}>
          <ThemedText style={styles.sectionTitle}>Account Settings</ThemedText>
          <MenuItem icon="account-edit" text="Edit Profile" />
          <MenuItem icon="map-marker" text="Location Settings" />
          <MenuItem icon="bell" text="Notifications" />
        </View>

        <View style={styles.section}>
          <ThemedText style={styles.sectionTitle}>App Settings</ThemedText>
          <MenuItem icon="theme-light-dark" text="Theme Settings" />
          <MenuItem icon="thermometer" text="Temperature Unit" />
          <MenuItem icon="refresh" text="Update Frequency" />
        </View>

        <View style={styles.section}>
          <ThemedText style={styles.sectionTitle}>Support</ThemedText>
          <MenuItem icon="help-circle" text="Help Center" />
          <MenuItem icon="information" text="About App" />
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: "center",
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
  avatarContainer: {
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    opacity: 0.7,
  },
  section: {
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 16,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    marginBottom: 4,
  },
  menuIcon: {
    marginRight: 12,
  },
  menuTextContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  menuText: {
    fontSize: 16,
  },
});
