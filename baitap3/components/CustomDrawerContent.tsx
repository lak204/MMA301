import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Image, StyleSheet, View } from "react-native";
import { useThemeColor } from "../hooks/useThemeColor";
import { ThemedText } from "./ThemedText";

export function CustomDrawerContent(props: any) {
  const backgroundColor = useThemeColor({}, "background");
  const textColor = useThemeColor({}, "text");

  return (
    <DrawerContentScrollView {...props} style={{ backgroundColor }}>
      <View style={styles.profileContainer}>
        <Image
          source={require("../assets/images/adaptive-icon.png")}
          style={styles.avatar}
        />
        <ThemedText style={styles.username}>Le Anh Khoi</ThemedText>
      </View>

      <DrawerItem
        label="Home"
        onPress={() => props.navigation.navigate("Home")}
        labelStyle={{ color: textColor }}
      />
      <DrawerItem
        label="Profile"
        onPress={() => props.navigation.navigate("Profile")}
        labelStyle={{ color: textColor }}
      />
      <DrawerItem
        label="Logout"
        onPress={() => {
          // Handle logout logic here
          console.log("Logout pressed");
        }}
        labelStyle={{ color: textColor }}
      />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    alignItems: "center",
    marginBottom: 10,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
