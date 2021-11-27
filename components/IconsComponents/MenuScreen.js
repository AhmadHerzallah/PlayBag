import React, { useState, useEffect } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  FlatList,
  TextInput,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native'
import Constants from 'expo-constants'
import { Ionicons } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

export default function MenuScreen({ navigation }) {
  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setHeight(Dimensions.get('window').height)
    setWidth(Dimensions.get('window').width)
  }, [])

  const data = [
    { ScreenName: 'HomeScreen', Name: 'Home Page', id: 1 },
    { ScreenName: 'HostScreen', Name: 'Host', id: 2 },
    { ScreenName: 'SupportScreen', Name: 'Support', id: 3 },
    { ScreenName: 'FeedbackScreen', Name: 'Give us a Feedback', id: 4 },
  ]
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={{ flex: 1 }}
        data={data}
        renderItem={({ item }) => {
          return (
            <View style={styles.container}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(item.ScreenName)
                }}
              >
                <Text style={[styles.paragraph1, { width: width / 1.7 }]}>
                  {item.Name}
                </Text>
              </TouchableOpacity>
            </View>
          )
        }}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#404040',
    textAlign: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  paragraph1: {
    paddingBottom: 18,
    paddingTop: 18,
    textAlign: 'center',
    fontSize: 25,
    margin: 40,
    backgroundColor: '#666666',
    fontWeight: 'bold',
  },
})
console.disableYellowBox = true
