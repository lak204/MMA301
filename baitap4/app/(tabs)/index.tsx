import { Image } from "expo-image";
import { StyleSheet } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">React Native</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Giới thiệu</ThemedText>
        <ThemedText>
          React Native là framework phát triển ứng dụng di động đa nền tảng do
          Facebook phát triển. Sử dụng JavaScript/TypeScript và React để xây
          dựng ứng dụng native cho iOS và Android.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Ưu điểm chính</ThemedText>
        <ThemedText>
          • Cross-platform: Viết một lần, chạy được trên nhiều nền tảng{"\n"}•
          Hot Reload: Cập nhật ngay lập tức khi code thay đổi{"\n"}• Native
          Components: Sử dụng các thành phần gốc của iOS/Android{"\n"}• Cộng
          đồng lớn: Nhiều thư viện và tài nguyên hỗ trợ
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Công ty sử dụng</ThemedText>
        <ThemedText>
          Nhiều công ty lớn đã sử dụng React Native như: Facebook, Instagram,
          Microsoft, Walmart, Tesla, UberEats, Discord và nhiều ứng dụng phổ
          biến khác.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
