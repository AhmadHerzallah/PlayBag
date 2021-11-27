import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HostScreen from "./HostScreen"


const Stack = createStackNavigator();

const HostNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="HostScreen" component={HostScreen} />
  </Stack.Navigator>
);

export default HostNavigator;
