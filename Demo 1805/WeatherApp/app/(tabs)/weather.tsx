import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { Alert, StyleSheet } from "react-native";
import { ThemedView } from "../../components/ThemedView";
import Weather from "../../components/Weather";
import {
  getWeatherByLocation,
  WeatherData,
} from "../../services/weatherService";

export default function WeatherScreen() {
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          Alert.alert(
            "Permission Denied",
            "Please grant location permissions to use this app."
          );
          setLoading(false);
          return;
        }
        const location = await Location.getCurrentPositionAsync({});
        console.log("Location:", location.coords);
        const weather = await getWeatherByLocation(
          location.coords.latitude,
          location.coords.longitude
        );
        console.log("Weather data:", weather);
        setWeatherData(weather);
      } catch (error) {
        console.error("Error fetching weather:", error);
        Alert.alert("Error", "Failed to fetch weather data");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <ThemedView style={styles.container}>
      <Weather weatherData={weatherData} loading={loading} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
