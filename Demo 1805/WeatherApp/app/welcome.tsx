import React from 'react';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyleSheet, Pressable, Dimensions, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Animated, {
  useSharedValue,
  withSequence,
  withSpring,
  withTiming,
  withRepeat,
  useAnimatedStyle,
} from "react-native-reanimated";
import { ThemedText } from "@/components/ThemedText";

const { width } = Dimensions.get("window");

export default function WelcomeScreen() {
  const [text, setText] = React.useState("");
  const fullText = "Chào mừng bạn đến với ứng dụng của Lê Anh Khôi";
  const buttonY = useSharedValue(50);
  const emojiRotate = useSharedValue(0);
  const subtitleOpacity = useSharedValue(0);

  React.useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
        subtitleOpacity.value = withTiming(1, { duration: 800 });
        buttonY.value = withSpring(0, { damping: 12 });
      }
    }, 50);

    // Emoji animation
    emojiRotate.value = withRepeat(
      withSequence(
        withTiming(-10, { duration: 500 }),
        withTiming(10, { duration: 500 }),
        withTiming(0, { duration: 500 })
      ),
      -1,
      true
    );

    return () => clearInterval(interval);
  }, []);

  const emojiStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${emojiRotate.value}deg` }]
  }));

  const subtitleStyle = useAnimatedStyle(() => ({
    opacity: subtitleOpacity.value,
    transform: [{ translateY: withSpring(subtitleOpacity.value * -20) }]
  }));

  const buttonStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: buttonY.value }],
    opacity: withSpring(buttonY.value === 0 ? 1 : 0)
  }));  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#DBEAFE', '#FFFFFF']}
        style={StyleSheet.absoluteFill}
        locations={[0, 0.7]}
      />

      <View style={styles.content}>
        <MaterialCommunityIcons 
          name="weather-cloudy" 
          size={60} 
          color="#1D4ED8" 
          style={styles.icon}
        />

        <View style={styles.titleContainer}>
          <ThemedText style={styles.title}>{text}</ThemedText>
          <Animated.Text style={[styles.emoji, emojiStyle]}>🎉</Animated.Text>
        </View>

        <Animated.View style={subtitleStyle}>
          <ThemedText style={styles.subtitle}>
            Khám phá trải nghiệm tiện lợi & thông minh cùng chúng tôi.
          </ThemedText>
        </Animated.View>

        <Animated.View style={[styles.buttonContainer, buttonStyle]}>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              { opacity: pressed ? 0.9 : 1 }
            ]}
            onPress={() => router.replace("/(tabs)")}
          >
            <ThemedText style={styles.buttonText}>Bắt đầu</ThemedText>
            <MaterialCommunityIcons name="arrow-right" size={24} color="#fff" />
          </Pressable>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  icon: {
    marginBottom: 40,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1D4ED8", // blue-700
    textAlign: "center",
    lineHeight: 40,
  },
  emoji: {
    fontSize: 32,
    marginLeft: 8,
  },
  subtitle: {
    fontSize: 18,
    color: "#4B5563", // gray-600
    textAlign: "center",
    marginTop: 16,
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 100,
    width: width - 48,
  },
  button: {
    backgroundColor: "#FBBF24", // yellow-400
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});