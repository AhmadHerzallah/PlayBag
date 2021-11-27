import * as React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import ProfileScreen from './ProfileScreen'
import ProfileImage from './ProfileImage'
import EditProfile from './EditProfile'

import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

export default function RegisterNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="ProfileImage" component={ProfileImage} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  )
}
