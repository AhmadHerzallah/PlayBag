import React, { useState } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  TextInput,
  Image,
} from 'react-native'
import Constants from 'expo-constants'
import { Ionicons } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

// You can import from local files
import ProfileNavigator from './ProfileComponents/ProfileNavigator'
import HomeNavigator from './HomeComponents/HomeNavigator'
import RegisterNavigator from './RegisterComponents/RegisterNavigator'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper'

const Tab = createBottomTabNavigator()

const Stack = createStackNavigator()

export default function HomeScreen() {
  const getTabBarVisibility = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route)

    if (routeName === 'MenuScreen') {
      return false
    }

    return true
  }
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'gray',
        activeBackgroundColor: 'black',
        inactiveBackgroundColor: '#404040',
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Register') {
            return (
              <Ionicons
                name={focused ? 'reader' : `reader-outline`}
                size={focused ? size + 3 : size}
                color={color}
              />
            )
          } else if (route.name === 'Home') {
            return (
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={focused ? size + 3 : size}
                color={color}
              />
            )
          } else if (route.name === 'Profile') {
            return (
              <Ionicons
                name={
                  focused ? 'ios-person-circle' : 'ios-person-circle-outline'
                }
                size={focused ? size + 3 : size}
                color={color}
              />
            )
          }
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={({ route }) => ({
          tabBarVisible: getTabBarVisibility(route),
        })}
      />
      <Tab.Screen name="Register" component={RegisterNavigator} />
      <Tab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{ tabBarBadge: 6 }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})
console.disableYellowBox = true
