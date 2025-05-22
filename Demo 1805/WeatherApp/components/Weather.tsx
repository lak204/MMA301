import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { useThemeColor } from "../hooks/useThemeColor";
import { WeatherData } from "../services/weatherService";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

interface WeatherProps {
  weatherData: WeatherData | null;
  loading: boolean;
}

const Weather: React.FC<WeatherProps> = ({ weatherData, loading }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const backgroundColor = useThemeColor(
    { light: "#fff", dark: "#000" },
    "background"
  );
  const textColor = useThemeColor({ light: "#000", dark: "#fff" }, "text");

  if (loading) {
    return (
      <ThemedView style={styles.container}>
        <ActivityIndicator size="large" color={textColor} />
      </ThemedView>
    );
  }

  if (!weatherData) {
    return (
      <ThemedView style={styles.container}>
        <ThemedText>No weather data available</ThemedText>
      </ThemedView>
    );
  }

  const getWeatherIcon = (main: string) => {
    switch (main.toLowerCase()) {
      case "clear":
        return "weather-sunny";
      case "clouds":
        return "weather-cloudy";
      case "rain":
        return "weather-rainy";
      case "snow":
        return "weather-snowy";
      default:
        return "weather-cloudy";
    }
  };

  return (
    <ThemedView style={styles.container}>
      <View style={styles.weatherCard}>
        <ThemedText style={styles.city}>{weatherData.name}</ThemedText>
        <MaterialCommunityIcons
          name={getWeatherIcon(weatherData.weather[0].main)}
          size={100}
          color={textColor}
        />
        <ThemedText style={styles.temperature}>
          {Math.round(weatherData.main.temp)}°C
        </ThemedText>
        <ThemedText style={styles.description}>
          {weatherData.weather[0].description}
        </ThemedText>
        <View style={styles.detailsContainer}>
          <View style={styles.detail}>
            <MaterialCommunityIcons
              name="water-percent"
              size={24}
              color={textColor}
            />
            <ThemedText>{weatherData.main.humidity}%</ThemedText>
            <ThemedText style={styles.detailLabel}>Humidity</ThemedText>
          </View>
          <View style={styles.detail}>
            <MaterialCommunityIcons
              name="thermometer"
              size={24}
              color={textColor}
            />
            <ThemedText>{Math.round(weatherData.main.feels_like)}°C</ThemedText>
            <ThemedText style={styles.detailLabel}>Feels like</ThemedText>
          </View>
        </View>
      </View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  weatherCard: {
    width: "100%",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
  },
  city: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  temperature: {
    fontSize: 48,
    fontWeight: "bold",
    marginVertical: 10,
  },
  description: {
    fontSize: 18,
    textTransform: "capitalize",
    marginBottom: 20,
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 20,
  },
  detail: {
    alignItems: "center",
  },
  detailLabel: {
    fontSize: 12,
    marginTop: 4,
  },
});

export default Weather;
