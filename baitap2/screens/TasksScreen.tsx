import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useTheme } from "@react-navigation/native";

const dummyTasks = [
  { id: "1", title: "Complete homework", status: "pending" },
  { id: "2", title: "Buy groceries", status: "completed" },
  { id: "3", title: "Exercise", status: "pending" },
];

export default function TasksScreen() {
  const { colors } = useTheme();

  const renderItem = ({ item }) => (
    <View style={[styles.taskItem, { backgroundColor: colors.card }]}>
      <Text style={[styles.taskTitle, { color: colors.text }]}>
        {item.title}
      </Text>
      <Text style={[styles.taskStatus, { color: colors.primary }]}>
        {item.status}
      </Text>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Tasks</Text>
      <FlatList
        data={dummyTasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  list: {
    flex: 1,
  },
  taskItem: {
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
  taskStatus: {
    fontSize: 14,
    marginTop: 5,
  },
});
