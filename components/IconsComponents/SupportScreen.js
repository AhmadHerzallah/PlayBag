import * as React from 'react'
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
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native'
import Constants from 'expo-constants'

import { Ionicons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import { EvilIcons } from '@expo/vector-icons'

import { Card } from 'react-native-paper'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>GET SUPPORT</Text>
      <Image
        source={{
          uri: 'https://cdn.discordapp.com/attachments/822514571394285659/864859667394199603/depositphotos_253046712-stock-illustration-customer-support-concept-vector-illustration.png',
        }}
        style={{
          width: 200,
          height: 200,
          borderRadius: 200 / 2,
          alignSelf: 'center',
        }}
      />

      <TouchableOpacity
        onPress={() => {
          return Linking.openURL(
            'https://www.facebook.com/profile.php?id=100003161961171'
          )
        }}
      >
        <Text
          style={{
            frontSize: 26,
            frontStyle: 'normal',
            color: 'black',
          }}
        >
          <EvilIcons name="sc-facebook" size={24} color="blue" />
          Hassan Jouda
        </Text>
        <TouchableOpacity
          onPress={() => {
            return Linking.openURL('https://www.facebook.com/ahmad.codes05')
          }}
        ></TouchableOpacity>
        <Text
          style={{
            frontSize: 26,
            frontStyle: 'normal',
            color: 'black',
            marginTop: 10,
          }}
        >
          <EvilIcons name="sc-facebook" size={24} color="blue" />
          Ahmad Herzallah
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          return Linking.openURL(
            'https://www.facebook.com/profile.php?id=100016372425497'
          )
        }}
      >
        <Text
          style={{
            frontSize: 26,
            frontStyle: 'normal',
            color: 'black',
            marginTop: 10,
          }}
        >
          <EvilIcons name="sc-facebook" size={24} color="blue" />
          Hosny Al-khatib
        </Text>
        <Text
          style={{
            textAlign: 'center',
            margin: 10,
            frontSize: 10,
            fontFamily: 'system-ui',
          }}
        >
          You can also contact us
        </Text>
      </TouchableOpacity>
      <Text style={styles.phone}>
        <Ionicons name={'ios-call'} size={20} />
        +970 595096298 {'\n'}
        <Ionicons name={'ios-call'} size={20} />
        +970 592137216{'\n'}
        <Ionicons name={'ios-mail'} size={20} />
        hassan.jd.2006@gmail.com{'\n'}
      </Text>
      <SafeAreaView style={styles.wsey}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            justifyContent: 'center',
            alignContent: 'center',
          }}
        >
          <KeyboardAvoidingView enabled>
            <View style={styles.feddback}>
              <TextInput
                style={styles.inputStyle}
                underlineColorAndroid="#f000"
                placeholder="Feedback"
                placeholderTextColor="#8b9cb5"
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
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'ROBOT',
    marginTop: -200,
  },
  phone: {
    borderWidth: 5,
    borderColor: '#476072',
    padding: 2,
    margin: 5,
    paddingTop: 0,
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: '#334257',
    color: '#EEEEEE',
    fontSize: 15,
    marginTop: 10,
  },
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
