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
  ScrollView,
} from 'react-native'
import Constants from 'expo-constants'
import { Ionicons } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

export default function EditProfile({ route, navigation }) {
  const CurrentUserStats = route.params

  const [userBio, setUserBio] = useState(``)
  const [userName, setUserName] = useState('')

  const userEdit = { userName, userBio }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph1}>
        your old Name : {CurrentUserStats.userName2}
      </Text>
      <TextInput
        style={[
          styles.inputBar,
          {
            borderWidth: 4,

            padding: 20,
          },
        ]}
        placeholder="Change your username"
        onChangeText={setUserName}
      />

      <Text style={styles.paragraph2}>
        your old Bio : {CurrentUserStats.userBio2}
      </Text>
      <TextInput
        style={[
          styles.inputBar,
          {
            borderWidth: 4,

            padding: 25,
          },
        ]}
        placeholder="Change your bio"
        onChangeText={setUserBio}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          Alert.alert(
            'Save Changes',
            'Are you sure you want to save these changes?',
            [
              {
                text: 'cancel',
                onPress: () => {
                  null
                },
              },
              {
                text: 'confirm',
                onPress: () => {
                  navigation.navigate('ProfileScreen', userEdit)
                },
              },
            ]
          )
        }}
      >
        <Text style={styles.paragraph4}>Save changes</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('ProfileScreen')}
      >
        <Text>Get back to your profile</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // textAlign: 'left',
    textAlign: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'lightgray',
    padding: 8,
  },
  paragraph1: {
    fontSize: 20,
    marginBottom: 20,
    // margin:3,
    marginLeft: 7,

    fontWeight: 'bold',
  },
  inputBar: {
    color: 'black',
    borderRadius: 20,
    borderColor: '#404040',
  },
  paragraph2: {
    marginLeft: 15,

    // margin:6.7,

    marginTop: 30,
    fontSize: 15,
    fontWeight: 'bold',

    // textAlign: 'center',
  },
  btn: {
    padding: 7,
    color: 'black',
    marginLeft: 7,

    margin: 6,
    borderRadius: 10,

    borderWidth: 4,
    borderColor: 'white',
    alignItems: 'center',
  },
  paragraph4: {
    fontSize: 17,
    fontWeight: 'bold',
  },
})
console.disableYellowBox = true
