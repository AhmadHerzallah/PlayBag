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
import AppLoading from 'expo-app-loading'
import { useAuth } from './AuthContext'
import { auth } from '../../auth'
import firebase from 'firebase'

export default function Signup({ navigation }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const signUpHandler = async () => {
    let passwordRule = new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
    )
    if (name === '' || name === undefined) {
      alert('PLEASE FILL OUT THE NAME INPUT')
    } else if (email === '' || email === undefined) {
      alert('PLEASE FILL OUT THE EMAIL INPUT')
    } else if (password === '' || password === undefined) {
      alert('PLEASE FILL OUT THE PASSWORD INPUT')
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res)
        firebase
          .database()
          .ref('users/' + res.user.uid)
          .set({
            name: name,
            email: email,
          })
        navigation.navigate('Home')
      })
      .catch((err) => {
        console.log(err)
        switch (err.code) {
          case 'auth/email-already-in-use':
            alert('bruh, this email is already in use.')
            break
          case 'auth/invaild-email':
            alert('Provide a valid email')
            break
          case 'auth/weak-password':
            alert('bruh, write a better password')
            break
        }
        alert(err)
        var errorCode = err.code
        var errorMessage = err.message
        console.log(`Error be like: `)
      })
  }
  console.disableYellowBox = true

  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          color: '#1FFFC9',
          fontSize: 40,
          marginTop: 40,
        }}
      >
        PlayBag
      </Text>
      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Name"
          onChangeText={setName}
          placeholderTextColor="white"
          name="name"
        />

        <TextInput
          style={styles.textInput}
          placeholder="Email or username"
          onChangeText={setEmail}
          placeholderTextColor="white"
          name="email"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          onChangeText={setPassword}
          placeholderTextColor="white"
          secureTextEntry
        />
        <TouchableOpacity
          style={{
            alignSelf: 'center',
            marginTop: 20,
            marginBottom: 10,
            borderWidth: 5,
            width: 100,
            borderRadius: 5,
            height: 50,
            justifyContent: 'center',
            borderColor: 'lightgray',
          }}
          onPress={signUpHandler}
        >
          <Text
            style={{
              alignSelf: 'center',
              color: 'lightgray',
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          color: 'white',
          marginTop: 15,
        }}
      >
        or sign up with:-
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}
      >
        <Ionicons name={'logo-google'} size={45} color={'white'} />
        <Ionicons
          name={'logo-twitter'}
          size={45}
          color={'white'}
          style={{
            marginLeft: 35,
            marginRight: 35,
          }}
        />
        <Ionicons name={'logo-steam'} size={45} color={'white'} />
      </View>
      <Text
        style={{
          color: 'white',
          marginTop: 15,
        }}
      >
        have an account?
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Text style={{ color: '#42B4E6', marginTop: 10 }}>Sign in instead</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1D1A1B',
    paddingTop: 20,
  },
  textInput: {
    borderRadius: 5,
    borderColor: '#8c8c8c',
    borderWidth: 4,
    width: 250,
    color: 'white',
    marginTop: 25,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
  },
})
