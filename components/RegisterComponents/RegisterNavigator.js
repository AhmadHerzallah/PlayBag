import * as React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import RegisterScreen from './RegisterScreen'
import RegisterItem from './RegisterItem'

import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

export default function RegisterNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="RegisterItem" component={RegisterItem} />
    </Stack.Navigator>
  )
}
console.disableYellowBox = true
