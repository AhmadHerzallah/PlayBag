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
import firebase from 'firebase'
import { auth } from '../../auth'
console.disableYellowBox = true

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState('')
  const { login, logOut, currentUser } = useAuth()
  const [state, setState] = useState({})

  const [password, setPassword] = useState('')

  async function signInHandler() {
    if (email === '' || email === undefined) {
      alert('PLEASE FILL OUT THE EMAIL INPUT')
    } else if (password === '' || password === undefined) {
      alert('PLEASE FILL OUT THE PASSWORD INPUT')
    }
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user
        console.log('signed in')
        navigation.navigate('Home')
      })
      .catch((error) => {
        alert('Credentials mistake')
        alert(error)
        var errorCode = error.code
        var errorMessage = error.message
        console.log(`Error be like: `)
      })
  }

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((success) => {
        let user = success.user

        const obj = {
          username: user.displayName,
          email: user.email,
          uid: user.uid,
          img: user.photoURL,
        }
        console.log(obj)
      })
      .catch((err) => err.message)
  }
  const signOut = () => {
    logOut()
  }

  if (currentUser) {
    console.log(currentUser)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          color: '#1FFFC9',
          fontSize: 40,
        }}
      >
        PlayBag
      </Text>
      <View>
        <TextInput
          style={styles.textInput}
          placeholder="email or username"
          onChangeText={setEmail}
          placeholderTextColor="white"
        />
        <TextInput
          style={styles.textInput}
          placeholder="password"
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
          onPress={signInHandler}
        >
          <Text
            style={{
              alignSelf: 'center',
              color: 'lightgray',
            }}
          >
            Sign in
          </Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          color: 'white',
          marginTop: 15,
        }}
      >
        or sign in with:-
      </Text>
      <TouchableOpacity
        onPress={() => {
          console.log('Executing...')
          signInWithGoogle()
          console.log('Done')
        }}
      >
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
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
        }}
      ></View>
      <Text
        style={{
          color: 'white',
          marginTop: 15,
        }}
      >
        Already have an account?
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={{ color: '#42B4E6', marginTop: 10 }}>
          Make a new account
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1D1A1B',
    paddingTop: Constants.statusBarHeight + 15,
  },
  textInput: {
    borderRadius: 5,
    borderColor: '#8c8c8c',
    borderWidth: 4,
    width: 250,
    color: 'white',
    marginTop: 60,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
  },
})
