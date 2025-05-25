import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, Theme, DarkTheme, DefaultTheme } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import DashboardScreen from '../screens/DashboardScreen';
import TasksScreen from '../screens/TasksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { useThemeContext } from '../context/ThemeContext';
