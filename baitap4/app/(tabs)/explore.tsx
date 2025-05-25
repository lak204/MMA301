import { Image } from "expo-image";
import { StyleSheet } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">React Native Components</ThemedText>
      </ThemedView>
      <ThemedText>Khám phá các thành phần cơ bản trong React Native</ThemedText>

      <Collapsible title="Core Components">
        <ThemedText type="defaultSemiBold">View</ThemedText>
        <ThemedText>
          Container cơ bản để xây dựng UI, tương tự div trong web
        </ThemedText>

        <ThemedText type="defaultSemiBold" style={{ marginTop: 10 }}>
          Text
        </ThemedText>
        <ThemedText>Hiển thị văn bản, hỗ trợ styling và nested text</ThemedText>

        <ThemedText type="defaultSemiBold" style={{ marginTop: 10 }}>
          Image
        </ThemedText>
        <ThemedText>Hiển thị hình ảnh từ nhiều nguồn khác nhau</ThemedText>
        <Image
          source={require("@/assets/images/react-logo.png")}
          style={{ alignSelf: "center", marginTop: 10 }}
        />
      </Collapsible>

      <Collapsible title="UI Components">
        <ThemedText type="defaultSemiBold">TextInput</ThemedText>
        <ThemedText>Nhập liệu văn bản từ người dùng</ThemedText>

        <ThemedText type="defaultSemiBold" style={{ marginTop: 10 }}>
          Button & TouchableOpacity
        </ThemedText>
        <ThemedText>Xử lý các tương tác chạm của người dùng</ThemedText>

        <ThemedText type="defaultSemiBold" style={{ marginTop: 10 }}>
          ScrollView & FlatList
        </ThemedText>
        <ThemedText>Hiển thị danh sách có thể cuộn</ThemedText>
      </Collapsible>

      <Collapsible title="Layout với Flexbox">
        <ThemedText>
          React Native sử dụng Flexbox để bố trí các thành phần UI. Các thuộc
          tính phổ biến:
        </ThemedText>
        <ThemedText style={{ marginTop: 10 }}>
          • flexDirection: 'row' | 'column'{"\n"}• justifyContent: 'center' |
          'space-between'{"\n"}• alignItems: 'center' | 'flex-start'{"\n"}•
          flex: number
        </ThemedText>
        <ExternalLink href="https://reactnative.dev/docs/flexbox">
          <ThemedText type="link">Tìm hiểu thêm về Flexbox</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title="Style & Theme">
        <ThemedText>
          Styling trong React Native sử dụng JavaScript object với các thuộc
          tính tương tự CSS. Hỗ trợ dark/light mode và responsive design.
        </ThemedText>
        <ExternalLink href="https://reactnative.dev/docs/style">
          <ThemedText type="link">Style Guide</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title="Animation">
        <ThemedText>
          React Native cung cấp API Animation để tạo các hiệu ứng mượt mà. Ví dụ
          về animation wave dưới đây:
        </ThemedText>
        <ThemedView style={{ alignItems: "center", marginTop: 10 }}>
          <HelloWave />
        </ThemedView>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
