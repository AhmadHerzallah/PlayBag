import React, { useState, useEffect } from 'react'
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
import firebase from 'firebase'
import { useAuth } from '../Authentication/AuthContext'
import { auth } from '../../auth'
import * as ImagePicker from 'expo-image-picker'

import { Card } from 'react-native-paper'

const defaultuserImage =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcGgha0jZQC1WoSAL26FDw74V5ODkrkI36vw&usqp=CAU'

export default function ProfileScreen({ route, navigation }) {
  const [userBio2, setUserBio2] = useState(`Hello I'm hosny`)
  const [userName2, setUserName2] = useState('NoName')
  const userEdit = route.params
  console.log(userEdit)
  useEffect(() => {
    if (userEdit?.userName) {
      setUserName2(userEdit.userName)
    }
    if (userEdit?.userBio) {
      setUserBio2(userEdit.userBio)
    }
  }, [userEdit])

  const [userImage, setuserImage] = React.useState(defaultuserImage)

  let pickImage = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync()

    if (permissionResult.granted === false) {
      return
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
    })

    if (!result.cancelled) {
      setuserImage(result.uri)
    }
    console.log(result.uri)
  }
  const CurrentUserStats = { userName2, userBio2 }

  const { logOut } = useAuth()

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph1}>noname21.08</Text>

      <TouchableOpacity onPress={pickImage}>
        <Image
          borderRadius="1000"
          style={styles.pfp}
          source={{
            uri: userImage,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('ProfileImage', userImage)}
      >
        <Text style={styles.paragraph4}>Click me to show full image</Text>
      </TouchableOpacity>

      <Text style={styles.paragraph2}>{userName2}</Text>
      <Text style={styles.paragraph}>{userBio2}</Text>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('EditProfile', CurrentUserStats)}
      >
        <Text style={styles.paragraph4}>Edit your profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          Alert.alert(
            'Sign out',
            'Are you sure you want to sign out from this account?',
            [
              {
                text: 'cancel',
                onPress: () => {
                  null
                },
              },
              {
                text: 'confirm',
                onPress: logOut,
              },
            ]
          )
        }}
      >
        <Text style={styles.paragraph4}>Sign out</Text>
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
    fontSize: 28,
    marginBottom: 20,
    // margin:3,
    marginLeft: 7,

    fontWeight: 'bold',
  },
  btn: {
    padding: 7,
    color: 'black',
    marginLeft: 7,
    borderRadius: 12,
    margin: 6,
    borderWidth: 4,
    borderColor: '#404040',
    alignItems: 'center',
  },
  pfp: {
    borderRadius: 100,
    width: 130,
    height: 130,
  },
  paragraph: {
    fontSize: 20,
    marginBottom: 20,
    marginTop: 15,
    marginLeft: 15,
  },
  paragraph2: {
    marginLeft: 15,

    // margin:6.7,

    marginTop: 30,
    fontSize: 25,
    fontWeight: 'bold',
    // textAlign: 'center',
  },
  paragraph4: {
    fontSize: 17,
    fontWeight: 'bold',
  },
})
