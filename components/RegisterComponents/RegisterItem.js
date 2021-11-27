import React, { useState, useEffect } from 'react'
import {
  Linking,
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Button,
  Dimensions,
  TextInput,
  SafeAreaView,
  Alert,
} from 'react-native'

import Constants from 'expo-constants'
import { Ionicons } from '@expo/vector-icons'

export default function Item({ route, navigation }) {
  const item = route.params

  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setHeight(Dimensions.get('window').height)
    setWidth(Dimensions.get('window').width)
  }, [])

  const [linkcolor, changelinkcolor] = useState('#666666')

  console.log(item)
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text
          style={[
            styles.title,
            { fontSize: width / 10, marginBottom: height / 12, marginTop: 60 },
          ]}
        >
          PlayBag
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={[styles.imagestyle, { width: width - 10, height: height / 3 }]}
          source={{ uri: item.thumbnail }}
        />
      </TouchableOpacity>
      <Text
        style={[
          styles.Title,
          {
            margin: height / 20,
            marginLeft: 20,
            fontSize: width / 16,
          },
        ]}
      >
        {item.title}
      </Text>
      <Text
        style={[
          styles.views,
          {
            marginBottom: height / 20 - 10,
            marginLeft: width / 14 - 10,
            fontSize: width / 14 - 10,
          },
        ]}
      >
        {item.Genres}
      </Text>

      <Text
        style={[
          styles.views,
          {
            marginBottom: height / 20 - 10,
            marginLeft: width / 14 - 10,
            fontSize: width / 14 - 10,
          },
        ]}
      >
        {item.gameName}
      </Text>
      <Text
        style={[
          styles.genres,
          {
            marginBottom: height / 30,
            fontSize: width / 14.5 - 10,
          },
        ]}
      >
        Game: {item.gameName}
      </Text>
      <TouchableOpacity
        style={{
          marginBottom: 50,
        }}
        onPress={() => {
          Alert.alert('You have been registered successfully')
          return navigation.navigate('RegisterScreen')
        }}
      >
        <Text style={{ color: 'white' }}>Register Now!</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  imagestyle: {
    alignSelf: 'center',
    borderColor: '#8c8c8c',
    borderWidth: 0.5,
    borderRadius: 20,
    shadowOpacity: 30,
    shadowColor: 10,
  },

  genres: {
    color: '#8c8c8c',
    fontWeight: 'bold',
  },
  links: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#404040',
    alignItems: 'center',
    padding: 8,
  },
  // paragraph: {
  //   margin: 24,
  //   fontSize: 18,
  //   fontWeight: 'bold',
  //   // textAlign: 'left',
  //   borderWidth: 2,
  //   borderColor: '#8c8c8c',
  //   color: 'gold',
  //   backgroundColor: 'black',
  //   padding: 3,
  // },
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
  title: {
    textAlign: 'center',
    color: '#1FFFC9',
  },
})
console.disableYellowBox = true
