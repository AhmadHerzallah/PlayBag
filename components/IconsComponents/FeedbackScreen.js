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
  Linking,
  ImageBackground,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native'
import Constants from 'expo-constants'

import { Ionicons } from '@expo/vector-icons'

export default function FeedbackScreen() {
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userFeedback, setUserFeedback] = useState('')
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        <KeyboardAvoidingView enabled>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              underlineColorAndroid="#f000"
              placeholder="Enter your full name"
              placeholderTextColor="#8b9cb5"
              onChangeText={setUserName}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              underlineColorAndroid="#f000"
              placeholder="E-mail"
              placeholderTextColor="#8b9cb5"
              keyboardType="email-address"
              onChangeText={setUserEmail}
            />
          </View>

          <View style={styles.feddback}>
            <TextInput
              style={styles.inputStyle}
              underlineColorAndroid="#f000"
              placeholder="Feedback"
              placeholderTextColor="#8b9cb5"
              onChangeText={setUserFeedback}
            />
          </View>

          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={() => {
              Alert.alert('Send successfully')
            }}
          >
            <Text style={styles.buttonTextStyle}> Send </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#0C4271',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#0C4271',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    marginTop: 200,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  feddback: {
    flexDirection: 'row',
    height: 80,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
})
console.disableYellowBox = true
