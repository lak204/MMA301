import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, Theme, DarkTheme, DefaultTheme } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import DashboardScreen from '../screens/DashboardScreen';
import TasksScreen from '../screens/TasksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { useThemeContext } from '../context/ThemeContext';

const Tab = createBottomTabNavigator();

const customLightTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#007AFF',
    background: '#F8F8F8',
    card: '#FFFFFF',
    text: '#000000',
  },
};

const customDarkTheme: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#0A84FF',
    background: '#000000',
    card: '#1C1C1E',
    text: '#FFFFFF',
  },
};

function TabNavigator() {
  const { theme } = useThemeContext();
  
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = 'home';

          if (route.name === 'Dashboard') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Tasks') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme === 'dark' ? '#0A84FF' : '#007AFF',
        tabBarInactiveTintColor: theme === 'dark' ? '#8E8E93' : '#999999',
        tabBarStyle: {
          backgroundColor: theme === 'dark' ? '#1C1C1E' : '#FFFFFF',
          borderTopColor: theme === 'dark' ? '#38383A' : '#E5E5EA',
        },
        headerStyle: {
          backgroundColor: theme === 'dark' ? '#1C1C1E' : '#FFFFFF',
        },
        headerTintColor: theme === 'dark' ? '#FFFFFF' : '#000000',
      })}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Tasks" component={TasksScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  const { theme } = useThemeContext();
  
  return (
    <NavigationContainer theme={theme === 'dark' ? customDarkTheme : customLightTheme}>
      <TabNavigator />
    </NavigationContainer>
  );
}
