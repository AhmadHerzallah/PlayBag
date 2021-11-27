import * as React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from './HomeScreen'
import Item from './Item'
import ProfileImage from '../ProfileComponents/ProfileImage'
import ProfileScreen from '../ProfileComponents/ProfileScreen'
import EditProfile from '../ProfileComponents/EditProfile'
import RegisterScreen from '../RegisterComponents/RegisterScreen'
import RegisterItem from '../RegisterComponents/RegisterItem'
import MenuScreen from '../IconsComponents/MenuScreen'
import SupportScreen from '../IconsComponents/SupportScreen'
import FeedbackScreen from '../IconsComponents/FeedbackScreen'
import HostScreen from '../HostComponents/HostScreen'

import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()
console.disableYellowBox = true

export default function HomeNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Item" component={Item} />
      <Stack.Screen name="MenuScreen" component={MenuScreen} />
      <Stack.Screen name="SupportScreen" component={SupportScreen} />
      <Stack.Screen name="FeedbackScreen" component={FeedbackScreen} />
      <Stack.Screen name="HostScreen" component={HostScreen} />
    </Stack.Navigator>
  )
}
