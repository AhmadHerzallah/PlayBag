import React, { useState, useEffect } from 'react'
import {
  Linking,
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  Button,
  Dimensions,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native'
import Constants from 'expo-constants'
import firebase from 'firebase'
import { useAuth } from '../Authentication/AuthContext'
import { auth } from '../../auth'
import * as ImagePicker from 'expo-image-picker'
import { Ionicons } from '@expo/vector-icons'
import DateTimePickerModal from 'react-native-modal-datetime-picker'

const HostScreen = () => {
  const [imageUri, setImageUri] = React.useState(
    'https://i.stack.imgur.com/y9DpT.jpg'
  )
  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)
  const [title, setTitle] = useState('')
  const [gameName, setGameName] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false)

  useEffect(() => {
    setHeight(Dimensions.get('window').height)
    setWidth(Dimensions.get('window').width)
  }, [])

  let pickImage = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync()

    if (permissionResult.granted === false) {
      return
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
    })

    if (!result.cancelled) {
      setImageUri(result.uri)
    }
  }

  const handleConfirm = (date) => {
    console.warn('A date has been picked: ', date)
    setDate(date)
    console.log(typeof date)
    console.log(date)
    hideDatePicker()
  }
  const showDatePicker = () => {
    setDatePickerVisibility(true)
  }

  const hideDatePicker = () => {
    setDatePickerVisibility(false)
  }

  const handleSubmit = () => {
    firebase
      .database()
      .ref(
        'tournaments/' + `${title}-${Math.random().toString(36).substring(6)}`
      )
      .set({
        title: title,
        gameName: gameName,
        description: description,
        date: date.toDateString(),
      })
      .then(() => {
        console.warn({
          title: title,
          gameName: gameName,
          description: description,
          date: date.toDateString(),
        })
      })
      .catch((err) => {
        console.warn(err)
        alert(err)
        var errorCode = err.code
        var errorMessage = err.message
        console.log(`Error be like: ${errorMessage} ${errorCode} `)
      })
  }
  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          flex: 1,
          backgroundColor: '#404040',
        },
      ]}
    >
      <View style={{ width: width, flexDirection: 'row' }}>
        <TouchableOpacity
          style={{
            marginLeft: 5,
          }}
        >
          <Ionicons name={'reorder-three-outline'} size={45} color={'white'} />
        </TouchableOpacity>
        <Text
          style={[
            styles.title,
            { fontSize: width / 10, marginLeft: 60, marginRight: 20 },
          ]}
        >
          PlayBag
        </Text>
        <TouchableOpacity
          style={{
            marginLeft: width / 30,
            marginTop: 5,
          }}
        >
          <Ionicons name={'add-circle-outline'} size={33} color={'white'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: 5,
          }}
        >
          <Ionicons
            name={'notifications-circle-outline'}
            size={33}
            color={'white'}
          />
        </TouchableOpacity>
      </View>

      <Text
        style={{
          fontSize: 20,
          marginLeft: 10,
          marginTop: 20,
          color: 'white',
        }}
      >
        Host a Tournament
      </Text>

      <View
        style={{
          alignItems: 'center',
          marginTop: 20,
        }}
      >
        <TouchableOpacity onPress={pickImage}>
          <Image
            source={{ uri: imageUri }}
            style={{ width: width, height: height / 3 }}
          />
        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 15,
          }}
        >
          <TextInput
            style={styles.inputStyle}
            underlineColorAndroid="#f000"
            placeholder="Title"
            onChangeText={setTitle}
            placeholderTextColor="#8b9cb5"
          />
          <TextInput
            style={styles.inputStyle}
            underlineColorAndroid="#f000"
            placeholder="Game name"
            onChangeText={setGameName}
            placeholderTextColor="#8b9cb5"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 15,
          }}
        >
          <Button title="Show Date Picker" onPress={showDatePicker} />

          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="datetime"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            style={{
              backgroundColor: 'red',
            }}
          />

          <TextInput
            style={styles.inputStyle}
            underlineColorAndroid="#f000"
            placeholder="Description"
            onChangeText={setDescription}
            placeholderTextColor="#8b9cb5"
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
console.disableYellowBox = true
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#404040',
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },

  button: {
    width: 150,
    height: 30,
    margin: 30,
    borderRadius: 50,
    backgroundColor: '#dedede',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'gray',
  },
  title: {
    textAlign: 'center',
    color: '#1FFFC9',
  },
  imagestyle: {
    alignSelf: 'center',
    borderColor: '#8c8c8c',
    borderWidth: 0.5,
    borderRadius: 20,
    shadowOpacity: 30,
    shadowColor: 10,
  },
  Title: {
    alignSelf: 'flex-start',
    color: '#8c8c8c',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  views: {
    color: '#8c8c8c',
    fontWeight: 'bold',
  },
  searchBar: {
    padding: 9,
  },
  inputStyle: {
    flex: 1,
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    width: 120,
    marginTop: 10,
    marginBottom: 10,
    color: 'white',
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
    margin: 5,
  },
})

export default HostScreen
